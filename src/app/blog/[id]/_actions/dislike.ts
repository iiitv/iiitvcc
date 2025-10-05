"use server";

import { createClient } from "@/utils/supabase/server";

export async function dislikeBlog(_: any, formData: FormData) {
  try {
    const id = formData.get("id")?.toString();
    if (!id) {
      return { success: false, message: "Missing blog ID" };
    }

    const supabase = await createClient();

    const { data } = await supabase.auth.getUser();
    if (!data?.user) {
      console.log("User not authenticated");
      return { success: false, message: "User not authenticated" };
    }

    const { data: current, error: fetchErr } = await supabase
      .from("blogs")
      .select("likes")
      .eq("id", id)
      .single();
    if (fetchErr || !current) {
      return { success: false, message: "Blog not found" };
    }

    const nextLikes = (current.likes || 0) - 1;
    console.log("Next Likes:", nextLikes);
    const { error: updateErr } = await supabase
      .from("blogs")
      .update({ likes: nextLikes })
      .eq("id", id);
    if (updateErr) {
      return { success: false, message: "Failed to update likes" };
    }

    return { success: true, likes: nextLikes };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
}
