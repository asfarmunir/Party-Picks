"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { IoIosSettings } from "react-icons/io";
import { GiCheckMark } from "react-icons/gi";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LoaderCircle } from "lucide-react";
import toast from "react-hot-toast";
import { IoChevronDownCircle, IoLogOut } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiMenu } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa6";

const Sidebar = () => {
  const pathname = usePathname();
  const closeRef = React.useRef(null);
  const { theme, setTheme } = useTheme();

  const navlinks = [
    {
      title: "Sports",
      link: "/",
      icon: "/images/sports.svg",
    },
    {
      title: "Play",
      link: "/play",
      icon: "/images/play.svg",
    },
    {
      title: "Shop",
      link: "/shop",
      icon: "/images/shop.svg",
    },
  ];

  return (
    <>
      <nav
        className={`relative bg-white dark:bg-[#0B0C1E] w-full  transition-all duration-300 
 
          hidden md:flex items-center justify-between  gap-7 2xl:gap-10 p-3 md:p-4 2xl:p-6`}
      >
        <div className="flex items-center  gap-12">
          <Link href={"/"}>
            <div className="relative w-[120px] ">
              {/* Light mode image */}
              <Image
                src="/images/logo-dark.svg"
                alt="logo"
                width={120}
                height={120}
                className="block dark:hidden "
                priority
              />
              {/* Dark mode image */}
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={120}
                height={120}
                className="hidden dark:block "
                priority
              />
            </div>
          </Link>

          <div className="hidden md:flex  gap-1.5">
            {navlinks.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className={`inline-flex  capitalize text-primary  
                  text-sm 2xl:text-base   
                ${
                  pathname === link.link
                    ? "  bg-card px-5 py-2 2xl:px-12  2xl:py-3  rounded-3xl"
                    : "font-normal hover:bg-slate-50 dark:hover:bg-slate-900  px-6 py-2   2xl:py-3  rounded-3xl"
                }
                items-center gap-3 `}
              >
                <div className="relative w-[20px] h-[20px]">
                  <Image
                    src={link.icon}
                    alt={link.title}
                    width={16}
                    height={16}
                    className="block dark:hidden w-full h-full"
                  />
                  <Image
                    src={link.icon.replace(".svg", "-dark.svg")}
                    alt={link.title}
                    width={16}
                    height={16}
                    className="hidden dark:block w-full h-full"
                  />
                </div>
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3 2xl:gap-4">
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className=" data-[state=open]:border-2 bg-[#FFFFFF1A]  data-[state=open]:shadow  data-[state=open]:border-vintage-50/50   bg-[#272837]  font-semibold   justify-center text-nowrap w-full md:w-fit  text-xs md:text-sm px-1.5 md:px-1.5 py-1.5 2xl:py-1.5  rounded-full inline-flex items-center gap-2">
                <Image
                  src={"/vintage/images/avatar.svg"}
                  alt="User Avatar"
                  width={35}
                  height={35}
                  className="rounded-full hover:cursor-pointer"
                />
                <span className="  text-white capitalize flex gap-2 items-center text-xs 2xl:text-sm  px-1 py-2">
                  hehe
                  <IoChevronDownCircle className="w-5 text-white h-5" />
                </span>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className=" bg-white w-48 p-2 2xl:p-3 rounded-xl flex flex-col gap-1">
              <Link
                href={"/user/profile"}
                className="text-left text-sm inline-flex p-2 rounded-lg border-b border-slate-200 transition-all hover:bg-slate-100 items-center  gap-2 text-vintage-50 font-bold"
              >
                <FaUser className="" />
                User Profile
              </Link>
              <button className="text-left text-sm inline-flex p-2 rounded-lg  border-slate-200 transition-all hover:bg-slate-100 items-center  gap-2 text-vintage-50 font-bold">
                <IoLogOut className="text-lg" />
                Log Out
              </button>
            </DropdownMenuContent>
          </DropdownMenu> */}
          <Link
            href={"/my-challenges"}
            className="gradient-bg px-4 font-semibold border-b-4 border-orange-200 text-sm rounded-full py-3 "
          >
            My Challenges
          </Link>
          <Link href={"/my-account"} className="bg-card p-0.5 rounded-full">
            <Image
              src={"/images/user.svg"}
              alt="Settings"
              width={20}
              className=" min-w-[40px] dark:invert p-2"
              height={20}
              priority
            />
          </Link>
          <Link href={"/settings"} className="bg-card p-0.5 rounded-full">
            <Image
              src={"/images/help.svg"}
              alt="Settings"
              width={20}
              className=" min-w-[40px] dark:invert p-2"
              height={20}
              priority
            />
          </Link>
          <Link href={"/settings"} className="bg-card p-0.5 rounded-full">
            <Image
              src={"/images/setting.svg"}
              alt="Settings"
              width={20}
              className=" min-w-[40px] dark:invert p-2"
              height={20}
              priority
            />
          </Link>
        </div>
        <Sheet>
          <SheetTrigger className=" block  lg:hidden">
            <HiMenu className=" text-white text-3xl" />
          </SheetTrigger>
          <SheetContent className=" bg-vintage-50/90 text-white py-7 px-4 border-none">
            <SheetClose ref={closeRef} />
            <SheetHeader>
              <div className=" relative h-full min-h-screen flex flex-col items-start gap-7">
                <div className="flex  w-full gap-3 mt-4">
                  <Image
                    src="/vintage/images/logo.svg"
                    alt="logo"
                    width={200}
                    height={200}
                    className=" w-[60px] 2xl:w-[70px] "
                  />
                  <div className="flex items-start flex-col w-full">
                    <button className=" data-[state=open]:border-2    data-[state=open]:shadow  data-[state=open]:border-vintage-50/50     font-semibold   justify-start text-nowrap w-full md:w-fit  text-xs md:text-sm px-1.5 md:px-1.5 py-1.5 2xl:py-1.5  rounded-full inline-flex items-center gap-2">
                      <Image
                        src={"/vintage/images/avatar.svg"}
                        alt="User Avatar"
                        width={35}
                        height={35}
                        className="rounded-full hover:cursor-pointer"
                      />
                      <span className="  text-white capitalize flex gap-2 items-center text-xs 2xl:text-sm  px-1 py-2">
                        hehe
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col w-full md:w-fit  gap-3.5">
                  {/* {navlinks.map((link, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        // @ts-ignore
                        closeRef.current.click();
                        router.push(link.link);
                      }}
                      className={`  text-start  capitalize w-full md:w-fit  
                  text-base   
                ${
                  pathname === link.link
                    ? "text-white  bg-[#FFFFFF33] font-semibold px-5 py-2 2xl:px-6  2xl:py-2  rounded-md md:rounded-3xl"
                    : "text-[#FFFFFFCC] font-normal hover:bg-white/10 px-3 py-1 2xl:px-4  2xl:py-2  rounded-md md:rounded-3xl"
                }
                items-center gap-2 `}
                    >
                      {link.title}
                    </button>
                  ))} */}
                </div>
                <div className="absolute bottom-24 gap-4  w-full   flex-col flex">
                  <Link
                    href={"/settings"}
                    className={`inline-flex  font-bold uppercase text-sm  2xl:text-lg 
                 ${
                   pathname === "/settings"
                     ? "text-white  bg-[#FFFFFF33] font-semibold px-5 py-2 2xl:px-6  2xl:py-2  rounded-md md:rounded-3xl"
                     : "text-[#FFFFFFCC] font-normal hover:bg-white/10 px-3 py-1 2xl:px-4  2xl:py-2  rounded-md md:rounded-3xl"
                 }
                items-center gap-2 `}
                  >
                    <Image
                      src={
                        pathname === "/settings"
                          ? "/icons/setting.svg"
                          : "/icons/setting.svg"
                      }
                      alt="Help"
                      width={16}
                      className="2xl:w-[20px]"
                      height={16}
                      priority
                    />
                    <p>SETTINGS</p>
                  </Link>
                  <Link
                    href={"/user/profile"}
                    className={`inline-flex  font-bold uppercase text-sm  2xl:text-lg 
                  ${
                    pathname === "/user/profile"
                      ? "text-white  bg-[#FFFFFF33] font-semibold px-5 py-2 2xl:px-6  2xl:py-2  rounded-md md:rounded-3xl"
                      : "text-[#FFFFFFCC] font-normal hover:bg-white/10 px-3 py-1 2xl:px-4  2xl:py-2  rounded-md md:rounded-3xl"
                  }
                items-center gap-2 `}
                  >
                    <Image
                      src={
                        pathname === "/user/profile"
                          ? "/icons/profile.svg"
                          : "/icons/profile.svg"
                      }
                      alt="Help"
                      width={16}
                      className="2xl:w-[20px]"
                      height={16}
                      priority
                    />
                    <p>PROFILE</p>
                  </Link>
                  {/* <Link
                    href={"/help"}
                    className={`inline-flex  font-bold uppercase text-sm  2xl:text-lg 
                ${
                  pathname === "/help"
                    ? "text-white inner-left-shadow p-3 2xl:p-4 bg-[#181926] rounded-2xl"
                    : "text-[#848BAC] p-3 2xl:p-4  rounded-lg hover:bg-[#27283197]"
                }
                items-center gap-2 `}
                  >
                    <Image
                      src={
                        pathname === "/help"
                          ? "/icons/help.png"
                          : "/icons/help.svg"
                      }
                      alt="Help"
                      width={16}
                      className="2xl:w-[20px]"
                      height={16}
                      priority
                    />
                    <p>HELP</p>
                  </Link> */}
                </div>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
};

export default Sidebar;
