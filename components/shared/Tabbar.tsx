"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const tabLinks = [
  { name: "Sports", path: "/", icon: "/images/sports.svg" },
  { name: "Shop", path: "/shop", icon: "/images/shop.svg" },
  { name: "Account", path: "/account", icon: "/images/user.svg" },
  { name: "Account", path: "/account", icon: "/images/user.svg" },
  { name: "Help", path: "/", icon: "/images/help.svg" },
];

const Tabbar = () => {
  const pathname = usePathname();
  return (
    <div
      className={`
    w-full  px-2  relative  rounded-2xl flex items-center justify-between
     
  `}
    >
      <Image
        src="/images/tab-bg.svg"
        alt="Logo"
        width={30}
        height={30}
        className=" absolute dark:hidden  bottom-0 -z-10 w-full left-0 "
      />
      <Image
        src="/images/tab-bg-dark.svg"
        alt="Logo"
        width={30}
        height={30}
        className=" absolute hidden dark:block  bottom-0 -z-10 w-full left-0 "
      />
      {tabLinks.map((link, index) => {
        if (index === 2) {
          return (
            <Link
              key={index}
              href={link.path}
              className="flex flex-col   flex-1 items-center"
            >
              <div className=" -mt-6 ">
                <Image
                  src={"/images/rocket.svg"}
                  alt="Logo"
                  height={40}
                  width={40}
                  className={` dark:invert mb-2`}
                />
                {/* <Image
                  src={"/images/rocket-dark.svg"}
                  alt="Logo"
                  height={60}
                  width={60}
                  className={`dark:block hidden mb-1.5`}
                /> */}
              </div>

              <p className="font-normal text-sm pt-0.5  ">Play</p>
              <Image
                src="/images/active.svg"
                alt="Active indicator"
                width={50}
                height={30}
                className={`mx-auto  ${pathname === "/" ? "" : "opacity-0"}`}
              />
            </Link>
          );
        }
        return (
          <Link
            key={index}
            href={link.path}
            className="flex flex-col flex-1 items-center"
          >
            <Image
              src={link.icon}
              alt="Logo"
              width={index === 1 ? 20 : 28} // Larger width for index 1
              height={30}
              className={`mx-auto dark:invert ${
                index === 1 ? "w-[19px] mb-2" : "w-[23px] mb-1.5 "
              }`}
            />
            <p className="font-normal text-sm">{link.name}</p>
            <Image
              src="/images/active.svg"
              alt="Active indicator"
              width={50}
              height={30}
              className={`mx-auto -mt-0.5 ${
                pathname === link.path ? "" : "opacity-0"
              }`}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Tabbar;
