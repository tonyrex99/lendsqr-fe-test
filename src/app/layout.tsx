import type { Metadata } from "next";
import "@/styles/global.scss";

export const metadata: Metadata = {
  title:
    "Loan Management Software for the Smartest Lenders, Banks, and Fintechs",
  description:
    "Start and scale your loan business with Lendsqr loan management system. Get the best features to position you as a market leader and make your customers happy!",
  openGraph: {
    title: "Loan Management Software | Lending Software | Lendsqr",
    description:
      "Start and scale your loan business with Lendsqr loan management system. Get the best features to position you as a market leader and make your customers happy!",

    images: [
      {
        url: "/images/lendsqr-logo.png",
        alt: "Lendsqr Logo",
      },
    ],
  },
};
/**
const AvenirBold = localFont({
  src: "./fonts/AvenirNextLTPro-Bold.otf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const AvenirIt = localFont({
  src: "./fonts/AvenirNextLTPro-It.otf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const AvenirRegular = localFont({
  src: "./fonts/AvenirNextLTPro-Regular.otf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
