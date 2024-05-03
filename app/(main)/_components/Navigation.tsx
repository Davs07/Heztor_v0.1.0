"use client";

import { UserButton } from "@clerk/clerk-react";
import { navigation } from "../services/Navigation.js";
import Link from "next/link";
import { usePathname } from "next/navigation";
import IconHelp from "../Icons/NavigationOptions/IconHelp.jsx";
import IconNotifications from "../Icons/NavigationOptions/IconNotifications.jsx";
import IconQuote from "../Icons/NavigationOptions/IconQuote.jsx";

import { cn } from "@/lib/utils";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import IconSearch from "../Icons/NavigationOptions/IconSearch.jsx";
import { Button } from "@/components/ui/button";
import UserItem from "./UserItem";
import { Separator } from "@/components/ui/separator";
import DateLocal from "./DateLocal";

function Navigation() {
  const navigationSec = navigation;
  const pathname = usePathname();

  const isMobile = useMediaQuery("(max-width: 300px)");
  const isMin = useMediaQuery("(max-width: 1200px)");
  const isM = useMediaQuery("(max-width: 700px)");

  const [isOpenNotify, setIsOpenNotify] = useState(true);

  /* #ECF1FF */

  /* bg-navigation */
  /* #F0F2FF */

  /* bg-intense */
  /* E6ECFF */

  /* bg-more-intense */
  /* #D5E0FF */
  return (
    <>
      <div
        className={cn(
          "group/navigation relative  w-full bg-white dark:bg-main-superdark border-b border-slate-200 dark:border-slate-50  overflow-hidden  flex h-14 flex-row z-[9999999] px-6  ",
          isMobile && "hidden "
        )}>
        <div
          className={cn(
            "w-full h-full flex justify-between items-center text-sm"
          )}>
          <label className="relative ">
            <span className="sr-only">Buscar</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2 ">
              <IconSearch />
            </span>
            <input
              placeholder="Buscar"
              type="text"
              className={cn(
                "border  border-gray-200 pl-7 w-96 h-8 outline-none overflow-hidden  rounded-xl transition-all duration-500 ease-in-out hover:border-main-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ",
                isM && "w-4"
              )}
            />
          </label>
          <ul
            className={cn(
              "flex items-center justify-center  text-slate-700 dark:text-white gap-4 ",
              isMobile && "flex-wrap-reverse bg-main-superlight pb-4"
            )}>
            <Separator orientation="vertical" className="h-5 sm:block hidden" />

            <DateLocal className=" sm:block hidden" />
            <Separator orientation="vertical" className="h-5" />
            {/* Notifications */}
            <Dialog>
              <DialogTrigger>
                <Button
                  variant="ghost"
                  size="sm"
                  className={` hover:bg-[#E6ECFF] rounded-xl ${isOpenNotify && " fill-main-2"}`}>
                  <IconNotifications />
                </Button>
              </DialogTrigger>
              <DialogContent className="h-max">
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <UserItem />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navigation;
