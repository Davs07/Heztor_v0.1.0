"use client";

import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Spinner } from "@/components/spinner";

import Link from "next/link";

import { useScrollTop } from "@/hooks/use-scroll-top";
import IconChangeLanguage from "@/public/icons/IconChangeLanguage";
import Logo from "./logo";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/micro/mode-toggle";

const menuNavbar = [
  {
    name: "Funcionalidades",
    href: "#",
  },
  {
    name: "Soluciones",
    href: "#",
  },
  {
    name: "Recursos",
    href: "#",
  },
];

export const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-main-superlight dark:bg-main-hiperdark fixed top-0 flex flex-row items-center justify-center w-full py-6 lg:px-[15vw] px-3",
        scrolled && "border-b shadow-sm"
      )}>
      <Logo />

      <div className=" flex-grow flex justify-end pr-3 gap-3 ">
        {menuNavbar.map((item) => (
          <Button key={item.name} variant={"ghost"}>
            {item.name}
          </Button>
        ))}
      </div>
      {/*Secciones del Navbar:  Funcionalidades, Soluciones, Recursos */}
      <div className=" md:justify-end flex justify-between items-center gap-x-3">
        <div className="h-6 w-px bg-main-extradark/40"></div>

        <Button
          variant={"ghost"}
          className="text-main-extradark dark:text-main-superlight">
          <IconChangeLanguage />
        </Button>
        <ModeToggle />
        <div className="h-6 w-px bg-main-extradark/40"></div>
        {isLoading && <Spinner />}

        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant={"ghost"}>Inicia Sesión</Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button variant={"blue"}>Comenzar</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && (
          <>
            <Button variant={"blue"}>
              <Link href={"/dashboard"}>Abrir Heztor</Link>
            </Button>

            <UserButton afterSignOutUrl="/" />
          </>
        )}
      </div>
    </div>
  );
};
