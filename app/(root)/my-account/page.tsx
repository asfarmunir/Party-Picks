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

export default function MyAccount() {
  return (
    <div className="max-w-6xl md:bg-card-foreground mt-6 md:mb-6  rounded-[24px] mx-auto p-4 md:p-6">
      <div className=" w-full flex items-center justify-between mb-6">
        <h1 className="text-3xl   font-anton">MY ACCOUNT</h1>

        <Dialog>
          <DialogTrigger asChild>
            <button className="text-sm bg-card-foreground md:bg-card  flex items-center gap-2 border border-[#FF9E42]/20 font-semibold text-center p-3 md:px-6 rounded-full w-fit">
              <Image
                src="/images/coin-dollar.svg" // Replace with your actual icon path
                alt="Currency Icon"
                width={20}
                height={20}
                className=" dark:invert"
              />
              <span className="hidden md:inline-flex">Currency Explainer</span>
            </button>
          </DialogTrigger>
          <DialogContent className=" md:max-w-3xl 2xl:max-w-3xl   ">
            <DialogHeader>
              <DialogTitle className="text-3xl mb-3   font-normal font-anton">
                Currency Explainer
              </DialogTitle>
              <div className=" max-h-[70svh]  overflow-y-auto no-scrollbar  bg-card-foreground rounded-[20px] p-3">
                <div className="flex  w-full gap-4 bg-gradient-to-b text-black from-[#B3B3B3] to-[#e8e8ea]  p-4 2xl:p-6 rounded-2xl items-center justify-center flex-col mb-3">
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="font-bold mt-1">PartyCoins</h3>
                    <p className=" text-sm md:text-base">
                      Free and purchasable virtual currency used for gameplay in
                      Freemium challenges, with no cash value or withdrawal
                      options.
                    </p>
                  </div>
                </div>
                <div className="flex  w-full gap-4 bg-gradient-to-b text-black from-[#FF9E42] to-[#FE8C21]  p-4 2xl:p-6 rounded-2xl items-center justify-center flex-col mb-3">
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="font-bold mt-1">PartyBucks</h3>
                    <p className=" text-sm md:text-base">
                      Sweepstakes currency awarded through promotions, activity
                      milestones, or as a bonus for purchasing PartyCoins.
                      Cannot be purchased directly, with no cash value or
                      withdrawal options.
                    </p>
                  </div>
                </div>
                <div className="flex  w-full gap-4 bg-gradient-to-b text-black from-[#66D575] to-[#52AA5E]  p-4 2xl:p-6 rounded-2xl items-center justify-center flex-col mb-3">
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="font-bold mt-1">PartyBucks Winnings</h3>
                    <p className=" text-sm md:text-base">
                      Redeemable PartyBucks won from Sweepstakes challenges that
                      can be withdrawn for USD at a 1:1 ratio, subject to terms
                      and conditions.
                    </p>
                  </div>
                </div>
                <div className="flex  w-full gap-4 bg-gradient-to-b text-black from-[#296EFF] to-[#296EFF]  p-4 2xl:p-6 rounded-2xl items-center justify-center flex-col ">
                  <div className="flex flex-col items-start gap-2">
                    <h3 className="font-bold mt-1"> Refer & Earn Credits</h3>
                    <p className=" text-sm md:text-base">
                      Invite friends to PartyPicks using your unique referral
                      link. When they sign up and make their first purchase,
                      you’ll earn 50% of that amount as site credit. Credits can
                      only be used for purchases on the website and cannot be
                      withdrawn.
                    </p>
                  </div>
                </div>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className=" gap-6 ">
        {/* User Profile Section */}
        <div className="   ">
          <div className="flex  bg-card-foreground md:bg-card items-center justify-between mb-6 p-3 2xl:p-4 rounded-[20px]">
            <div className="flex items-center gap-4">
              <div className="w-16 md:w-20 h-16 md:h-20 rounded-full bg-gray-200 dark:bg-gray-700  flex items-center justify-center">
                <span className="text-2xl font-bold">RG</span>
              </div>
              <div>
                <h2 className="text-base md:text-xl font-bold">
                  Rute Goncallez
                </h2>
                <p className="text-gray-500 text-xs md:text-sm dark:text-gray-400">
                  diboncallez
                </p>
              </div>
            </div>
            <button className="text-xs md:text-sm px-4 py-3 rounded-full border">
              Change Avatar
            </button>
          </div>

          {/* Verification Status */}
          <div className="bg-card-foreground md:bg-card dark:bg-yellow-900/20 p-3 2xl:p-6 rounded-[20px] mb-6">
            <div className="  w-full">
              <h3 className="font-bold mb-3">Be Prepared Verify Your ID!</h3>
              <div className="flex flex-col md:flex-row gap-4">
                <p className="text-sm bg-card md:bg-card-foreground p-3 px-6 rounded-full w-full ">
                  ID not verified, Verify your ID and unlock all features
                </p>
                <button className="text-sm bg-[#BA64141A]  text-[#BA6414] dark:text-[#FF9E42] border border-[#FF9E42]/20 font-semibold text-center p-3 px-6 rounded-full w-full ">
                  Verify Now!
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:mb-0 gap-4">
          {/* PartyBucks Card */}
          <div className=" px-3 pt-3 flex flex-col justify-between items-center  relative rounded-2xl bg-gradient-to-b dark:bg-gradient-to-t from-[#B3B3B3] to-[#F1F1FF] shadow">
            <div className="flex  w-full gap-4 bg-[#E1E1E1] dark:bg-[#c3c3c3] p-4 2xl:p-6 rounded-2xl items-center justify-center flex-col mb-3">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/partycoin.svg" // Replace with your actual icon path
                  alt="PartyBucks"
                  width={25}
                  height={25}
                />
                <h3 className="font-bold mt-1">PartyBucks</h3>
              </div>
              <p className="text-3xl font-bold">1,234</p>
            </div>
            <Image
              src="/images/partyBuck1.svg" // Replace with your actual icon path
              alt="PartyBucks"
              width={320}
              height={320}
            />
          </div>
          <div className=" px-3 pt-3 flex flex-col justify-between items-center  relative rounded-2xl bg-gradient-to-b from-[#ff9d42d3] to-[#FE8C21] shadow">
            <div className="flex  w-full gap-4 bg-[#fe912a] p-4 2xl:p-6 rounded-2xl items-center justify-center flex-col mb-3">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/partycoin.svg" // Replace with your actual icon path
                  alt="PartyBucks"
                  width={25}
                  height={25}
                />
                <h3 className="font-bold mt-1">PartyBucks</h3>
              </div>
              <p className="text-3xl font-bold">1,234</p>
            </div>
            <Image
              src="/images/partyBuck2.svg" // Replace with your actual icon path
              alt="PartyBucks"
              width={320}
              height={320}
            />
          </div>
          <div className=" px-3 pt-3 flex flex-col justify-between items-center  relative rounded-2xl bg-gradient-to-b from-[#66D575] to-[#52AA5E] shadow">
            <div className="flex  w-full gap-4 bg-[#4EED63] p-4 2xl:p-6 rounded-2xl items-center justify-center flex-col mb-3">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/partycoin.svg" // Replace with your actual icon path
                  alt="PartyBucks"
                  width={25}
                  height={25}
                />
                <h3 className="font-bold mt-1">PartyBucks</h3>
              </div>
              <p className="text-3xl font-bold">1,234</p>
            </div>
            <Image
              src="/images/partyBuck3.svg" // Replace with your actual icon path
              alt="PartyBucks"
              width={320}
              height={320}
            />
          </div>
          <div className=" px-3 pt-3 flex flex-col justify-between items-center  relative rounded-2xl bg-gradient-to-b from-[#296EFF] to-[#296EFF] shadow">
            <div className="flex  w-full gap-4 bg-[#538AFF] p-4 2xl:p-6 rounded-2xl items-center justify-center flex-col mb-3">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/partycoin.svg" // Replace with your actual icon path
                  alt="PartyBucks"
                  width={25}
                  height={25}
                />
                <h3 className="font-bold mt-1">PartyBucks</h3>
              </div>
              <p className="text-3xl font-bold">1,234</p>
            </div>
            <Image
              src="/images/partyBuck4.svg" // Replace with your actual icon path
              alt="PartyBucks"
              width={320}
              height={320}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
