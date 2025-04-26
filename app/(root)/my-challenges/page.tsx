"use client";

import Image from "next/image";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import { AiOutlineInfoCircle } from "react-icons/ai";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export default function Sports() {
  const [activeTab, setActiveTab] = useState("open");

  return (
    <div className="max-w-6xl bg-card-foreground mt-6 mb-12 rounded-[24px] mx-auto p-4 md:p-6">
      <div className="flex flex-col  gap-6">
        {/* Sidebar Menu */}
        <div className=" flex-shrink-0">
          <div className="flex items-center mb-6 w-full  justify-between ">
            <div className="">
              {activeTab === "details" ? (
                <div className="flex items-center gap-4 ">
                  <button onClick={() => setActiveTab("open")}>
                    <Image
                      src="/images/back.svg" // Replace with your actual icon path
                      alt="PartyBucks"
                      width={25}
                      height={25}
                      className="w-[24px] md:w-[28px] "
                    />
                  </button>
                  <h1 className="text-2xl font-semibold ">Challenge Details</h1>
                </div>
              ) : (
                <h1 className="text-3xl font-anton uppercase ">
                  My Challenges
                </h1>
              )}
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="relative hidden md:flex items-center gap-2 bg-card border border-gray-300 dark:border-slate-700 p-1 rounded-full  ">
                <button
                  className={
                    "text-sm text-primary px-8 py-2 flex  justify-between rounded-full transition-colors " +
                    (activeTab === "open"
                      ? "font-medium bg-card-foreground border items-center border-[#1212121A] dark:border-slate-700"
                      : "hover:bg-gray-100 dark:hover:bg-slate-800")
                  }
                  onClick={() => setActiveTab("open")}
                >
                  Open
                </button>
                <button
                  className={
                    "text-sm text-primary px-8 py-2 flex  justify-between rounded-full transition-colors " +
                    (activeTab === "closed"
                      ? "font-medium bg-card-foreground border items-center border-[#1212121A] dark:border-slate-700"
                      : "hover:bg-gray-100 dark:hover:bg-slate-800")
                  }
                  onClick={() => setActiveTab("closed")}
                >
                  Closed
                </button>
                <button
                  className={
                    "text-sm text-primary px-8 py-2 flex  justify-between rounded-full transition-colors " +
                    (activeTab === "archived"
                      ? "font-medium bg-card-foreground border items-center border-[#1212121A] dark:border-slate-700"
                      : "hover:bg-gray-100 dark:hover:bg-slate-800")
                  }
                  onClick={() => setActiveTab("archived")}
                >
                  Archived
                </button>
              </div>
              <Link
                href={"/leaderboard"}
                className=" bg-[#BA64141A] text-[#BA6414] font-semibold px-4 py-3 rounded-full border text-sm"
              >
                Leaderboard
              </Link>
            </div>
          </div>
          <div className="relative flex md:hidden mb-4 items-center gap-2 bg-card border border-gray-300 dark:border-slate-700 p-1 rounded-full  ">
            <button
              className={
                "text-sm text-primary   py-2 flex flex-1  justify-center rounded-full transition-colors " +
                (activeTab === "open"
                  ? "font-medium bg-card-foreground border items-center border-[#1212121A] dark:border-slate-700"
                  : "hover:bg-gray-100 dark:hover:bg-slate-800")
              }
              onClick={() => setActiveTab("open")}
            >
              Open
            </button>
            <button
              className={
                "text-sm text-primary   py-2 flex flex-1  justify-center rounded-full transition-colors " +
                (activeTab === "closed"
                  ? "font-medium bg-card-foreground border items-center border-[#1212121A] dark:border-slate-700"
                  : "hover:bg-gray-100 dark:hover:bg-slate-800")
              }
              onClick={() => setActiveTab("closed")}
            >
              Closed
            </button>
            <button
              className={
                "text-sm text-primary   py-2 flex flex-1  justify-center rounded-full transition-colors " +
                (activeTab === "archived"
                  ? "font-medium bg-card-foreground border items-center border-[#1212121A] dark:border-slate-700"
                  : "hover:bg-gray-100 dark:hover:bg-slate-800")
              }
              onClick={() => setActiveTab("archived")}
            >
              Archived
            </button>
          </div>
          {activeTab === "open" && (
            <div className=" w-full grid grid-cols-1 gap-4 md:grid-cols-2">
              <div
                className=" border p-3 md:p-4 rounded-[20px]"
                onClick={() => setActiveTab("details")}
              >
                <div className=" w-full p-1 bg-card rounded-[14px]">
                  <div className=" bg-card-foreground p-3 rounded-[14px]">
                    <div className="flex items-center justify-between gap-4">
                      <p>Challenge Name</p>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button>
                              <AiOutlineInfoCircle className=" text-lg" />
                            </button>
                          </TooltipTrigger>

                          <TooltipContent className="">
                            Players must finalize all Picks before the <br />{" "}
                            clock runs out of time.
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="flex items-center py-3 justify-between">
                      <h2 className="text-lg 2xl:text-xl font-semibold">
                        5-Pick Challenge
                      </h2>
                      <div className=" inline-flex items-center gap-2">
                        <Image
                          src="/images/unlock.svg" // Replace with your actual icon path
                          alt="PartyBucks"
                          width={25}
                          height={25}
                          className="w-[20px] md:w-[25px] "
                        />
                        <h2 className="text-sm  2xl:text-base bg-card px-3 py-1 pb-0.5 rounded-full border font-medium">
                          23:22:21
                        </h2>
                      </div>
                    </div>
                    <div className="flex items-center mt-2 justify-between gap-2">
                      <div className=" bg-card p-3 px-4 flex-1 rounded-[14px]">
                        <p className="text-xs 2xl:text-sm mb-1">Buy In </p>
                        <p className="text-sm xl:text-xl font-semibold">
                          10 PartyBucks
                        </p>
                      </div>
                      <div className=" bg-card p-3 px-4 flex-1 rounded-[14px]">
                        <p className="text-xs 2xl:text-sm mb-1">
                          Potential Win
                        </p>
                        <p className="text-sm xl:text-xl font-semibold text-[#2E963C]">
                          100 PartyBucks
                        </p>
                      </div>
                    </div>
                    <p className=" w-full bg-[#0E83A40D] text-[#0E83A4] text-center font-semibold mt-4 rounded-full border border-[#0E83A4] py-3 ">
                      2 Pick Remaining
                    </p>
                  </div>
                  <p className=" w-[95%] mx-auto gradient-bg text-black text-center font-semibold my-3 border-b-4 border-orange-200 rounded-full py-3 ">
                    New Challenge
                  </p>
                </div>
              </div>
              <div
                className=" border p-3 md:p-4 rounded-[20px]"
                onClick={() => setActiveTab("details")}
              >
                <div className=" w-full p-1 bg-card rounded-[14px]">
                  <div className=" bg-card-foreground p-3 rounded-[14px]">
                    <div className="flex items-center justify-between gap-4">
                      <p>Challenge Name</p>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button>
                              <AiOutlineInfoCircle className=" text-lg" />
                            </button>
                          </TooltipTrigger>

                          <TooltipContent className="">
                            Players must finalize all Picks before the <br />{" "}
                            clock runs out of time.
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="flex items-center py-3 justify-between">
                      <h2 className="text-lg 2xl:text-xl font-semibold">
                        5-Pick Challenge
                      </h2>
                      <div className=" inline-flex items-center gap-2">
                        <Image
                          src="/images/locked.svg" // Replace with your actual icon path
                          alt="PartyBucks"
                          width={25}
                          height={25}
                          className="w-[20px] md:w-[25px] "
                        />
                        <h2 className="text-sm  2xl:text-base bg-card px-3 py-1 pb-0.5 rounded-full border font-medium">
                          23:22:21
                        </h2>
                      </div>
                    </div>
                    <div className="flex items-center mt-2 justify-between gap-2">
                      <div className=" bg-card p-3 px-4 flex-1 rounded-[14px]">
                        <p className="text-xs 2xl:text-sm mb-1">Buy In </p>
                        <p className="text-sm xl:text-xl font-semibold">
                          10 PartyBucks
                        </p>
                      </div>
                      <div className=" bg-card p-3 px-4 flex-1 rounded-[14px]">
                        <p className="text-xs 2xl:text-sm mb-1">
                          Potential Win
                        </p>
                        <p className="text-sm xl:text-xl font-semibold text-[#2E963C]">
                          100 PartyBucks
                        </p>
                      </div>
                    </div>
                    <p className=" w-full bg-[#0E83A40D] text-[#0E83A4] text-center font-semibold mt-4 rounded-full border border-[#0E83A4] py-3 ">
                      2 Pick Remaining
                    </p>
                  </div>
                  <p className=" w-[95%] mx-auto gradient-bg text-black text-center font-semibold my-3 border-b-4 border-orange-200 rounded-full py-3 ">
                    New Challenge
                  </p>
                </div>
              </div>
            </div>
          )}
          {activeTab === "archived" && (
            <div className=" w-full bg-card p-1 rounded-[20px]">
              <div className=" w-full bg-card-foreground rounded-[20px] p-2">
                <div className=" w-full flex items-center px-4 justify-between ">
                  <h3 className="2xl:text-lg font-semibold">Archived</h3>
                  <button className="bg-card px-5 py-2 rounded-full text-sm capitalize">
                    filter
                  </button>
                </div>
                <div className=" md:px-4 py-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="bg-card text-[11px] md:text-sm xl:text-base dark:border-card-foreground font-medium rounded-tl-full rounded-bl-full text-center ">
                          Date
                        </TableHead>
                        <TableHead className="bg-card text-[11px] md:text-sm xl:text-base dark:border-card-foreground font-medium text-center">
                          Challenge
                        </TableHead>
                        <TableHead className="bg-card text-[11px] md:text-sm xl:text-base dark:border-card-foreground font-medium text-center">
                          Buy in
                        </TableHead>
                        <TableHead className="bg-card text-[11px] md:text-sm xl:text-base dark:border-card-foreground font-medium text-center">
                          Currency
                        </TableHead>
                        <TableHead className="bg-card text-[11px] md:text-sm xl:text-base dark:border-card-foreground font-medium text-center">
                          Result
                        </TableHead>
                        <TableHead className="bg-card text-[11px] md:text-sm xl:text-base dark:border-card-foreground font-medium text-center rounded-tr-full rounded-br-full">
                          Winnings
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {Array.from({ length: 10 }, (_, index) => (
                        <TableRow key={index}>
                          <TableCell className="bg-card text-[11px] md:text-sm xl:text-base dark:border-card-foreground font-medium rounded-tl-full border-y-4 py-3 border-white rounded-bl-full text-center ">
                            Jul 6,2023
                          </TableCell>
                          <TableCell className="bg-card text-[11px] md:text-sm xl:text-base dark:border-card-foreground font-medium text-center border-y-4 py-3 border-white">
                            10-Pick
                          </TableCell>
                          <TableCell className="bg-card text-[11px] md:text-sm xl:text-base dark:border-card-foreground font-medium text-center border-y-4 py-3 border-white">
                            10.00
                          </TableCell>
                          <TableCell className="bg-card text-[11px] md:text-sm xl:text-base dark:border-card-foreground font-medium text-center border-y-4 py-3 border-white">
                            PC
                          </TableCell>
                          <TableCell className="bg-card text-[11px] md:text-sm xl:text-base dark:border-card-foreground font-medium text-center border-y-4 py-3 border-white">
                            win
                          </TableCell>
                          <TableCell className="bg-card text-[11px] md:text-sm xl:text-base dark:border-card-foreground font-medium text-[#2E963C] text-center border-y-4 py-3 border-white rounded-tr-full rounded-br-full">
                            10.00
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>{" "}
            </div>
          )}

          {activeTab === "details" && (
            <div
              className=" border p-3 md:p-4 rounded-[20px]"
              onClick={() => setActiveTab("details")}
            >
              <div className=" w-full p-4 xl:p-6 bg-card rounded-[14px]">
                <div className="flex items-center justify-between gap-4">
                  <p>Challenge Name</p>
                  <button>
                    <AiOutlineInfoCircle className=" text-lg" />
                  </button>
                </div>
                <div className="flex items-center py-3 justify-between">
                  <h2 className="text-lg 2xl:text-xl font-semibold">
                    5-Pick Challenge
                  </h2>
                  <div className=" inline-flex items-center gap-2">
                    <h2 className="text-sm  2xl:text-base bg-card-foreground px-3 py-1 pb-0.5 rounded-full border font-medium">
                      23:22:21
                    </h2>
                  </div>
                </div>
                <div className=" bg-card-foreground p-2 rounded-[20px]">
                  <div className="flex items-center gap-1 md:gap-2">
                    <p className=" w-full text-xs md:text-base bg-[#2E963C1A] text-[#2E963C] text-center font-medium md:font-semibold md:mt-4 rounded-full border border-[#1212121A] py-3 ">
                      Round 2
                    </p>
                    <p className=" w-full text-xs md:text-base bg-[#2E963C1A] text-[#2E963C] text-center font-medium md:font-semibold md:mt-4 rounded-full border border-[#1212121A] py-3 ">
                      0 Pick Remaining
                    </p>
                  </div>
                  <div className=" w-full px-4 py-6 ">
                    <div className=" w-full flex items-center justify-between">
                      <div className="">
                        <h3 className="2xl:text-lg font-semibold">Spain</h3>
                        <div className="text-xs md:text-base flex items-center gap-2 md:gap-4">
                          <p>Portugal vs Spain</p>
                          <p>Basketball</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/images/unlock.svg" // Replace with your actual icon path
                          alt="PartyBucks"
                          width={25}
                          height={25}
                          className="w-[16px] md:w-[25px] "
                        />
                        <div className="text-xs md:text-sm font-semibold  2xl:text-lg bg-card md:px-5 px-2 py-1 md:py-3  rounded-full border-2 ">
                          <span> 1 2.23</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-card  rounded-[14px] mt-2  gap-2">
                    <div className=" p-3 px-4 flex-1 flex items-center justify-between rounded-[14px]">
                      <p className="text-xs 2xl:text-base mb-1">Buy In </p>
                      <p className="xl:text-xl font-semibold">10 PartyBucks</p>
                    </div>
                    <div className=" pb-3 md:p-3 px-4 flex-1 flex items-center justify-between rounded-[14px]">
                      <p className="text-xs 2xl:text-base mb-1">
                        Potential Win
                      </p>
                      <p className="text-sm xl:text-xl font-semibold text-[#2E963C]">
                        100 PartyBucks
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
