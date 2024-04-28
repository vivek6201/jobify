import SidebarItem from "@repo/ui/common/SidebarItem";
import React from "react";
import {
  Briefcase,
  CircleGauge,
  LayoutGrid,
  MessageCircle,
} from "lucide-react";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const items = [
    {
      link: "/dashboard",
      itemName: "Dashboard",
      logo: <CircleGauge />,
    },
    {
      link: "/dashboard/fulltime-jobs",
      itemName: "Fulltime Jobs",
      logo: <Briefcase />,
    },
    {
      link: "/dashboard/internships",
      itemName: "Internships",
      logo: <Briefcase />,
    },
    {
      link: "/dashboard/applied",
      itemName: "Applied",
      logo: <LayoutGrid />,
    },
    {
      link: "/dashboard/messages",
      itemName: "Messages",
      logo: <MessageCircle />,
    },
  ];

  return (
    <div className="grid grid-cols-[15%_1fr] h-[calc(100vh-70px)]">
      <div className="flex flex-col gap-y-2 px-8 lg:px-10 py-5 border-r">
        {items.map((item) => (
          <SidebarItem {...item} />
        ))}
      </div>
      <div className="p-5 overflow-y-auto">{children}</div>
    </div>
  );
};

export default Sidebar;
