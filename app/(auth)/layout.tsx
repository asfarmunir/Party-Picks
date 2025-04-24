import { ThemeToggle } from "@/components/shared/ToggleTheme";
import Image from "next/image";
import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className=" absolute flex items-center  justify-between w-full p-4">
        <Image src="/images/logo.svg" alt="hero" width={100} height={100} />
        <ThemeToggle />
      </div>
      {children}
    </div>
  );
};

export default Layout;
