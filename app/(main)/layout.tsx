"use client";

import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import Navigation from "./_components/Navigation";
import NavB from "./_components/NavB";
import { Button } from "@/components/ui/button";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, isAuthenticated } = useConvexAuth();

  if (isLoading) {
    return;
    <div className="flex justify-center items-center h-full">
      <Spinner />;
    </div>;
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="h-screen flex flex-row bg-main-superlight dark:bg-main-hiperdark ">
      <NavB />
      <div className="w-full h-full flex-col">
        <Navigation />
        <main className="flex-1 h-[calc(100%-56px)] overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
