import Image from "next/image";
import React from "react";

interface HelpProps {
  helpType: string;
  description: string;
  imageSrc: string;
}

const HelpCard = ({ helpType, description, imageSrc }: HelpProps) => {
  return (
    <div className="flex flex-col items-center gap-y-5 border border-gray-400 rounded-md p-5">
      <Image src={imageSrc} width={200} height={200} alt="image" />
      <p className="font-bold text-2xl">{helpType}</p>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default HelpCard;
