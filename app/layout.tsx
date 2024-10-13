import "./globals.css";
import localFont from "next/font/local";
import { Metadata } from "next";

import { Analytics } from "@vercel/analytics/react";

const DINSchrift = localFont({ src: "./fonts/DINSchrift.otf" });
export const metadata: Metadata = {
  title: "Countdown Timer",
  description: "A countdown timer inspired by the movie app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${DINSchrift.className} `}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
