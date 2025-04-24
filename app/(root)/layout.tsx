import { ThemeToggle } from "@/components/shared/ToggleTheme";
import Image from "next/image";
import React from "react";
import Navbar from "@/components/shared/Navbar";
import Tabbar from "@/components/shared/Tabbar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="relative min-h-svh bg-background   ">
      <Navbar />
      <div className="absolute left-4  top-4">
        <ThemeToggle />
      </div>
      {children}
      <div className="   absolute bottom-3.5   md:hidden  w-[95%] ml-2.5 ">
        <Tabbar />
      </div>
    </div>
  );
};

export default Layout;
