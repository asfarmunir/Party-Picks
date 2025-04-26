"use client";

import Image from "next/image";
import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";
import { HowToPlayModal } from "@/components/shared/HowToPlay";

const challengeData = [
  {
    name: "30-Pick Challenge",
    description: "20 of 30 Wins",
    timeLimit: "Complete within 7 Days",
    image: "/images/challenge1.svg",
    odds: "100X",
  },
  {
    name: "10-Pick Challenge",
    description: "7 of 10 Wins",
    timeLimit: "Complete within 3 Days",
    image: "/images/challenge2.svg",
    odds: "20X",
  },
  {
    name: "5-Pick Challenge",
    description: "4 of 5 Wins",
    timeLimit: "Complete within 1 Days",
    image: "/images/challenge3.svg",
    odds: "20X",
  },
];

export default function Sports() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const nextChallenge = () => {
    setDirection("right");
    setCurrentIndex((prev) =>
      prev === challengeData.length - 1 ? 0 : prev + 1
    );
  };

  const prevChallenge = () => {
    setDirection("left");
    setCurrentIndex((prev) =>
      prev === 0 ? challengeData.length - 1 : prev - 1
    );
  };

  const variants = {
    enter: (direction: "left" | "right") => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0.5,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "tween", duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.1 },
      },
    },
    exit: (direction: "left" | "right") => ({
      x: direction === "right" ? "-100%" : "100%",
      opacity: 0.5,
      transition: {
        x: { type: "tween", duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.1 },
      },
    }),
  };

  return (
    <div className="max-w-7xl bg-card-foreground mt-6 mb-12 rounded-[24px] mx-auto p-4 md:p-6">
      <div className="flex flex-col gap-6">
        <div className="flex-shrink-0">
          <div className="flex items-center mb-6 w-full justify-between">
            <div className="">
              <h1 className="text-3xl mb-1 font-anton uppercase">
                Start challenge
              </h1>
              <p className="text-xs md:text-base">
                Choose any of them from that challenge.
              </p>
            </div>
          </div>

          {/* Desktop View - Grid */}
          <div className="hidden md:grid w-full grid-cols-1 gap-4 md:grid-cols-3">
            {challengeData.map((challenge, index) => (
              <ChallengeCard key={index} challenge={challenge} />
            ))}
          </div>

          {/* Mobile View - Carousel */}
          <div className="md:hidden relative overflow-hidden h-[580px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full absolute"
              >
                <ChallengeCard challenge={challengeData[currentIndex]} />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevChallenge}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full p-2 z-10"
            >
              <MdOutlineKeyboardArrowDown className="rotate-90 text-xl" />
            </button>
            <button
              onClick={nextChallenge}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full p-2 z-10"
            >
              <MdOutlineKeyboardArrowDown className="-rotate-90 text-xl" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center gap-2 absolute bottom-0 left-0 right-0">
              {challengeData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? "right" : "left");
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index ? "bg-[#FF9E42] w-4" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ChallengeCard = ({ challenge }: any) => {
  return (
    <div className="w-full p-4 xl:p-6 border-2 bg-card rounded-[20px]">
      <div className="flex items-center justify-between gap-4">
        <p className="text-lg xl:text-2xl 2xl:text-3xl font-anton">
          WIN UP TO <span className="text-[#FF9E42]">{challenge.odds}</span>
        </p>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button>
                <AiOutlineInfoCircle className="text-lg" />
              </button>
            </TooltipTrigger>
            <TooltipContent className="">
              Players must finalize all Picks before the <br /> clock runs out
              of time.
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="flex items-start py-4 justify-between">
        <div>
          <h2 className="2xl:text-base text-sm font-semibold">
            {challenge.name}
          </h2>
          <p className="text-[10px] 2xl:text-xs">{challenge.description}</p>
        </div>
        <div className="inline-flex items-center gap-2">
          <h2 className="text-[10px] 2xl:text-xs bg-card px-2 py-1 pb-0.5 rounded-full border font-medium">
            {challenge.timeLimit}
          </h2>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 md:gap-8 items-center justify-center">
        <div className="relative">
          <Image
            src={challenge.image}
            alt="PartyBucks"
            width={400}
            height={400}
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#F3F3F3] to-transparent"></div>
        </div>
        <p className="text-sm md:text-base text-center px-3 xl:px-8 border-b border-slate-300 pb-4 font-semibold xl:text-lg">
          Win Big Without Being Perfect
        </p>
      </div>
      <p className="w-full mx-auto gradient-bg mt-5 text-black text-center font-semibold my-3 border-b-4 border-orange-200 rounded-full py-3">
        Play Now
      </p>
      <HowToPlayModal />
      <p className="w-full bg-[#1212120D] text-center font-semibold mt-1 rounded-full border-2 py-3">
        How it works
      </p>
    </div>
  );
};
