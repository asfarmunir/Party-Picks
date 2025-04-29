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
      <div className=" absolute flex items-center z-50  justify-between w-full p-4">
        <Image
          src="/images/logo.svg"
          alt="hero"
          width={100}
          height={100}
          className="block md:hidden dark:block"
        />
        <Image
          src="/images/logo-dark.svg"
          alt="hero"
          width={100}
          height={100}
          className=" dark:hidden hidden md:block"
        />
        <ThemeToggle />
      </div>
      <div className=" w-full flex items-center">
        <div className="flex-1 h-svh  bg-background overflow-y-auto no-scrollbar ">
          {children}
        </div>
        <div
          className="flex-1 hidden relative md:block  overflow-hidden  h-svh "
          style={{
            backgroundImage: "url('/images/bg.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Image
            src="/images/player1.svg"
            alt="Logo"
            width={220}
            height={200}
            className=" absolute -bottom-16  left-0 
            w-[450px] h-[450px] 2xl:w-[500px] 2xl:h-[500px]"
          />
          <Image
            src="/images/player2.svg"
            alt="Logo"
            width={300}
            height={300}
            className=" absolute -bottom-20 right-0 
            w-[450px] h-[450px] 2xl:w-[550px] 2xl:h-[550px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
