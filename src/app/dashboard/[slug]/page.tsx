import "@/styles/dashboard.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lendsqr Admin Console: Login",
  description:
    "Sign up or log in to manage your loan and lending APIs with Lendsqr Admin Console",
  openGraph: {
    title: "Lendsqr Admin Console: Login",
    description:
      "Sign up or log in to manage your loan and lending APIs with Lendsqr Admin Console",
    images: [
      {
        url: "/images/lendsqr-logo.png",
        alt: "Lendsqr Logo",
      },
    ],
  },
};
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
