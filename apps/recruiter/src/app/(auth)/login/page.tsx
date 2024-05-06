import React from "react";
import Login from "../../../components/auth/login";
import Image from "next/image";

export default function page() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-[70%_1fr] w-full h-[calc(100vh-70px)]">
      <div className="hidden xl:flex">
        <Image
          src={"/nature.jpg"}
          width={1000}
          height={1000}
          alt="loginImg"
          className="w-full object-cover"
        />
      </div>
      <div className="grid place-items-center w-10/12 mx-auto">
        <Login />
      </div>
    </div>
  );
}
