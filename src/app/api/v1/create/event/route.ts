import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { Tables } from "@/types/supabase";

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
    }  = await supabase.auth.getUser();
    if (userError || !user) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }
    const isAdmin = await supabase.from("users").select("admin").eq("id", user.id);
    if (isAdmin.error || !isAdmin.data || isAdmin.data.length === 0 || !isAdmin.data[0].admin) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }
    const body = await request.json();
    const { event }: { event: Tables<"events"> } = body;
    event.creator = user.id;
    const validation = validateEvent(event);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, message: validation.message },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("events")
      .insert([event])
      .select();
    if (error) {
      throw new Error(error.message);
    }
    if (!data || data.length === 0) {
      throw new Error("Failed to create event");
    }
    return NextResponse.json({
      success: true,
      message: "Event created successfully",
      id: data[0].id,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
