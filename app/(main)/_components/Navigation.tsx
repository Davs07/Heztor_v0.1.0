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
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import IconSearch from "../Icons/NavigationOptions/IconSearch.jsx";
import { Button } from "@/components/ui/button";
import UserItem from "./UserItem";

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
          "group/navigation relative  w-screen bg-white dark:bg-main-superdark border-b border-slate-200 dark:border-slate-50  overflow-hidden  flex h-12 flex-row z-[9999999] px-[8vw]  ",
          isMobile && "hidden "
        )}>
        <div
          className={cn(
            "w-full h-full flex justify-between items-center",
            isMobile && "flex-col-reverse justify-center items-center "
          )}>
          <ul
            className={cn(
              "flex flex-row justify-center items-center gap-4 text-slate-700 dark:text-white",
              isMobile && "  flex-col"
            )}>
            {navigationSec.map((Menu, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`group hover:bg-[#E6ECFF] rounded-xl ${
                  pathname === Menu.src
                    ? "  text-white hover:text-white bg-main-2 hover:bg-main-2 "
                    : ""
                }   text-sm `}>
                <Link
                  href={Menu.src}
                  passHref={true}
                  className={`flex justify-center items-center `}>
                  <span className={`text-lg  `}>{Menu.icon}</span>
                  <span className={cn("px-2 py-1", isMin && "hidden")}>
                    {Menu.title}
                  </span>
                </Link>
              </Button>
            ))}
          </ul>

          <ul
            className={cn(
              "flex items-center justify-center gap-2 text-slate-700 dark:text-white ",
              isMobile && "flex-wrap-reverse bg-main-superlight pb-4"
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
                  "border-2 border-transparent bg-[#E6ECFF] pl-7 w-60 h-8  outline-none overflow-hidden  rounded-xl transition-all duration-500 ease-in-out hover:border-main-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 ",
                  isM && "w-4"
                )}
              />
            </label>
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

            {/* Help Options*/}
            <Dialog>
              <DialogTrigger>
                <Button
                  variant="ghost"
                  size="icon"
                  className=" rounded-xl hover:bg-[#E6ECFF]">
                  <IconHelp />
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

            {/* Daily Quote */}
            <Dialog>
              <DialogTrigger>
                <Button
                  variant="ghost"
                  size="icon"
                  className=" rounded-xl hover:bg-[#E6ECFF]">
                  <IconQuote />
                </Button>
              </DialogTrigger>
              <DialogContent className="h-max">
                <DialogHeader>
                  <DialogTitle>Cita Diaria</DialogTitle>
                  <DialogDescription className="text-slate-700 text-xl">
                    La única forma de hacer un gran trabajo es amar lo que
                    haces.
                  </DialogDescription>
                  <DialogDescription className="text-slate-700 text-base text-right">
                    -Steve Jobs
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
