import "./styles/globals.css";
import { Inter } from "next/font/google";
import Header from "./components/header";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Michael Birsak",
  description: "Software Engineer & Leader",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="header-bg h-[26rem] sm:h-[20rem]"></div>
        <div className="relative">
          <div className="p-8 min-h-screen max-w-screen-xl sm:p-24">
            <Header />
            {children}
            <Analytics />
          </div>
        </div>
      </body>
    </html>
  );
}
