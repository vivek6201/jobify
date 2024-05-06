import { Button } from "@repo/ui/ui/button";
import Link from "next/link";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-rows-[70px_1fr] overflow-hidden">
      <div className="flex px-16 justify-between items-center h-full">
        <Link href={"/"} className="text-3xl font-extrabold text-blue-400">
          Jobify
        </Link>
        <Link href={"/signup"}>
          <Button>Signup</Button>
        </Link>
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;