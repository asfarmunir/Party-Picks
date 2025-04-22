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
    <div className="relative  ">
      <Navbar />
      {children}
      <div className=" absolute bottom-3 w-[95%] ml-2.5 ">
        <Tabbar />
      </div>
    </div>
  );
};

export default Layout;
