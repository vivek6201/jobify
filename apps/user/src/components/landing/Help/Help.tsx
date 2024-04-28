import React from "react";
import HelpCard from "./HelpCard";
import { Button } from "@repo/ui/ui/button";

const Help = () => {
  const helpArray = [
    {
      imageSrc: "/upskilled.svg",
      helpType: "Get Upskilled",
      description:
        "The #1 way college students & early graduates get Internships, Jobs",
    },
    {
      imageSrc: "/profile.svg",
      helpType: "Create Profile",
      description:
        "Create your profile with easy-to fill form and get recommended with relevant internships/ jobs.",
    },
    {
      imageSrc: "/time.jpg",
      helpType: "Hassle Free",
      description:
        "An effortless way to get internships/ jobs through a quick and easy application process.",
    },
    {
      imageSrc: "/money.svg",
      helpType: "Earn Money",
      description:
        "You can earn ~ ₹90000 annually through our platform while working as an intern.",
    },
  ];

  return (
    <div className="container py-10 flex flex-col min-h-[700px] items-center justify-between">
      <p className="text-4xl text-center font-medium">How Jobify helps you</p>
      <div className="py-5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        {helpArray.map((item, index) => (
          <HelpCard {...item} key={index} />
        ))}
      </div>
      <Button className="bg-blue-500 hover:bg-blue-700 ">Get Started</Button>
    </div>
  );
};

export default Help;
