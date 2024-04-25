"use client";

import { Spinner } from "@/components/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import Navigation from "./_components/Navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
    <div className="h-full flex flex-col bg-main-superlight dark:bg-main-hiperdark ">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">{children}</main>
    </div>
  );
};

export default MainLayout;
