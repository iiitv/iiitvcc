import * as React from "react"

import { cn } from "@/lib/utils"
import "./styles.css"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-[8px] border border-input bg-background shadow-[0_0_0px_1000px_background_inset] shadow-background px-4 py-6 text-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
        />
    )
  }
)

Input.displayName = "Input"

export { Input }
