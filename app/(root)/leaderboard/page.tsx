"use client";

import Image from "next/image";

import Link from "next/link";
import { PieChart } from "react-minimal-pie-chart";
export default function Sports() {
  return (
    <div className="max-w-6xl bg-card-foreground mt-6 mb-12 rounded-[24px] mx-auto p-4 md:p-6">
      <div className="flex flex-col  gap-6">
        {/* Sidebar Menu */}
        <div className=" flex-shrink-0">
          <div className="">
            <div className="flex items-center gap-4 ">
              <Link href="/my-challenges">
                <Image
                  src="/images/back.svg" // Replace with your actual icon path
                  alt="PartyBucks"
                  width={25}
                  height={25}
                  className="w-[24px] md:w-[28px] "
                />
              </Link>
              <h1 className="text-2xl font-semibold ">Leaderboard</h1>
            </div>
          </div>
          <div className=" w-full mx-auto bg-card my-5 p-4 xl:p-6 space-y-2 rounded-[24px]">
            {Array.from({ length: 10 }, (_, index) => (
              <div
                key={index}
                className=" w-full flex items-center justify-between bg-card-foreground p-3 rounded-full"
              >
                <div className="flex items-center">
                  <div
                    className={`
                        w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center border-2 justify-center
                        ${
                          index === 0
                            ? "bg-gradient-to-b from-[#FEB949] to-[#D9972B] text-black"
                            : index === 1
                            ? "bg-gradient-to-b from-[#D1D1D1] to-[#B5B5B5] text-black"
                            : index === 2
                            ? "bg-gradient-to-b from-[#8C3C0A] to-[#8C3C0A] text-white"
                            : "bg-card-foreground "
                        }`}
                  >
                    <h2 className="text-lg font-semibold">{index + 1}</h2>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold mb-0.5 ">
                      James Mitchell
                    </h2>
                    <p className="text-sm text-gray-500">30,000 Partycoins</p>
                  </div>
                </div>
                <PieChart
                  className=" w-20 "
                  animate={true}
                  animationDuration={700}
                  animationEasing="ease-out"
                  center={[50, 50]}
                  data={[
                    {
                      color: "#FEA047",
                      title: "One",
                      value: 60,
                    },
                    {
                      color: "#FEA0471A",
                      title: "Two",
                      value: 40,
                    },
                  ]}
                  labelPosition={0}
                  label={({ dataEntry }) => {
                    return dataEntry.title === "One"
                      ? `${dataEntry.value}%`
                      : "";
                  }}
                  lengthAngle={360}
                  labelStyle={{
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                  lineWidth={24}
                  paddingAngle={0}
                  radius={50}
                  rounded={true}
                  startAngle={280}
                  background="#F1EEE9"
                  viewBoxSize={[100, 100]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
