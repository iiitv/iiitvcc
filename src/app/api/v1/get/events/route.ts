// /api/v1/get/events/?category=upcoming&limit=10&page=1
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: NextRequest) {
  try {
    const supabase = createClient();
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category") || "";
    const limit = parseInt(searchParams.get("limit") || "5", 10);
    const page = parseInt(searchParams.get("page") || "1", 10);

    const offset = (page - 1) * limit;

    let query = supabase
      .from("events")
      .select("*")
      .range(offset, offset + limit - 1);

    if (category.toLocaleLowerCase() === "upcoming") {
      query = query.gt("date", new Date().toISOString());
    } else if (category.toLocaleLowerCase() === "past") {
      query = query.lt("date", new Date().toISOString());
    } else if (category.toLocaleLowerCase() === "ongoing") {
      query = query.eq("date", new Date().toISOString());
    }

    const { data, error } = await query;

    if (error) {
      throw new Error(error.message);
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error();
  }
}
