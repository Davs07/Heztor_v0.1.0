"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

import { useConvexAuth } from "convex/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { SignOutButton, useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

function UserItem() {
  const { user } = useUser();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center text-sm py-3 w-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://lh3.googleusercontent.com/a/ACg8ocJQLcvb4-kE5M9U5eD5vafN0cl7H57WbGyohpYD8DeMsfEVXMHk=s288-c-no" />
            </Avatar>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-80"
          align="end"
          alignOffset={-100}
          forceMount>
          <div className="flex flex-col h-full ">
            <p className="text-xs font-medium leading-none text-muted-foreground">
              {user?.emailAddresses[0].emailAddress}
            </p>
            <div className="flex w-full items-center gap-x-2">
              <div className="rounded-md bg-secondary p-1">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://lh3.googleusercontent.com/a/ACg8ocJQLcvb4-kE5M9U5eD5vafN0cl7H57WbGyohpYD8DeMsfEVXMHk=s288-c-no" />
                </Avatar>
              </div>

              <div className="space-y-1 ">
                <p className="text-sm line-clamp-1">{user?.fullName}&nbsp;</p>
              </div>
            </div>
            <DropdownMenuSeparator />
            <SignOutButton>Cerrar sesión</SignOutButton>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default UserItem;
