import { Loader } from "lucide-react";

import { cn } from "@/lib/utils";

import { cva, type VariantProps } from "class-variance-authority";

const spinnerVariants = cva("text-muted-foreground animate-spin", {
  variants: {
    size: {
      default: "w-4 h-4",
      sm: "w-2 h-2",
      lg: "w-6 h-6",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {}

export const Spinner = ({ size, ...props }: SpinnerProps) => {
  return (
    <Loader className={cn(spinnerVariants({ size }))} />
  );
};
