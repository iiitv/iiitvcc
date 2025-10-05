"use server";
import AddEvent from "./components/AddEvent";
import AddBlog from "./components/AddBlog";
import { createClient } from "@/utils/supabase/server";

async function page() {
  const supabase = await createClient();

  const { data: user } = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("users")
    .select("admin")
    .eq("id", user.user.id);

  if (!data || error || !data[0].admin) {
    return (
      <div className="min-h-[80vh] w-full flex flex-col items-center px-2 sm:px-4 md:px-8">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold justify-center mt-5 text-center">
          Access Denied
        </div>
        <p className="text-lg sm:text-xl text-red-500 text-center">
          You do not have permission to access this page.
        </p>
      </div>
    );
  }
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center px-2 sm:px-4 md:px-8">
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold justify-center mt-5 text-center">
        Admin Tools
      </div>
      <p className="text-lg sm:text-xl text-red-500 text-center">
        Work Carefully
      </p>
      <div className="w-full flex flex-col items-center justify-center gap-20 mt-6 sm:mt-10">
        <div className="w-full md:w-[70%] h-fit px-2 sm:px-4">
          <p className="text-xl sm:text-2xl md:text-3xl ml-4"> Add Event</p>
          <AddEvent />
        </div>
        <div className="w-full md:w-[70%] h-fit px-2 sm:px-4">
          <div className="flex flex-row items-end gap-3">
            <p className="text-xl sm:text-2xl md:text-3xl ml-4"> Add Blog</p>
            <p className="text-lg text-red-500">
              (no cloud storage so write full blog content here at a time
              without reloading the page)
            </p>
          </div>
          <AddBlog />
        </div>
      </div>
    </div>
  );
}

export default page;
