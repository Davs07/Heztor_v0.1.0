import { cn } from "@/lib/utils";

function Wrapper({
  children,
  color,
  className,
}: {
  children: React.ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <div
      className={`group md:max-w-[760px] sm:w-[85vw] w-[90vw] flex  gap-[2px] group text-slate-500 dark:text-white rounded-2xl mb-4 p-3 border-l-[6px] shadow-3 bg-white dark:bg-main-superdark  ${color} ${className} `}>
      {children}
    </div>
  );
}

export default Wrapper;
