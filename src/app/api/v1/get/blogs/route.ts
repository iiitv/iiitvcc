import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { getPublicUrl } from "@/lib/utils";

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const supabase = createClient();

    const url = new URL(request.url);
    const limit = url.searchParams.get("limit");
    const page = url.searchParams.get("page");

    const limitNumber = limit ? parseInt(limit) : 5;
    const pageNumber = page ? parseInt(page) : 1;

    if (pageNumber < 1 || limitNumber < 1) {
      return NextResponse.json(
        { success: false, message: "Page and limit must be greater than 0" },
        { status: 400 },
      );
    }

    const offset = (pageNumber - 1) * limitNumber;

    const { data: blogs, error: blogsError } = await supabase
      .from("blogs")
      .select("*")
      .range(offset, offset + limitNumber - 1);

    if (blogsError) {
      throw new Error(blogsError.message);
    }

    const blogPromises = blogs.map(async (blog) => {
      const posterUrl = `${getPublicUrl(`/images/${blog.id}/poster`)}`;
      const blogFileUrl = `${getPublicUrl(`/blogs/${blog.id}/blog`)}`;

      const { data: images, error: imagesError } = await supabase.storage
        .from(process.env.NEXT_PUBLIC_BUCKET || "")
        .list(`images/${blog.id}`);

      if (imagesError) {
        console.log("imagesError", imagesError);
        throw new Error(imagesError.message);
      }

      const imageUrls = images.map(
        (image) => `${getPublicUrl(`/images/${blog.id}/${image.name}`)}`,
      );

      return {
        ...blog,
        posterUrl,
        blogFileUrl,
        images: imageUrls,
      };
    });

    const blogsWithAssets = await Promise.all(blogPromises);

    return NextResponse.json({
      success: true,
      message: "Blogs retrieved successfully",
      blogs: blogsWithAssets,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
