"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const SidebarItem = ({
  itemName,
  logo,
  link,
}: {
  itemName: string;
  link: string;
  logo: JSX.Element;
}) => {
  const pathName = usePathname();
  const isSelected = pathName === link;

  return (
    <Link
      href={link}
      className={`flex gap-2 px-3 py-2 rounded-md dark:hover:bg-blue-900 dark:hover:text-white hover:bg-blue-200 hover:text-gray-600 ${isSelected && "text-blue-500 dark:text-blue-400 font-bold"} transition-all duration-200`}
    >
      {logo}
      {itemName}
    </Link>
  );
};

export default SidebarItem;
