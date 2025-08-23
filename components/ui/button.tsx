import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority";
import {cn} from "@/lib/utils";


const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
          secondary: "bg-gray-900 text-white hover:bg-gray-800",
          outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "underline-offset-4 hover:underline text-primary",
          magic:
              "relative overflow-hidden text-white rounded-full px-6 py-3 font-semibold shadow-md",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 px-3 rounded-md",
          lg: "h-11 px-8 rounded-md",
        },
      },
      defaultVariants: {
        variant: "default",
        size: "default",
      },
    }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
