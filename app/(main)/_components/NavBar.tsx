"use client";

import { navigation } from "../data/NavigationLinks.js";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { useMediaQuery } from "usehooks-ts";
import { Button } from "@/components/ui/button";
import { HeztorIcon } from "./HeztorIcon";
import { Plus } from "lucide-react";

function NavB() {
  const navigationSec = navigation;
  const pathname = usePathname();

  const isMobile = useMediaQuery("(max-width: 300px)");
  const isMin = useMediaQuery("(max-width: 1200px)");
  const isM = useMediaQuery("(max-width: 700px)");

  return (
    <>
      <div
        className={cn(
          "group/navigation relative flex flex-col items-center justify-between w-16 min-w-16 bg-white dark:bg-main-superdark border-r border-slate-200 dark:border-slate-50  overflow-hidden  h-full z-[9999999] px-[8px] py-3  "
        )}>
        <HeztorIcon className="size-10" />
        <div
          className={cn("w-full h-full flex justify-center items-center ")}>
          <ul
            className={cn(
              "flex flex-col justify-center items-center gap-4 text-slate-700 dark:text-white"
            )}>
            {navigationSec.map((Menu, index) => (
              <Link
                key={index}
                href={Menu.src}
                passHref={true}
                className={`group link  flex rounded-xl items-center justify-center cursor-pointer text-sm w-9 h-9 `}>
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className={`group hover:bg-[#E6ECFF] rounded-xl ${
                    pathname.indexOf(Menu.source) === 0
                      ? "  text-white hover:text-white bg-main-2 hover:bg-main-2 "
                      : ""
                  }   text-sm `}>
                  <span
                    className={`text-lg hover:text-main-2 ${
                      pathname.indexOf(Menu.source) === 0
                        ? "group-hover:text-white text-white"
                        : ""
                    }`}>
                    {Menu.icon}
                  </span>
                </Button>
                <span className="span absolute left-[4.5rem] bg-blue-950 dark:bg-slate-700 group-hover:fixed  px-2 py-1 rounded-md text-white ">
                  {Menu.title}
                </span>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <Button
            className="h-9 w-9 text-main-2 border-main-2 "
            variant={"outline"}
            size={"none"}>
            <Plus />
          </Button>
        </div>
      </div>
    </>
  );
}

export default NavB;
