"use server";
import { createClient } from "@/utils/supabase/server";

export async function updateDeveloperStatus(
  name: string,
  isDev: boolean
): Promise<{ success: boolean; message: string }> {
  try {
    const supabase = await createClient();

    // Update the team member's is_dev status based on their name
    const { data, error } = await supabase
      .from("team")
      .update({ is_dev: isDev })
      .eq("name", name)
      .select();

    if (error) {
      console.error("Error updating developer status:", error);
      return {
        success: false,
        message: `Failed to update: ${error.message}`,
      };
    }

    if (!data || data.length === 0) {
      return {
        success: false,
        message: `No team member found with name: ${name}`,
      };
    }

    return {
      success: true,
      message: `Successfully updated ${name}'s developer status to ${isDev}`,
    };
  } catch (err) {
    console.error("Unexpected error:", err);
    return {
      success: false,
      message: "An unexpected error occurred",
    };
  }
}

// Helper function to add someone as a website developer
export async function addAsWebsiteDeveloper(name: string) {
  return await updateDeveloperStatus(name, true);
}

// Helper function to remove someone from website developers
export async function removeAsWebsiteDeveloper(name: string) {
  return await updateDeveloperStatus(name, false);
}
