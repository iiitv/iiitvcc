"use server";
import { createClient } from "@/utils/supabase/server";

/**
 * Quick script to add Priyanshu to website developers
 * Run this once to update the database
 */
export async function addPriyanshuAsDeveloper() {
  try {
    const supabase = await createClient();

    // Update Priyanshu's is_dev status to true
    const { data, error } = await supabase
      .from("team")
      .update({ is_dev: true })
      .eq("name", "Priyanshu")
      .select();

    if (error) {
      console.error("Error adding Priyanshu as developer:", error);
      return {
        success: false,
        message: `Failed to update: ${error.message}`,
      };
    }

    if (!data || data.length === 0) {
      console.error("No team member found with name: Priyanshu");
      return {
        success: false,
        message: "No team member found with name: Priyanshu",
      };
    }

    console.log("✅ Successfully added Priyanshu as website developer!");
    return {
      success: true,
      message: "Successfully added Priyanshu as website developer!",
      data: data[0],
    };
  } catch (err) {
    console.error("Unexpected error:", err);
    return {
      success: false,
      message: "An unexpected error occurred",
    };
  }
}
