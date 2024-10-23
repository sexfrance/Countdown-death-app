// Template

import React, { ReactNode } from "react";

export const metadata = {
  title: "My Next.js App",
  description: "This is a sample application",
};

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 My Next.js App. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
