"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { CTAs } from "@/components/shared/Navbar";

const menuItems = [
  {
    price: 20,
    coins: 20000,
    bonus: 20,
  },
  {
    price: 100,
    bonus: 100,
    coins: 100000,
  },
  {
    price: 250,
    bonus: 250,
    coins: 250000,
  },
  {
    price: 450,
    bonus: 450,
    coins: 450000,
  },
];

export default function Shop() {
  return (
    <div className="max-w-6xl md:bg-card-foreground mt-6 md:mb-6  rounded-[24px] mx-auto p-2 md:p-6">
      <div className=" md:hidden">
        <CTAs />
      </div>
      {/* Header Section */}
      <div className=" w-full flex items-center justify-between mb-6">
        <h1 className="text-3xl   font-anton">SHOP</h1>
      </div>
      <div className="  ">
        {/* User Profile Section */}
        <div className="   ">
          <div className="flex  overflow-hidden relative bg-gradient-to-b text-white from-[#FE4245] border-b-2 border-black to-[#F22815] items-center justify-between mb-3 md:mb-6 p-4 2xl:p-5 rounded-[20px]">
            <div className="flex z-10 items-center gap-4">
              <div>
                <h2 className="text-lg md:text-xl font-bold">Daily Bonus</h2>
                <p className="text-xs 2xl:text-sm">
                  Get your daily 1,000 PartyCoins!
                </p>
              </div>
            </div>
            <Image
              src="/images/coins-bg.svg" // Replace with your actual icon path
              alt="PartyBucks"
              width={300}
              height={300}
              className="absolute right-0  "
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-2   md:mb-0 gap-1 md:gap-4">
          {/* PartyBucks Card */}
          {menuItems.map((item, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className=" flex flex-col p-1 justify-between items-center  relative rounded-2xl bg-gradient-to-b dark:bg-gradient-to-t from-[#296EFF] to-[#296EFF] shadow">
                  <Image
                    src="/images/bg-shine.svg" // Replace with your actual icon path
                    alt="PartyBucks"
                    width={300}
                    height={300}
                    priority
                    className="absolute w-[120%] bottom-24 md:bottom-3  "
                  />
                  <div className="flex flex-col py-3 md:py-8 gap-5 items-center justify-center">
                    <Image
                      src={`/images/shopCoin${index + 1}.svg`} // Replace with your actual icon path
                      alt="PartyBucks"
                      width={130}
                      height={130}
                      priority
                      className="w-[90px] md:w-[120px] "
                    />
                    <div className="flex items-center gap-2 justify-center">
                      <Image
                        src="/images/coin.svg" // Replace with your actual icon path
                        alt="PartyBucks"
                        width={25}
                        height={25}
                        className="w-[20px] md:w-[25px] "
                      />
                      <h2 className="text-xl md:text-3xl      font-anton">
                        ${item.price}.00
                      </h2>
                    </div>
                  </div>

                  <div className="flex  w-full text-white gap-2 md:gap-4 z-10 bg-[#00000066]  p-2 2xl:p-6 rounded-xl items-center justify-center flex-col ">
                    <div className="flex text-xs text-center md:text-base items-center bg-[#2E963C] px-4 py-1.5 rounded-md ">
                      <h3 className=""> Bonus {item.bonus} PartyBucks</h3>
                    </div>
                    <p className="text-sm text-center md:text-xl font-semibold">
                      {item.coins.toLocaleString()} PartyCoins
                    </p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className=" font-normal mb-4 text-3xl font-anton uppercase">
                    Checkout
                  </DialogTitle>
                </DialogHeader>

                <div className=" bg-card-foreground p-4 2xl:p-6 rounded-[20px]">
                  <h2 className="text-base md:text-xl font-semibold">
                    Order Summary
                  </h2>
                  <p className="text-xs 2xl:text-base">
                    Review your order details
                  </p>
                  <div className="flex bg-card p-4 rounded-lg items-center justify-between mt-4">
                    <div className="flex items-center gap-2.5 md:gap-4">
                      <Image
                        src={`/images/cart-coins.svg`} // Replace with your actual icon path
                        alt="PartyBucks"
                        width={50}
                        height={50}
                        priority
                        className="w-[40px] md:w-[50px] "
                      />
                      <div>
                        <h3 className="text-sm md:text-lg font-semibold">
                          {item.coins.toLocaleString()} PartyCoins
                        </h3>
                        <p className="text-xs md:text-base text-gray-700 dark:text-gray-400">
                          Bonus {item.bonus} PartyBucks
                        </p>
                      </div>
                    </div>
                    <p className="text-sm md:text-lg font-semibold">
                      ${item.price}.00
                    </p>
                  </div>
                  <div className="flex bg-card p-4 rounded-lg items-center justify-between mt-4">
                    <div className="flex items-center gap-2.5 md:gap-4">
                      <Image
                        src={`/images/credit.svg`} // Replace with your actual icon path
                        alt="PartyBucks"
                        width={50}
                        height={50}
                        priority
                        className="w-[40px] md:w-[50px] "
                      />
                      <div>
                        <h3 className="text-sm md:text-lg font-semibold">
                          Apply Available Referral Credits
                        </h3>
                      </div>
                    </div>
                    <Checkbox className=" rounded-full w-6 h-6 " />
                  </div>
                  <div className=" mt-8">
                    <h2 className="text-2xl font-semibold">Billing</h2>
                    <p className="text-primary">
                      See your billing details here.
                    </p>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-card mt-4 border border-gray-200 dark:border-slate-700 rounded-[20px] mb-3">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-6 bg-blue-100 dark:bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-xs font-bold">Visa</span>
                      </div>
                      <div>
                        <p className="font-medium">Visa ending in 1234</p>
                        <p className="text-sm text-gray-500">Exp. Date 12/25</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Checkbox className=" rounded-full w-6 h-6 " />
                    </div>
                  </div>
                  <button className="px-4 py-3 border border-dashed bg-[#FF9E421A] text-[#FF9E42] border-gray-300 dark:border-slate-700 rounded-[20px] w-full hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                    + Add card
                  </button>
                </div>
                <button className=" px-4 py-4 font-semibold text-black gradient-bg  rounded-full w-full hover:bg-[#FF9E42CC] transition-colors">
                  Make Purchase
                </button>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}
