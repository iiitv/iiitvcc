import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { Tables } from "@/types/supabase";

function validateRequestBody(body: {
  blogTable: Tables<"blogs">;
  poster?: File;
  blog?: File;
  images?: File[];
}): { valid: boolean; message?: string } {
  if (!body.blogTable.title) {
    return { valid: false, message: "Title is required" };
  }
  if (!body.poster || !body.blog) {
    return { valid: false, message: "Poster and blog files are required" };
  }
  return { valid: true };
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const supabase = createClient();

  try {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError || !user) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    // Use request.formData() to handle file uploads
    const formData = await request.formData();
    const blogData = JSON.parse(formData.get('blogData') as string);
    
    const poster = formData.get('poster') as File;
    const blogFile = formData.get('blog') as File;
    const images = formData.getAll('images') as File[];

    const validation = validateRequestBody({
      blogTable: blogData,
      poster,
      blog: blogFile,
      images
    });
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, message: validation.message },
        { status: 400 }
      );
    }

    blogData.writer = user.id;

    const { data: blogs, error: blogsError } = await supabase
      .from("blogs")
      .insert([blogData])
      .select();
    if (blogsError || !blogs || blogs.length === 0) {
      throw new Error(blogsError?.message || "Failed to create blog");
    }
    console.log("Here is the blog data", blogs);
    const blogId = blogs[0].id;

    const uploadPromises = [
      supabase.storage
        .from("web_data")
        .upload(`blogs/${blogId}/blog`, blogFile),
      supabase.storage
        .from("web_data")
        .upload(`blogs/${blogId}/poster`, poster),
    ];
    if (images.length > 0) {
      images.forEach((image: File) => {
        console.log("Uploading image", image);
        uploadPromises.push(
          supabase.storage
          .from("web_data")
          .upload(`images/${blogId}/${image.name}`, image)
        );
      });
    }
    
    const uploadResults = await Promise.all(uploadPromises);
    
    const [blogUploadResult, posterUploadResult, ...imageUploadResults] =
      uploadResults;
    if (blogUploadResult.error || posterUploadResult.error) {
      throw new Error(
        blogUploadResult.error?.message || posterUploadResult.error?.message
      );
    }
    for (const result of imageUploadResults) {
      if (result.error) {
        throw new Error(result.error.message);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Blog created successfully",
      id: blogId,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
