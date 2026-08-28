"use server";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import Logout from "./components/Logout";
import Image from "next/image";
const checkIsAdmin = async () => {
  const supabase = await createClient();

  const { data: user } = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("users")
    .select("admin")
    .eq("id", user.user.id);
  if (error || !data) {
    console.error("Error fetching user data:", error);
    return false;
  }
  if (!data[0].admin) {
    return false;
  }
  return true;
};

export default async function ProfilePage() {
  const isAdmin = await checkIsAdmin();
  const supabase = await createClient();
  const { data: supaUser } = await supabase.auth.getUser();

  const { data: userRow } = await supabase
    .from("users")
    .select("username")
    .eq("id", supaUser.user.id)
    .single();

  const user = {
    name: userRow?.username || "John Doe",
    email: supaUser.user.email,
    // avatar: supaUser.user.user_metadata.avatar_url || "/profile-pic.jpg",
    avatar: "/profile-pic.jpg",
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-background text-foreground py-10">
      <div className="text-center bg-secondary rounded-2xl shadow-lg p-8 flex flex-col items-center w-full max-w-md border border-none">
        <Image
          src={user.avatar}
          width={112}
          height={112}
          alt="Profile"
          className="w-28 h-28 rounded-full border-4 border-primary shadow mb-4 object-cover"
        />
        <h1 className="text-3xl font-bold text-primary mb-1 tracking-wide">
          {user.name}
        </h1>
        <p className="text-base text-muted-foreground mb-2">{user.email}</p>
        <div className="flex flex-col items-center justify-center gap-3 w-full">
          {isAdmin && (
            <Link
              href={"/profile/admin"}
              className="w-full bg-primary text-center text-primary-foreground font-semibold py-2 rounded-lg shadow hover:bg-primary-hover transition-colors"
            >
              Go to Admin Page
            </Link>
          )}
          <Link
            href={"/profile/account"}
            className="w-full bg-secondary text-center text-primary font-semibold py-2 rounded-lg border border-primary shadow hover:bg-primary/20 transition-colors"
          >
            Account Settings
          </Link>
          <Logout />
        </div>
      </div>
    </div>
  );
}
