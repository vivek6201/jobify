import Link from "next/link";
import React from "react";
import ModeToggle from "@repo/ui/common/theme-toggler";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui/ui/dropdown-menu";

const DashboardNavbar = () => {
  return (
    <div className="h-full border-b">
      <div className="px-10 md:px-16 flex items-center justify-between h-full">
        <Link
          href={"/dashboard"}
          className="text-blue-500 font-bold tracking-wide text-2xl"
        >
          Jobify
        </Link>
        <div className="flex gap-4 items-center">
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-md border px-5 py-1">
              Open
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
