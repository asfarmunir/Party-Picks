"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Settings from "./Settings";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import PasswordUpate from "./PasswordUpdate";
import Billing from "./billing";
import TwoFactorAuth from "./TwoFA";
const menuItems = [
  {
    name: "How to play",
    img: "/images/howtoplay.svg",
  },
  {
    name: "Refer & Earn",
    img: "/images/refer.svg",
  },
  {
    name: "Request Withdrawal",
    img: "/images/withdrawl.svg",
  },
  {
    name: "Verify My ID",
    img: "/images/verify.svg",
  },
  {
    name: "Policies, Rules and Agreements",
    img: "/images/policies.svg",
  },
];
const settings = [
  {
    name: "Personal Info",
    img: "/images/personal.svg",
  },
  {
    name: "Password",
    img: "/images/password.svg",
  },
  {
    name: "Billing",
    img: "/images/billing.svg",
  },
  {
    name: "2-Factor Authentication",
    img: "/images/2fa.svg",
  },
  {
    name: "FAQ",
    img: "/images/faq.svg",
  },
];
export default function MobileSettingsDrawer(
  {
    link,
    index,
  }: { link: { name: string; path: string; icon: string }; index: number } = {
    link: { name: "", path: "", icon: "" },
    index: 0,
  },
  pathname: string = "/"
) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("");

  return (
    <Drawer onOpenChange={(open) => !open && router.push("/")}>
      <DrawerTrigger asChild>
        <button key={index} className="flex  flex-col flex-1 items-center">
          <Image
            src={link.icon}
            alt="Logo"
            width={28} // Larger width for index 1
            height={30}
            priority
            className={`mx-auto dark:invert ${
              false ? "w-[19px] mb-2" : "w-[23px] mb-1.5 "
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
        </button>
      </DrawerTrigger>

      <DrawerContent className="  max-h-[85vh] rounded-t-2xl">
        <DrawerHeader className="text-left">
          <div className="flex items-center gap-2">
            {activeTab !== "" && (
              <button
                onClick={() => {
                  if (activeTab === "Settings") {
                    setActiveTab("");
                  } else {
                    setActiveTab("Settings");
                  }
                }}
              >
                <Image
                  src="/images/back.svg"
                  alt="Back"
                  width={30}
                  height={30}
                  className="dark:invert mb-1.5"
                  onClick={() => setActiveTab("")}
                />
              </button>
            )}
            <DrawerTitle className="text-2xl font-bold">
              {activeTab === "" ? "Profile Menu" : activeTab}
            </DrawerTitle>
          </div>
          <DrawerClose className="absolute right-4 top-4">
            <IoClose className="text-lg" />
          </DrawerClose>
        </DrawerHeader>
        <div className="flex-1 overflow-y-auto px-4 pb-4 no-scrollbar">
          {activeTab === "" && (
            <div className="overflow-y-auto px-4 pb-6">
              <ul className="space-y-2 pr-0 md:pr-6 pb-4 md:pb-0">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <button
                      className={`w-full text-left text-primary px-4 py-3 flex border items-center border-[#1212121A] dark:border-slate-700 justify-between rounded-full transition-colors ${
                        activeTab === item.name
                          ? "font-medium bg-card"
                          : "hover:bg-gray-100 dark:hover:bg-slate-800"
                      }`}
                      // onClick={() => setActiveTab(item.name)}
                    >
                      <span className="inline-flex items-center gap-2">
                        <Image
                          src={item.img}
                          alt={item.name}
                          width={24}
                          height={24}
                          className="w-7 2xl:w-9 h-7 2xl:h-9"
                        />
                        {item.name}
                      </span>
                      <Image
                        src={"/images/back.svg"}
                        alt={item.name}
                        width={30}
                        height={30}
                        className="ml-2 rotate-180 dark:invert"
                      />
                    </button>
                  </li>
                ))}
              </ul>{" "}
              <ul className="space-y-2 border-t pt-4 pr-0 md:pr-6 pb-4 md:pb-0">
                <li>
                  <button
                    onClick={() => setActiveTab("Settings")}
                    className={`w-full text-left text-primary px-4 py-3 flex border items-center border-[#1212121A] dark:border-slate-700 justify-between rounded-full transition-colors 
                      font-medium bg-card`}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Image
                        src="/images/settingMobile.svg"
                        alt={"Settings"}
                        width={24}
                        height={24}
                        className="w-7 2xl:w-9 h-7 2xl:h-9"
                      />
                      Settings
                    </span>
                    <Image
                      src={"/images/back.svg"}
                      alt={"Settings"}
                      width={30}
                      height={30}
                      className="ml-2 rotate-180 dark:invert"
                    />
                  </button>
                </li>
                <li>
                  <button
                    className={`w-full text-left text-primary px-4 py-3 flex border items-center border-[#1212121A] dark:border-slate-700 justify-between rounded-full transition-colors 
                      font-medium bg-card`}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Image
                        src="/images/logout.svg"
                        alt={"Settings"}
                        width={24}
                        height={24}
                        className="w-7 2xl:w-9 h-7 2xl:h-9"
                      />
                      Logout
                    </span>
                    <Image
                      src={"/images/back.svg"}
                      alt={"Settings"}
                      width={30}
                      height={30}
                      className="ml-2 rotate-180 dark:invert"
                    />
                  </button>
                </li>
              </ul>
            </div>
          )}

          {activeTab === "Settings" && (
            <div className="overflow-y-auto px-4 pb-6">
              <ul className="space-y-2 pr-0 md:pr-6 pb-4 md:pb-0">
                {settings.map((item, index) => (
                  <li key={index}>
                    <button
                      className={`w-full text-left text-primary px-4 py-3 flex border items-center border-[#1212121A] dark:border-slate-700 justify-between rounded-full transition-colors ${
                        activeTab === item.name
                          ? "font-medium bg-card"
                          : "hover:bg-gray-100 dark:hover:bg-slate-800"
                      }`}
                      onClick={() => setActiveTab(item.name)}
                    >
                      <span className="inline-flex items-center gap-2">
                        <Image
                          src={item.img}
                          alt={item.name}
                          width={24}
                          height={24}
                          className="w-7 2xl:w-9 h-7 2xl:h-9"
                        />
                        {item.name}
                      </span>
                      <Image
                        src={"/images/back.svg"}
                        alt={item.name}
                        width={30}
                        height={30}
                        className="ml-2 rotate-180 dark:invert"
                      />
                    </button>
                  </li>
                ))}
              </ul>{" "}
            </div>
          )}
          {activeTab === "Personal Info" && <PersonalInfo />}
          {activeTab === "Password" && <PasswordUpate />}
          {activeTab === "Billing" && <Billing />}
          {activeTab === "2-Factor Authentication" && <TwoFactorAuth />}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
