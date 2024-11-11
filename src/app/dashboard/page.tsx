"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "@/styles/dashboard.scss";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to `/users` of the current route after component mounts
    router.replace("/dashboard/users"); // Change `/dashboard` to match the current base route dynamically if needed
  }, [router]);

  return (
    <div className="dashboard">
      <div className="dashboard-main">
        <div className="error-page">
          <h1>Redirecting...</h1>
          <p>You will be redirected shortly.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
