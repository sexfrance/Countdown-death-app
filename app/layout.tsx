import "./globals.css";
import localFont from "next/font/local";
import { Metadata } from "next";

import { Analytics } from "@vercel/analytics/react";

// Import your local font
const DINSchrift = localFont({ src: "./fonts/DINSchrift.otf" });

// Metadata for the page
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
      <body className={`${DINSchrift.className} min-h-screen flex flex-col`}>
        <div className="flex-grow">{children}</div>

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
