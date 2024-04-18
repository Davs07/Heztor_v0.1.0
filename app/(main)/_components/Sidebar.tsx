"use client";

import { cn } from "@/lib/utils";
import { ChevronsLeft, ChevronsRight, MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { ElementRef, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import SidebarOptions from "./SidebarOptions";

export default function Sidebar() {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 1100px)");
  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar h-full bg-white dark:bg-main-superdark overflow-y-auto relative flex w-60 flex-col z-[999999]",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0"
        )}>
        <div
          role="button"
          className={cn(
            "h-6 w-6 text-muted-foreground rounded-smhover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-2 right-2 opacity-0 group-hover/sidebar:opacity-100 transition",
            isMobile && "opacity-100"
          )}>
          <ChevronsLeft className="h-6 w-6" />
        </div>

        <SidebarOptions />

        <div
          onMouseDown={() => {}}
          onClick={() => {}}
          className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute 
        h-full w-1 bg-main-2/10 right-0 top-0"
        />
      </aside>

      <div
        ref={navbarRef}
        className={cn(
          "absolute top-12  z-[999999] left-60 ",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "left-0 w-full "
        )}>
        <nav className="bg-transparent px-3 py-2 w-full top-4">
          {isCollapsed && (
            <ChevronsRight
              role="button"
              className="h-6 w-6 text-muted-foreground"
            />
          )}
        </nav>
      </div>
    </>
  );
}
