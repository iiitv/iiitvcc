import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { getPublicUrl } from "@/lib/utils";

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const supabase = await createClient();
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { success: false, message: "Missing blog ID" },
        { status: 400 },
      );
    }

    const { data: blog, error: blogError } = await supabase
      .from("blogs")
      .select("*")
      .eq("id", id)
      .single();

    if (blogError || !blog) {
      return NextResponse.json(
        { success: false, message: "Blog not found" },
        { status: 404 },
      );
    }

  const posterUrl = `${getPublicUrl(`/images/${id}/poster`)}`;
  const blogFileUrl = `${getPublicUrl(`/blogs/${id}/blog`)}`;

    const { data: images, error: imagesError } = await supabase.storage
      .from(process.env.NEXT_PUBLIC_BUCKET || "")
      .list(`images/${id}/`);

    if (imagesError) {
      return NextResponse.json(
        { success: false, message: "Error fetching images" },
        { status: 500 },
      );
    }

    // Determine if a banner exists and filter gallery images to exclude poster/banner
    const hasBanner = images.some((img) => img.name === "banner");
    const imageUrls = images
      .filter((img) => img.name !== "poster" && img.name !== "banner")
      .map((image) => `${getPublicUrl(`/images/${id}/${image.name}`)}`);
    console.log("Image URLs:", imageUrls);
    return NextResponse.json({
      success: true,
      message: "Blog retrieved successfully",
      blog: {
        ...blog,
        posterUrl,
        ...(hasBanner ? { bannerUrl: `${getPublicUrl(`/images/${id}/banner`)}` } : {}),
        blogFileUrl,
        images: imageUrls,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
