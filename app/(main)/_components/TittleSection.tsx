import { cn } from "@/lib/utils";

function TittleSection({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <h3
      className={cn(
        "text-2xl font-medium text-center  text-main-2",
        className
      )}>
      {children}
    </h3>
  );
}

export default TittleSection;
