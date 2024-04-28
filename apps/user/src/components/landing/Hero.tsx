import { Button } from "@repo/ui/ui/button";
import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-[700px] container grid grid-cols-1 gap-2 lg:grid-cols-2 ">
      <div className="flex flex-col gap-y-5 justify-center items-start">
        <p className="text-5xl leading-snug max-w-lg font-medium">
          Get quality{" "}
          <span className="font-extrabold text-blue-600">
            Internships & Jobs
          </span>{" "}
          in 3 steps
        </p>
        <p className="text-sm text-gray-500 max-w-sm">
          The #1 way college students & early graduates get Internships, Jobs
        </p>
        <Button variant="default" className="bg-blue-500 font-semibold text-lg py-5 hover:bg-blue-700">
          Get Started
          <ChevronRight className="ml-2"/>
        </Button>
      </div>
      <div className="flex items-center justify-center h-full w-full">
        <Image src={"/job.jpg"} height={500} width={500} alt="image"/>
      </div>
    </div>
  );
};

export default Hero;
