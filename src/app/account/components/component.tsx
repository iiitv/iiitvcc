import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LogOut, User, Mail, Lock } from "lucide-react";

interface Props extends React.HTMLAttributes<HTMLFormElement> {
  username: string | null;
  email: string | null;
  disabled: boolean;
  logout: () => void;
}

export function Form({ username, email, disabled, logout }: Props) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold">
            you have successfully{" "}
            <span className="text-primary">logged in</span>
          </h1>
          <p className="text-muted-foreground">Welcome to the platform.</p>
        </div>
        <div className="flex items-center gap-4 bg- p-4 rounded-lg bg-secondary">
          <Avatar className="h-12 w-12 bg-black">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback className="text-primary">JD</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <div className="font-medium text-secondary-foreground">
              {username || "Loading..."}
            </div>
            <div className="text-sm text-secondary-foreground opacity-80">
              {email}
            </div>
          </div>
        </div>
        <form className="space-y-4">
          <Card className="w-full max-w-md mx-auto border-none bg-secondary">
            <CardHeader>
              <CardDescription>
                Please fill out the details below to create questions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                type="submit"
                className="w-full disabled:opacity-60"
                disabled={disabled}
              >
                <Lock className="mr-2 h-4 w-4" />
                <Link href="/auth/update_password" prefetch={false}>
                  Change Password
                </Link>
              </Button>
            </CardContent>
            <CardContent className="space-y-4">
              <Button
                variant="destructive"
                className="w-full disabled:opacity-60"
                disabled={disabled}
                onClick={logout}
              >
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </Button>
            </CardContent>
            <CardFooter className="flex justify-end">
              <div className="text-center text-sm text-muted-foreground">
                <Link
                  href="/home"
                  className="font-medium hover:underline"
                  prefetch={false}
                >
                  Back to Home
                </Link>
              </div>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
}
