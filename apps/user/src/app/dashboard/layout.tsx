import React from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import DashboardNavbar from "../../components/dashboard/DashboardNavbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-rows-[70px_1fr]">
      <DashboardNavbar />
      <Sidebar>{children}</Sidebar>
    </div>
  );
};

export default DashboardLayout;
