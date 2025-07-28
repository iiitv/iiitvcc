"use server";
import { createClient } from "@/utils/supabase/server";

export async function fetchTeamData() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("team")
    .select("*")
    .order("batch", { ascending: true })
    .order("id", { ascending: true });

  if (error) {
    console.error("Error fetching team data:", error);
    return [];
  }
  // console.log("Fetched team data:", data)
  return data || [];
}
