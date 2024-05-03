import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md  font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-main-extradark text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-[#E9EAF2] hover:text-accent-foreground",
        none: "border border-main-2 bg-transparent hover:bg-slate-50  text-main-2",
        link: "text-primary underline-offset-4 hover:underline",
        purple:
          "bg-indigo-300 text-accent-foreground hover:bg-indigo-500 hover:text-white",
        blue: " bg-main-extradark hover:bg-main-2 text-main-superlight hover:text-white  ",
      },
      size: {
        none: "rounded-xl h-9 w-9",
        default: "h-10 rounded-2xl px-4 py-2",
        sm: "h-8 rounded-lg px-2",
        base: "h-11 rounded-xl px-6",
        lg: "h-11 rounded-xl px-6",
        xs: "h-5 rounded-lg px-2 gap-1 font-normal w-[80px]",
        icon: "h-8 w-8",
        i: "h-6 w-6 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
