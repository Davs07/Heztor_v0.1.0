"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import Link from "next/link";
import { Spinner } from "@/components/spinner";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl space-y-4 flex flex-col items-center justify-center">
      {/* <h1 className="text-5xl  sm:text-6xl font-bold text-main-extradark  dark:text-white max-w-[32rem] ">
        Gestiona todo
      </h1> */}
      <p className="text-slate-600  text-xl sm:text-2xl dark:text-gray-200">
        Organiza tu vida de manera eficiente con Heztor, la aplicación todo en
        uno que te brinda el control total de tu día a día.
      </p>
     

      {!isAuthenticated && !isLoading && (
        <Button variant={"blue"} size={"base"} className="text-xl">
          <SignInButton mode="modal">
            <>
              Comenzar
              <ArrowRight className="h-5 w-5 ml-2 text-slate-50 hover:text-white" />
            </>
          </SignInButton>
        </Button>
      )}

      <Button variant={"blue"} size={"base"} className="text-xl" >
        <ChevronDown/>
      </Button>
    </div>
  );
};
