import DashboardContainter from "./container";
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

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <DashboardContainter>{children}</DashboardContainter>;
};

export default DashboardLayout;
