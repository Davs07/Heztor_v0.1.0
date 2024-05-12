"use client";

import { cn } from "@/lib/utils";
import {
  ChevronsLeft,
  ChevronsRight,
  MenuIcon,
  PlusCircle,
  Search,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { ElementRef, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import SidebarOptions from "./SidebarOptions";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api.js";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Item from "./Item";
import { toast } from "sonner";
import { DocumentList } from "./document-list";

export default function Sidebar() {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 760px)");

  const documents = useQuery(api.documents.get);
  const create = useMutation(api.documents.create);

  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  useEffect(() => {
    if (isMobile) {
      collapse();
    }
    resetWidth();
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      collapse();
    }
  }, [pathname, isMobile]);

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    isResizingRef.current = true;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isResizingRef.current) return;

    let newWidth = event.clientX;
    if (newWidth < 210) newWidth = 210;
    if (newWidth > 420) newWidth = 420;

    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.setProperty("left", `${newWidth}px`);
      navbarRef.current.style.setProperty(
        "width",
        `calc(100% - ${newWidth}px)`
      );
    }
  };

  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "210px";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100% - 210px)"
      );
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : "210px");
      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("width", "100%");
      navbarRef.current.style.setProperty("left", "0");
      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const handleCreate = () => {
    const promise = create({
      title: "Sin título",
    });

    toast.promise(promise, {
      loading: "Creando una nueva nota...",
      success: "Nota creada",
      error: "Error al crear la nota",
    });
  };

  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar h-full bg-white dark:bg-main-superdark overflow-y-auto relative flex w-[210px] flex-col z-[999999] border-r border-slate-200  ",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0 "
        )}>
        {/* <h3 className="absolute left-5 top-2 text-main-2 font-medium">Control</h3> */}

        {/* <div
          onClick={collapse}
          role="button"
          className={cn(
            "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-2 right-2 opacity-0 group-hover/sidebar:opacity-100 transition",
            isMobile && "opacity-100"
          )}>
          <ChevronsLeft className="h-6 w-6" />
        </div> */}

        <Item label="Buscar" icon={Search} isSearch onClick={() => {}} />

        <Item onClick={() => {}} label="Configuración" icon={Settings} />
        <Item
          onClick={handleCreate}
          label="Crear Documento"
          icon={PlusCircle}
        />

        {/* <SidebarOptions /> */}

        <div>
          <DocumentList />
        </div>

        <div
          onMouseDown={handleMouseDown}
          onClick={resetWidth}
          className="opacity-0 hover:opacity-100 transition cursor-ew-resize absolute 
        h-full w-[4px] bg-main-2/10 right-0 top-0"
        />
      </aside>

      <div
        ref={navbarRef}
        className={cn(
          "absolute top-12  z-[999999]  left-60 w-[calc(100%-210px)]",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "left-0  w-full"
        )}>
        <nav className="bg-transparent absolute px-2 py-2 w-full top-2 left-16 ">
          {isCollapsed && (
            <ChevronsRight
              onClick={resetWidth}
              role="button"
              className="h-6 w-6 text-muted-foreground"
            />
          )}
        </nav>
      </div>
    </>
  );
}
