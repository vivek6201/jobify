import React from "react";
import Sidebar from "@repo/ui/common/Sidebar";
import DashboardNavbar from "@repo/ui/common/DashboardNavbar";
import {
  Briefcase,
  CircleGauge,
  LayoutGrid,
  MessageCircle,
} from "lucide-react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const items = [
    {
      link: "/dashboard",
      itemName: "Dashboard",
      logo: <CircleGauge />,
    },
    {
      link: "/dashboard/post",
      itemName: "Post a Job",
      logo: <Briefcase />,
    },
    {
      link: "/dashboard/responses",
      itemName: "Responses",
      logo: <MessageCircle />,
    },
  ];

  return (
    <div className="grid grid-rows-[70px_1fr]">
      <DashboardNavbar />
      <Sidebar items={items}>{children}</Sidebar>
    </div>
  );
};

export default DashboardLayout;
