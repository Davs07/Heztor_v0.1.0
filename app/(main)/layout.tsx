"use client";

import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import Navigation from "./_components/SupBar";
import NavB from "./_components/NavBar";
import { Button } from "@/components/ui/button";
import { SearchCommand } from "@/components/search-command";

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
    <div className="h-screen relative flex flex-row bg-main-superlight dark:bg-main-hiperdark ">
      <NavB />
      <div className="w-full h-full flex flex-col">
        <Navigation />
        <main className="flex-1 h-[calc(100%-56px)] overflow-y-auto">
          <SearchCommand  />
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
