import Link from "next/link";
import React from "react";
import SocialCard from "./SocialCard";
import { Facebook, Youtube, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div className="grid grid-cols-3 gap-5 container min-h-[150px]">
      <div className="flex h-full justify-center items-center">
        <p className="text-4xl font-extrabold text-white">Jobify</p>
      </div>
      <div className="flex items-center justify-center flex-col gap-y-2">
        <ul className="flex gap-2 items-center text-white">
          <li>
            <Link href={"/about"} className="hover:underline">About</Link>
          </li> |
          <li>
            <Link href={"/contact"} className="hover:underline">Contact</Link>
          </li> |
          <li>
            <Link href={"/terms"} className="hover:underline">Terms & Conditions</Link>
          </li>|
          <li>
            <Link href={"/policy"} className="hover:underline">Privacy Policy</Link>
          </li>
        </ul>
        <p className="text-xs opacity-75 text-white">
          Copyright 2024 Cuvette - All rights reserved
        </p>
      </div>
      <div className="flex items-center justify-center gap-3">
        <SocialCard
          socialLink="https://instagram.com"
          icon={<Instagram className="text-white" />}
        />
        <SocialCard
          socialLink="https://youtube.com"
          icon={<Youtube className="text-white" />}
        />
        <SocialCard
          socialLink="https://linkedin.com"
          icon={<Linkedin className="text-white" />}
        />
        <SocialCard
          socialLink="https://facebook.com"
          icon={<Facebook className="text-white" />}
        />
      </div>
    </div>
  );
};

export default Footer;
