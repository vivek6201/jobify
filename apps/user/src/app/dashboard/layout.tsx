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
    <div className="grid grid-rows-[70px_1fr]">
      <DashboardNavbar />
      <Sidebar items={items}>{children}</Sidebar>
    </div>
  );
};

export default DashboardLayout;
