import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Props extends React.HTMLAttributes<HTMLFormElement> {
  username: string | null;
  email: string | null;
  disabled: boolean;
}

export function Form({ username, email, disabled }: Props) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
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
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold">
            Create your <span className="text-primary">Form</span>
          </h1>
          <p className="text-muted-foreground">
            Enter your details below to get started.
          </p>
        </div>
        <form className="space-y-4">
          <Card className="w-full max-w-md mx-auto border-none bg-secondary">
            <CardHeader>
              <CardDescription>
                Please fill out the details below to create questions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button
                type="submit"
                className="disabled:opacity-60"
                disabled={disabled}
              >
                Create Questions
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
}
