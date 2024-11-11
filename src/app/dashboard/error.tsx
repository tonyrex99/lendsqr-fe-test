"use client";
import { useState } from "react";
import TopNav from "@/components/dashboard/TopNav";
import SideBar from "@/components/dashboard/SideBar";
import "@/styles/dashboard.scss";

const NotFound = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="dashboard-layout">
      <TopNav setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <div className="dashboard-container">
        <SideBar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />

        <div className="dashboard">
          <div className="dashboard-main">
            <div className="error-page">
              <h1>404 - OOPS Page Not Found</h1>
              <p>Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
