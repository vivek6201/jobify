import Link from "next/link";
import React from "react";

const SocialCard = ({
  socialLink,
  icon,
}: {
  socialLink: string;
  icon: JSX.Element;
}) => {
  return (
    <Link href={socialLink} className="rounded-full p-2 bg-gray-800">
      {icon}
    </Link>
  );
};

export default SocialCard;
