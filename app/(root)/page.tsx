"use client";

import { CTAs } from "@/components/shared/Navbar";
import Image from "next/image";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";

export default function Sports() {
  const [activeSport, setActiveSport] = useState("Basketball");

  const sports = [
    "Basketball",
    "MMA",
    "Football",
    "Soccer",
    "Hockey",
    "Baseball",
    "Tennis",
    "Golf",
    "Boxing",
    "Rugby",
    "Cricket",
  ];

  const trendingGames = [
    {
      time: "Today at 7:00",
      teams: ["Portugal", "Spain"],
      bets: ["Portugal +15 (+10)", "O/U 3.0 Goals (+115)"],
    },
    {
      time: "Today at 9:30",
      teams: ["Brazil", "Argentina"],
      bets: ["Brazil -1.5 (+120)", "O/U 2.5 Goals (-110)"],
    },
  ];

  const featuredPlayers = Array(4).fill({
    name: "Connor Mcdavid",
    team: "Oliers",
    matchup: "@Was at 8:00 pm",
    stat: "3.5 Hits",
    odds: "-185",
  });

  return (
    <div className="max-w-6xl bg-card-foreground mt-6 mb-12 rounded-[24px] mx-auto p-4 md:p-6">
      <div className=" md:hidden">
        <CTAs />
      </div>

      <div className="flex flex-col  gap-6">
        {/* Sidebar Menu */}
        <div className=" flex-shrink-0">
          <div className="flex items-start mb-6 w-full  justify-between ">
            <div className="">
              <h1 className="text-3xl font-anton capitalize">
                It’s a sports Universe
              </h1>
              <p className="text-sm  mt-2">
                56 SPORTS + PLAY PROPS. INFINITE COMBINATIONS.
              </p>
            </div>
            <div className="relative hidden md:flex items-center gap-2 bg-card border border-gray-300 dark:border-slate-700 px-4 py-3 rounded-full  ">
              <LuSearch className="text-2xl` " />

              <input
                type="text"
                placeholder="Search sports..."
                className=" w-full lg:w-56 text-sm focus:outline-none bg-transparent  focus:ring-primary"
              />
            </div>
          </div>

          <div className=" w-full bg-card p-4 rounded-[20px] ">
            <ul className="space-y-2 flex  items-center overflow-x-auto gap-2.5  no-scrollbar ">
              {sports.map((sport, index) => (
                <li key={index}>
                  <button
                    className={` text-left text-primary px-8 py-2 flex  justify-between rounded-full transition-colors ${
                      activeSport === sport
                        ? "font-medium bg-card-foreground border items-center border-[#1212121A] dark:border-slate-700"
                        : "hover:bg-gray-100 dark:hover:bg-slate-800"
                    }`}
                    onClick={() => setActiveSport(sport)}
                  >
                    <span>{sport}</span>
                    {/* <Image
                    src={"/images/back.svg"}
                    alt={sport}
                    width={30}
                    height={30}
                    className="ml-2 rotate-180 dark:invert"
                  /> */}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex bg-card-foreground p-3 px-5 mt-4 rounded-full items-center justify-between">
              <h2 className="text-lg font-semibold  ">
                Browse Players and Games
              </h2>
              <Image
                src={"/images/back.svg"}
                alt={"hehe"}
                width={30}
                height={30}
                className="ml-2 rotate-180 dark:invert"
              />
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-8 bg-card p-4 xl:p-6 rounded-[20px]">
            <h2 className="text-lg capitalize font-semibold mb-4">
              Stack your winning combination
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {featuredPlayers.map((player, index) => (
                <div
                  key={index}
                  className="bg-card-foreground flex-col items-center rounded-[25px] p-4  border border-[#1212121A] dark:border-slate-700"
                >
                  <div className="flex flex-col justify-between items-center">
                    <Image
                      src={"/images/player-card.svg"}
                      alt="Player"
                      width={130}
                      height={130}
                      className="w-16 h-16 mb-2"
                    />
                    <h3 className="font-bold">{player.name}</h3>
                    <p className="text-sm text-gray-500 py-2">{player.team}</p>
                    <span className="text-sm ">{player.matchup}</span>
                  </div>
                  <div className="mt-4 flex justify-center gap-4 items-center">
                    <span className="font-medium bg-gray-100 dark:bg-slate-800 px-4 text-xs 2xl:text-sm  py-1 rounded-full ">
                      {player.stat}
                    </span>
                    <span className="text-primary font-bold text-xs 2xl:text-sm bg-[#ED4C5C1A] text-[#ED4C5C] px-4 py-1 rounded-full">
                      {player.odds}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Now */}
          <div className="mb-8 bg-card p-4 xl:p-6 rounded-[20px]">
            <h2 className="text-xl font-bold mb-4">Trending Now</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {trendingGames.map((game, index) => (
                <div
                  key={index}
                  className="bg-card-foreground p-4 rounded-[20px] border border-[#1212121A] dark:border-slate-700"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">{game.time}</span>
                    <div className="flex items-center gap-2">
                      <p>Basketball</p>
                    </div>
                  </div>
                  <div className=" bg-card p-4 rounded-[20px] gap-2">
                    <div className="flex flex-col  gap-2">
                      <span className="font-medium">{game.teams[0]}</span>
                      <span className="font-medium">{game.teams[1]}</span>
                    </div>
                    <div className=" w-full mt-2 flex items-center  gap-2 md:gap-4 justify-center">
                      {game.bets.map((bet, betIndex) => (
                        <span
                          key={betIndex}
                          className="text-xs md:text-sm flex-1 text-center bg-card-foreground px-3 py-2 border rounded-full"
                        >
                          {bet}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
