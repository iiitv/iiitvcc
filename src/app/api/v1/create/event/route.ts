import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { Tables } from "@/types/supabase";
import sharp from "sharp";

async function convertToAvif(inputFile: File): Promise<File> {
  const arrayBuffer = await inputFile.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const avifBuffer = await sharp(buffer).avif().toBuffer();

  const blob = new Blob([avifBuffer], { type: "image/avif" });
  const avifFile = new File([blob], inputFile.name, { type: "image/avif" });

  return avifFile;
}

function validateEvent(event: Tables<"events">): {
  valid: boolean;
  message?: string;
} {
  if (!event.name) {
    return { valid: false, message: "Event name is required." };
  }
  if (!event.date || isNaN(Date.parse(event.date))) {
    return {
      valid: false,
      message: "Event date is required and must be a valid date",
    };
  }
  // Add more validations as needed
  return { valid: true };
}
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const supabase = createClient();
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError || !user) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 },
      );
    }

    const isAdmin = await supabase
      .from("users")
      .select("admin")
      .eq("id", user.id);
    if (
      isAdmin.error ||
      !isAdmin.data ||
      isAdmin.data.length === 0 ||
      !isAdmin.data[0].admin
    ) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 },
      );
    }

    const formData = await request.formData();
    const event = Object.fromEntries(formData.entries()) as any;

    event.requirements = JSON.parse(event.requirements);
    event.creator = user.id;

    event.convenors = JSON.parse(event.convenors);
    event.prizes = JSON.parse(event.prizes);
    event.winners = JSON.parse(event.winners);

    const poster_file = formData.get("poster") as File;
    let poster: File | null = null;

    if (poster_file) {
      poster = await convertToAvif(poster_file);
    }

    delete event.poster;

    const validation = validateEvent(event);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, message: validation.message },
        { status: 400 },
      );
    }

    const { data, error } = await supabase
      .from("events")
      .insert([event])
      .select();
    if (error) {
      throw new Error(error.message);
    }

    const eventId = data[0]?.id;
    if (!eventId) {
      throw new Error("Failed to get event ID");
    }

    if (poster_file && poster) {
      const { error: posterUploadError } = await supabase.storage
        .from(process.env.NEXT_PUBLIC_BUCKET || "")
        .upload(`/events/${eventId}/poster`, poster, {
          upsert: true,
        });

      if (posterUploadError) {
        throw new Error(posterUploadError.message);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Event created successfully",
      id: eventId,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 },
    );
  }
}
