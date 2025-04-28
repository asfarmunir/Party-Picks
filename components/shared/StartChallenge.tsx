// components/shared/StartChallenge.tsx
"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";

const StartChallenge = () => {
  const [activeCurrency, setActiveCurrency] = useState("partycoins");
  const [activeChallenge, setActiveChallenge] = useState("30-Pick Challenge");
  const [activeMultiplier, setActiveMultiplier] = useState("10x");
  const toggleCurrency = () => {
    setActiveCurrency((prev) =>
      prev === "partycoins" ? "partybucks" : "partycoins"
    );
  };

  return (
    <>
      <Dialog>
        <DialogTrigger className="w-full hidden md:block mx-auto gradient-bg mt-5 text-black text-center font-semibold my-3 border-b-2 2xl:border-b-4 border-orange-200 dark:border-orange-200/50 rounded-full py-3">
          Play Now
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl mb-4 xl:text-3xl font-anton uppercase font-normal">
              Start Challenge
            </DialogTitle>
            <div className=" w-full bg-card-foreground rounded-[24px] p-4 md:p-6">
              <div className=" w-full flex items-center justify-between gap-4">
                <h2 className="text-sm 2xl:text-base">
                  Balance: 25 PartyCoins{" "}
                </h2>
                <div className="flex items-center">
                  <button
                    type="button"
                    className={`relative inline-flex h-10 w-20 items-center rounded-full border-2 transition-colors duration-300 focus:outline-none ${
                      activeCurrency === "partycoins"
                        ? "border-[#1212121A] bg-[#1212121A]"
                        : "border-[#2E963C] bg-[#2E963C1A]"
                    }`}
                    onClick={toggleCurrency}
                  >
                    <span
                      className={`inline-block h-8 w-8 transform rounded-full bg-white transition-transform duration-300 ${
                        activeCurrency === "partycoins"
                          ? "translate-x-1"
                          : "translate-x-11"
                      }`}
                    >
                      <img
                        src={
                          activeCurrency === "partycoins"
                            ? "/images/partycoin.svg"
                            : "/images/partyBuck.svg"
                        }
                        alt={activeCurrency}
                        className="h-full w-full "
                      />
                    </span>
                  </button>
                </div>
              </div>
              <div
                className={`
                ${
                  activeCurrency === "partycoins"
                    ? "bg-[#0E83A41A] "
                    : "bg-[#2E963C1A] "
                }
                 rounded-[24px] p-4 my-3 `}
              >
                <h2 className="text-sm 2xl:text-base mb-3">
                  Select your Challenge!
                </h2>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    className={`w-full text-sm 2xl:text-base font-semibold py-3 px-4 rounded-full text-center ${
                      activeChallenge === "30-Pick Challenge"
                        ? activeCurrency === "partycoins"
                          ? "bg-[#0E83A4] text-white"
                          : "bg-[#2E963C] text-white"
                        : activeCurrency === "partycoins"
                        ? "bg-[#0E83A41A] text-black dark:text-white"
                        : "bg-[#2E963C33] text-black dark:text-white"
                    }
                `}
                    onClick={() => setActiveChallenge("30-Pick Challenge")}
                  >
                    30-Pick
                  </button>
                  <button
                    className={`w-full text-sm 2xl:text-base font-semibold py-3 px-4 rounded-full text-center ${
                      activeChallenge === "10-Pick Challenge"
                        ? activeCurrency === "partycoins"
                          ? "bg-[#0E83A4] text-white"
                          : "bg-[#2E963C] text-white"
                        : activeCurrency === "partycoins"
                        ? "bg-[#0E83A41A] text-black dark:text-white"
                        : "bg-[#2E963C33] text-black dark:text-white"
                    }
                `}
                    onClick={() => setActiveChallenge("10-Pick Challenge")}
                  >
                    10-Pick
                  </button>
                  <button
                    className={`w-full text-sm 2xl:text-base font-semibold py-3 px-4 rounded-full text-center ${
                      activeChallenge === "5-Pick Challenge"
                        ? activeCurrency === "partycoins"
                          ? "bg-[#0E83A4] text-white"
                          : "bg-[#2E963C] text-white"
                        : activeCurrency === "partycoins"
                        ? "bg-[#0E83A41A] text-black dark:text-white"
                        : "bg-[#2E963C33] text-black dark:text-white"
                    }
                `}
                    onClick={() => setActiveChallenge("5-Pick Challenge")}
                  >
                    5-Pick
                  </button>
                </div>
              </div>
              <div
                className={`
                ${
                  activeCurrency === "partycoins"
                    ? "bg-[#0E83A41A] "
                    : "bg-[#2E963C1A] "
                }
                 rounded-[24px] p-4 my-3 `}
              >
                <div className="grid grid-cols-2 gap-2">
                  <div
                    className={`
                    ${
                      activeCurrency !== "partycoins"
                        ? "bg-[#2E963C33] "
                        : "bg-[#0E83A433] "
                    } rounded-[14px] p-3 2xl:p-4
                    `}
                  >
                    <p className="text-xs 2xl:text-sm mb-1">Play Amount</p>
                    <h2 className=" font-semibold text-lg 2xl:text-xl">0.0</h2>
                  </div>
                  <div
                    className={`
                    ${
                      activeCurrency !== "partycoins"
                        ? "bg-[#2E963C33] "
                        : "bg-[#0E83A433] "
                    } rounded-[14px] p-3 2xl:p-4
                    `}
                  >
                    <p className="text-xs 2xl:text-sm mb-1">To Win</p>
                    <h2 className=" font-semibold text-lg 2xl:text-xl">0.0</h2>
                  </div>
                </div>
              </div>
              <div
                className={`
                ${
                  activeCurrency === "partycoins"
                    ? "bg-[#0E83A41A] "
                    : "bg-[#2E963C1A] "
                }
                 rounded-[24px] p-4 my-3 `}
              >
                <h2 className="text-sm 2xl:text-base mb-3">
                  Select yourm Multiplier!
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    className={`w-full text-sm 2xl:text-base font-semibold py-3 px-4 rounded-full text-center ${
                      activeMultiplier === "10x"
                        ? activeCurrency === "partycoins"
                          ? "bg-[#0E83A4] text-white"
                          : "bg-[#2E963C] text-white"
                        : activeCurrency === "partycoins"
                        ? "bg-[#0E83A41A] text-black dark:text-white"
                        : "bg-[#2E963C33] text-black dark:text-white"
                    }
                `}
                    onClick={() => setActiveMultiplier("10x")}
                  >
                    Play Once 10X
                  </button>
                  <button
                    className={`w-full text-sm 2xl:text-base font-semibold py-3 px-4 rounded-full text-center ${
                      activeMultiplier === "100x"
                        ? activeCurrency === "partycoins"
                          ? "bg-[#0E83A4] text-white"
                          : "bg-[#2E963C] text-white"
                        : activeCurrency === "partycoins"
                        ? "bg-[#0E83A41A] text-black dark:text-white"
                        : "bg-[#2E963C33] text-black dark:text-white"
                    }
                `}
                    onClick={() => setActiveMultiplier("100x")}
                  >
                    Play twice 100X
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-3 mt-5">
                <Checkbox
                  id="terms"
                  className=" rounded-full 2xl:w-5 2xl:h-5"
                />
                <label
                  htmlFor="terms"
                  className="text-sm 2xl:text-base cursor-pointer"
                >
                  I have read and agree to all PartyPicks Rules & Terms.
                </label>
              </div>
              <button className="w-full mx-auto gradient-bg mt-5  text-black text-center font-semibold  border-b-2 2xl:border-b-4 border-orange-200 dark:border-orange-200/50 rounded-full py-3 xl:py-3.5">
                Start Challenge
              </button>
            </div>
          </DialogHeader>
          {/* Add your challenge start content here */}
        </DialogContent>
      </Dialog>
      <Drawer>
        <DrawerTrigger
          className="md:hidden w-full  mx-auto gradient-bg mt-5 text-black text-center font-semibold 
          my-3 border-b-2 2xl:border-b-4 border-orange-200 dark:border-orange-200/50 rounded-full py-3"
        >
          Play Now
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DrawerDescription>
          </DrawerHeader>
          <div className=" w-full bg-card-foreground rounded-[24px] p-4 md:p-6">
            <div className=" w-full flex items-center justify-between gap-4">
              <h2 className="text-sm 2xl:text-base">Balance: 25 PartyCoins </h2>
              <div className="flex items-center">
                <button
                  type="button"
                  className={`relative inline-flex h-10 w-20 items-center rounded-full border-2 transition-colors duration-300 focus:outline-none ${
                    activeCurrency === "partycoins"
                      ? "border-[#0E83A4] bg-[#1212121A]"
                      : "border-[#2E963C] bg-[#2E963C1A]"
                  }`}
                  onClick={toggleCurrency}
                >
                  <span
                    className={`inline-block h-8 w-8 transform rounded-full bg-white transition-transform duration-300 ${
                      activeCurrency === "partycoins"
                        ? "translate-x-1"
                        : "translate-x-11"
                    }`}
                  >
                    <img
                      src={
                        activeCurrency === "partycoins"
                          ? "/images/partycoin.svg"
                          : "/images/partyBuck.svg"
                      }
                      alt={activeCurrency}
                      className="h-full w-full "
                    />
                  </span>
                </button>
              </div>
            </div>
            <div
              className={`
                ${
                  activeCurrency === "partycoins"
                    ? "bg-[#0E83A41A] "
                    : "bg-[#2E963C1A] "
                }
                 rounded-[24px] p-4 my-3 `}
            >
              <h2 className="text-sm 2xl:text-base mb-3">
                Select your Challenge!
              </h2>
              <div className="grid grid-cols-3 gap-2">
                <button
                  className={`w-full text-sm 2xl:text-base font-semibold py-3 px-4 rounded-full text-center ${
                    activeChallenge === "30-Pick Challenge"
                      ? activeCurrency === "partycoins"
                        ? "bg-[#0E83A4] text-white"
                        : "bg-[#2E963C] text-white"
                      : activeCurrency === "partycoins"
                      ? "bg-[#0E83A41A] text-black dark:text-white"
                      : "bg-[#2E963C33] text-black dark:text-white"
                  }
                `}
                  onClick={() => setActiveChallenge("30-Pick Challenge")}
                >
                  30-Pick
                </button>
                <button
                  className={`w-full text-sm 2xl:text-base font-semibold py-3 px-4 rounded-full text-center ${
                    activeChallenge === "10-Pick Challenge"
                      ? activeCurrency === "partycoins"
                        ? "bg-[#0E83A4] text-white"
                        : "bg-[#2E963C] text-white"
                      : activeCurrency === "partycoins"
                      ? "bg-[#0E83A41A] text-black dark:text-white"
                      : "bg-[#2E963C33] text-black dark:text-white"
                  }
                `}
                  onClick={() => setActiveChallenge("10-Pick Challenge")}
                >
                  10-Pick
                </button>
                <button
                  className={`w-full text-sm 2xl:text-base font-semibold py-3 px-4 rounded-full text-center ${
                    activeChallenge === "5-Pick Challenge"
                      ? activeCurrency === "partycoins"
                        ? "bg-[#0E83A4] text-white"
                        : "bg-[#2E963C] text-white"
                      : activeCurrency === "partycoins"
                      ? "bg-[#0E83A41A] text-black dark:text-white"
                      : "bg-[#2E963C33] text-black dark:text-white"
                  }
                `}
                  onClick={() => setActiveChallenge("5-Pick Challenge")}
                >
                  5-Pick
                </button>
              </div>
            </div>
            <div
              className={`
                ${
                  activeCurrency === "partycoins"
                    ? "bg-[#0E83A41A] "
                    : "bg-[#2E963C1A] "
                }
                 rounded-[24px] p-4 my-3 `}
            >
              <div className="grid grid-cols-2 gap-2">
                <div
                  className={`
                    ${
                      activeCurrency !== "partycoins"
                        ? "bg-[#2E963C33] "
                        : "bg-[#0E83A433] "
                    } rounded-[14px] p-3 2xl:p-4
                    `}
                >
                  <p className="text-xs 2xl:text-sm mb-1">Play Amount</p>
                  <h2 className=" font-semibold text-lg 2xl:text-xl">0.0</h2>
                </div>
                <div
                  className={`
                    ${
                      activeCurrency !== "partycoins"
                        ? "bg-[#2E963C33] "
                        : "bg-[#0E83A433] "
                    } rounded-[14px] p-3 2xl:p-4
                    `}
                >
                  <p className="text-xs 2xl:text-sm mb-1">To Win</p>
                  <h2 className=" font-semibold text-lg 2xl:text-xl">0.0</h2>
                </div>
              </div>
            </div>
            <div
              className={`
                ${
                  activeCurrency === "partycoins"
                    ? "bg-[#0E83A41A] "
                    : "bg-[#2E963C1A] "
                }
                 rounded-[24px] p-4 my-3 `}
            >
              <h2 className="text-sm 2xl:text-base mb-3">
                Select yourm Multiplier!
              </h2>
              <div className="grid grid-cols-2 gap-2">
                <button
                  className={`w-full text-[13px] 2xl:text-base font-semibold py-3 px-4 rounded-full text-center ${
                    activeMultiplier === "10x"
                      ? activeCurrency === "partycoins"
                        ? "bg-[#0E83A4] text-white"
                        : "bg-[#2E963C] text-white"
                      : activeCurrency === "partycoins"
                      ? "bg-[#0E83A41A] text-black dark:text-white"
                      : "bg-[#2E963C33] text-black dark:text-white"
                  }
                `}
                  onClick={() => setActiveMultiplier("10x")}
                >
                  Play Once 10X
                </button>
                <button
                  className={`w-full text-[13px] 2xl:text-base font-semibold py-3 px-4 rounded-full text-center ${
                    activeMultiplier === "100x"
                      ? activeCurrency === "partycoins"
                        ? "bg-[#0E83A4] text-white"
                        : "bg-[#2E963C] text-white"
                      : activeCurrency === "partycoins"
                      ? "bg-[#0E83A41A] text-black dark:text-white"
                      : "bg-[#2E963C33] text-black dark:text-white"
                  }
                `}
                  onClick={() => setActiveMultiplier("100x")}
                >
                  Play twice 100X
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 ml-3 mt-5">
              <Checkbox id="terms" className=" rounded-full 2xl:w-5 2xl:h-5" />
              <label
                htmlFor="terms"
                className="text-sm 2xl:text-base cursor-pointer"
              >
                I have read and agree to all PartyPicks Rules & Terms.
              </label>
            </div>
            <button className="w-full mx-auto gradient-bg mt-5  text-black text-center font-semibold  border-b-2 2xl:border-b-4 border-orange-200 dark:border-orange-200/50 rounded-full py-3 xl:py-3.5">
              Start Challenge
            </button>
          </div>
          <DrawerFooter>
            <DrawerClose>Cancel</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default StartChallenge;
