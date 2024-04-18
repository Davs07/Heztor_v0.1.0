import { cn } from "@/lib/utils";

function Wrapper({
  children,
  color,
  className,
  onClick,
}: {
  children: React.ReactNode;
  color?: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        `group md:max-w-[760px] sm:w-[85vw] w-[90vw] flex  gap-[2px] group text-slate-500 dark:text-white rounded-xl mb-4 p-3  shadow-3 bg-white dark:bg-main-superdark`,
        className,
        color
      )}>
      {children}
    </div>
  );
}

export default Wrapper;
