import SidebarItem from "@repo/ui/common/SidebarItem";
import React from "react";

const Sidebar = ({
  children,
  items,
}: {
  children: React.ReactNode;
  items: {
    link: string;
    itemName: string;
    logo: JSX.Element;
  }[];
}) => {
  return (
    <div className="grid grid-cols-[15%_1fr] h-[calc(100vh-70px)]">
      <div className="flex flex-col gap-y-2 px-8 lg:px-10 py-5 border-r">
        {items.map((item,index) => (
          <SidebarItem {...item} key={index}/>
        ))}
      </div>
      <div className="p-5 overflow-y-auto">{children}</div>
    </div>
  );
};

export default Sidebar;
