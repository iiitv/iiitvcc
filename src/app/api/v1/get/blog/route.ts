import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const supabase = createClient();
    const url = new URL(request.url);
    const id = url.searchParams.get('id');
    if (!id) {
      return NextResponse.json(
        { success: false, message: 'Missing blog ID' },
        { status: 400 }
      );
    }

    const { data: blog, error: blogError } = await supabase
      .from('blogs')
      .select('*')
      .eq('id', id)
      .single();

    if (blogError || !blog) {
      return NextResponse.json(
        { success: false, message: 'Blog not found' },
        { status: 404 }
      );
    }

    const posterUrl = `${process.env.SUPABASE_STORAGE_URL}/web_data/images/${id}/poster`;
    const blogFileUrl = `${process.env.SUPABASE_STORAGE_URL}/web_data/blogs/${id}/blog`;

    const { data: images, error: imagesError } = await supabase
      .storage
      .from('web_data')
      .list(`images/${id}/`);

    if (imagesError) {
      return NextResponse.json(
        { success: false, message: 'Error fetching images' },
        { status: 500 }
      );
    }

    const imageUrls = images.map(image => `${process.env.SUPABASE_STORAGE_URL}/web_data/blogs/${id}/images/${image.name}`);


    return NextResponse.json({
      success: true,
      message: 'Blog retrieved successfully',
      blog: {
        ...blog,
        posterUrl,
        blogFileUrl,
        images: imageUrls
      }
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
