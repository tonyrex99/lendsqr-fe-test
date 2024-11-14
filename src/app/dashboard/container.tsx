"use client";
import { useState } from "react";
import TopNav from "@/components/dashboard/TopNav";
import SideBar from "@/components/dashboard/SideBar";
import "@/styles/dashboard.scss";

const DashboardContainter = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="dashboard-layout">
      <TopNav setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <div className="dashboard-container">
        <SideBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />

        <div className="dashboard">
          <div className="dashboard-main">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContainter;
