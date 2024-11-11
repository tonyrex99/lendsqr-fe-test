"use client";
import "@/styles/dashboard.scss";

const NotFound = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-main">
        <div className="error-page">
          <h1>404 - OOPS Page Not Found</h1>
          <p>Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
