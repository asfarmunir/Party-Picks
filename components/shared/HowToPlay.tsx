"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useMediaQuery } from "@/lib/use-media-query";

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

const pointsToRemember = [
  {
    tag: "Explore your options!",
    text: "With 50+ sports and players to choose from, take your time and find the best picks for your challenge.",
    icon: "/images/options.svg",
  },
  {
    tag: "Don't run out of time!",
    text: "Each challenge has a set time limit to complete all your picks, so be sure to finalize them before the clock expires.",
    icon: "/images/clock.svg",
  },
  {
    tag: "Climb the ranks!",
    text: "Winning with PartyCoins boosts your spot on the Leaderboard, proving your skills and giving you bragging rights!",
    icon: "/images/trophy.svg",
  },
];

const ChallengeCard = ({ challenge }: any) => {
  return (
    <div className="w-full p-1 border-4 bg-card rounded-[20px]">
      <div className="w-full flex flex-col  gap-1 md:gap-4 items-center justify-center">
        <div className="relative pt-2">
          <Image
            src={challenge.image}
            alt="PartyBucks"
            width={150}
            height={150}
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#F3F3F3] dark:from-[#12152c] to-transparent"></div>
        </div>
        <div className="flex items-center flex-col py-2 justify-center">
          <h2 className="text-sm md:text-base 2xl:text-lg font-anton">
            {challenge.name}
          </h2>
          <h2 className="text-[8px] 2xl:text-xs bg-card px-2 py-1 pb-0.5 rounded-full font-medium">
            {challenge.timeLimit}
          </h2>
          <p className="text-[10px] 2xl:text-xs mt-1">
            {challenge.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const steps = [
  {
    title: "Choose Any Of Them From That Challenge",
    content: (
      <div>
        <div className=" grid w-full grid-cols-2  gap-1 md:gap-4 md:grid-cols-3">
          {challengeData.map((challenge, index) => (
            <ChallengeCard key={index} challenge={challenge} />
          ))}
        </div>
        <p className="text-center mt-5 mb-2 text-sm 2xl:text-base">
          PartyPicks puts a fun twist on the classic parlay card! You don't need
          a perfect score to win, and with 50+ sports and player prop markets,
          there's always action to jump into. Pick a challenge, make your
          selections, and let the games begin!
        </p>
      </div>
    ),
  },
  {
    title: "Run It Twice",
    content: (
      <div className="w-full p-4 xl:p-6 md:h-full mt-5 flex flex-col-reverse md:flex-row md:gap-4 justify-end gap-8 items-center md:justify-between border-4 bg-card rounded-[20px]">
        <div className="">
          <h2 className="2xl:text-2xl text-lg font-anton">
            Run It Twice and watch your payouts skyrocket
          </h2>
          <p className="text-sm mt-4 2xl:text-base">
            When starting a challenge, you can choose to "Play it Once" or "Play
            it Twice." "Play it Once" sticks to the standard payout, while "Play
            it Twice" raises the stakes with a multiplier—but there's a catch!
            You'll need to win twice in a row to cash in. After your first win,
            the Challenge Card resets, giving you one more shot to lock in that
            bigger payout.
          </p>
        </div>
        <div className="pt-4  w-full flex items-center justify-center md:w-fit  bg-card-foreground md:bg-transparent rounded-[20px] p-4 md:p-0">
          <Image
            src="/images/spaceship.svg"
            alt="PartyBucks"
            width={450}
            height={450}
            className="w-[200px] md:w-[400px]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "PartyCoins VS PartyBucks",
    content: (
      <div className="bg-card-foreground rounded-[20px] p-4 xl:p-6">
        <h2 className="text-lg xl:text-3xl font-anton text-center mb-4">
          PartyCoins vs PartyBucks
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border rounded-[14px] p-4 xl:p-5 bg-gradient-to-b dark:text-black from-[#B3B3B3] to-[#F1F1FF]">
            <h3 className="font-bold mb-1">PartyCoins</h3>
            <p className="text-sm">
              Your go-to for Freemium play! Buy them, use them in challenges,
              and enjoy the fun—but they're just for entertainment and can't be
              cashed out. And don't worry—if you ever run low, we'll make sure
              you're topped up so the fun never stops!
            </p>
          </div>
          <div className="border rounded-[14px] p-4 xl:p-5 bg-gradient-to-b dark:text-black from-[#66D575] to-[#52AA5E]">
            <h3 className="font-bold mb-1">PartyBucks</h3>
            <p className="text-sm">
              The currency that can turn wins into real cash! You can't buy them
              directly, but you can earn them as a bonus when purchasing
              PartyCoins or through promotions. Use PartyBucks in Sweepstakes
              challenges—win, and you're eligible for cash redemption!
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Make Your First Pick",
    content: (
      <div className="bg-card-foreground rounded-[20px] p-4 xl:p-6">
        <h2 className="text-lg xl:text-3xl font-anton text-center mb-4">
          Make Your First Pick! And Remember
        </h2>
        <div className="grid gap-1 md:grid-cols-3 p-1 rounded-[14px] bg-card">
          {pointsToRemember.map((point, index) => (
            <div
              key={index}
              className="border rounded-[14px] p-4 xl:p-5 bg-card-foreground"
            >
              <p className="text-xs 2xl:text-sm tracking-wide">
                <span className="font-semibold">{point.tag}</span> {point.text}
              </p>
              <div className="w-full p-2 mt-4 flex rounded-full items-center justify-center bg-[#FF9E421A] border border-[#FF9E42]">
                <Image
                  src={point.icon}
                  alt="PartyBucks"
                  width={25}
                  height={25}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const ProgressBar = ({
  currentStep,
  steps,
}: {
  currentStep: number;
  steps: any[];
}) => (
  <div className="flex items-center mt-4 relative justify-between w-[90%] mx-auto">
    {steps.map((_, index) => (
      <div key={index} className="flex flex-col items-center gap-2">
        <div
          className={`w-8 h-8 xl:w-10 z-20 transition-colors xl:h-10 rounded-md flex items-center justify-center ${
            currentStep === index
              ? "bg-[#3E5A9B] text-white"
              : "bg-card-foreground border"
          }`}
        >
          <p>{index + 1}</p>
        </div>
        <p className="text-xs text-center">
          {index === 0
            ? "Choose From"
            : index === 1
            ? "Boost Payout"
            : index === 2
            ? "Game Type"
            : "Start Challenge"}
        </p>
      </div>
    ))}
    <div className="absolute h-0.5 w-[90%] right-10 top-5 rounded-full bg-gray-200 dark:bg-gray-700">
      <motion.div
        className="absolute left-0 top-0 h-full rounded-full bg-[#3E5A9B]"
        initial={{ width: 0 }}
        animate={{
          width: `${(currentStep / (steps.length - 1)) * 100}%`,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </div>
  </div>
);

const NavigationButtons = ({
  currentStep,
  prevStep,
  nextStep,
  resetModal,
  steps,
  isDrawer = false,
}: {
  currentStep: number;
  prevStep: () => void;
  nextStep: () => void;
  resetModal: () => void;
  steps: any[];
  isDrawer?: boolean;
}) => (
  <div className={`flex justify-between ${isDrawer ? "px-4 pb-4" : "mt-auto"}`}>
    <button
      onClick={prevStep}
      disabled={currentStep === 0}
      className={`flex items-center gap-1 rounded px-3 py-1 text-sm ${
        currentStep === 0
          ? "text-gray-400"
          : "text-primary hover:bg-gray-100 dark:hover:bg-slate-900"
      }`}
    >
      <ChevronLeft className="h-4 w-4" />
      Previous
    </button>

    {currentStep < steps.length - 1 ? (
      <button
        onClick={nextStep}
        className="flex items-center gap-1 rounded dark:bg-black px-3 py-1 text-sm hover:bg-primary/90"
      >
        Next
        <ChevronRight className="h-4 w-4" />
      </button>
    ) : (
      <DrawerClose asChild>
        <button
          onClick={resetModal}
          className="flex items-center gap-1 dark:bg-black rounded bg-primary px-3 py-1 text-sm hover:bg-primary/90"
        >
          Got it!
        </button>
      </DrawerClose>
    )}
  </div>
);
const MobileCarousel = ({ currentStep, setCurrentStep, steps }: any) => {
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
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
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0.5,
      transition: {
        x: { type: "tween", duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.1 },
      },
    }),
  };

  const paginate = (newDirection: number) => {
    setCurrentStep((prev: number) => {
      if (newDirection > 0) {
        return prev === steps.length - 1 ? 0 : prev + 1;
      } else {
        return prev === 0 ? steps.length - 1 : prev - 1;
      }
    });
  };

  return (
    <div className="relative h-full w-full overflow-hidden">
      <AnimatePresence custom={currentStep} initial={false}>
        <motion.div
          key={currentStep}
          custom={currentStep}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute w-full h-full px-4"
        >
          <div className="flex flex-col h-full">
            <h2 className="text-lg font-semibold mb-4">
              {steps[currentStep].title}
            </h2>
            <div className="flex-1 overflow-y-auto pb-4">
              {steps[currentStep].content}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      {/* <button
        onClick={() => paginate(-1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full p-2 z-10"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => paginate(1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full p-2 z-10"
      >
        <ChevronRight className="h-5 w-5" />
      </button> */}

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        {steps.map((_: any, index: number) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentStep === index ? "bg-[#FF9E42] " : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Close Button */}
      <DrawerClose className="absolute top-0 right-2 p-2 rounded-full bg-black/10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </DrawerClose>
    </div>
  );
};

export function HowToPlayModal() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const resetModal = () => {
    setCurrentStep(0);
    setIsOpen(false);
  };

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button className="w-full bg-[#1212120D] text-center font-semibold  rounded-full border-2 py-3">
            How it works
          </button>
        </DialogTrigger>
        <DialogContent className="sm:min-w-[800px] flex flex-col justify-start xl:min-w-[1000px] md:min-h-[556px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              {steps[currentStep].title}
            </DialogTitle>
          </DialogHeader>

          <ProgressBar currentStep={currentStep} steps={steps} />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: currentStep === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: currentStep === steps.length - 1 ? 50 : -50,
              }}
              transition={{ duration: 0.2 }}
              className="mt-4"
            >
              {steps[currentStep].content}
            </motion.div>
          </AnimatePresence>

          <NavigationButtons
            currentStep={currentStep}
            prevStep={() => setCurrentStep((p) => Math.max(0, p - 1))}
            nextStep={() =>
              setCurrentStep((p) => Math.min(steps.length - 1, p + 1))
            }
            resetModal={resetModal}
            steps={steps}
          />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <button className="w-full bg-[#1212120D] text-center font-semibold mt-1 rounded-full border-2 py-3">
          How it works
        </button>
      </DrawerTrigger>
      <DrawerContent className="h-[75vh]">
        <MobileCarousel
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          steps={steps}
        />
      </DrawerContent>
    </Drawer>
  );
}
