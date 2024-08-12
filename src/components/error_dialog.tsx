import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import PropsTypes from "prop-types";

ErrorDialog.propTypes = {
  status: PropsTypes.number,
  error: PropsTypes.string,
};

ErrorDialog.defaultProps = {
  status: 500,
  error: null,
  error_message: "unknown",
};

export default function ErrorDialog({
  status,
  error,
  error_message,
}: {
  status: number;
  error: string | null;
  error_message: string;
}) {
  const router = useRouter();
  const ReportError = () => {
    if (!window.location.href.includes("report")) {
      router.push(
        `/report?status=${status}&error=${!error ? error_message : error}&path=${window.location.href}`,
      );
    }
  };
  return (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <div className="fixed bottom-4 right-4 z-50 w-[300px] rounded-md border-2 border-none bg-white p-4 shadow-lg cursor-pointer">
          <div className="flex items-center gap-3">
            <TriangleAlertIcon className="h-5 w-5 text-destructive" />
            <p className="text-sm font-medium text-muted-foreground">
              Oops, something went wrong!
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex items-center gap-4">
            <TriangleAlertIcon className="h-8 w-8 text-destructive" />
            <DialogTitle>Oops, something went wrong!</DialogTitle>
          </div>
          <DialogDescription className="text-muted-foreground">
            {error_message == "unknown"
              ? "We're sorry, but an unexpected error has occurred. Please try again later or contact support if the issue persists."
              : error_message}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={() => router.back()} variant="outline">
            Go Back
          </Button>
          <Button onClick={ReportError} variant="destructive">
            Report Issue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function TriangleAlertIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
