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
import { ChevronLeft, ChevronRight } from "lucide-react";

const steps = [
  {
    title: "Choose Any Of Them From That Challenge",
    content: (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">Select a Challenge</p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              name: "30-Pick Challenge",
              description: "20 of 30 Wins",
              timeLimit: "Complete within 7 Days",
            },
            {
              name: "10-Pick Challenge",
              description: "7 of 10 Wins",
              timeLimit: "Complete within 3 Days",
            },
            {
              name: "5-Pick Challenge",
              description: "4 of 5 Wins",
              timeLimit: "Complete within 1 Day",
            },
          ].map((challenge, i) => (
            <div key={i} className="border rounded-lg p-4">
              <h3 className="font-bold">{challenge.name}</h3>
              <p className="text-sm">{challenge.description}</p>
              <p className="text-xs text-muted-foreground">
                {challenge.timeLimit}
              </p>
            </div>
          ))}
        </div>
        <p className="text-sm">
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
      <div className="space-y-4">
        <h3 className="font-bold">
          Run It Twice and watch your payouts skyrocket
        </h3>
        <p className="text-sm">
          When Starting A Challenge, You Can Choose To "Play It Once" Or "Play
          It Twice." "Play It Once" Sticks To The Standard Payout, While "Play
          It Twice" Raises The Stakes With A Multiplier—But There's A Catch!
          You'll Need To Win Twice In A Row To Cash In. After Your First Win,
          The Challenge Card Resets, Giving You One More Shot To Lock in That
          Bigger Payout.
        </p>
      </div>
    ),
  },
  {
    title: "PartyCoins VS PartyBucks",
    content: (
      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border rounded-lg p-4">
            <h3 className="font-bold">PartyCoins</h3>
            <p className="text-sm">
              Your go-to for Freemium play! Buy them, use them in challenges,
              and enjoy the fun—but they're just for entertainment and can't be
              cashed out. And don't worry—if you ever run low, we'll make sure
              you're topped up so the fun never stops!
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-bold">PartyBucks</h3>
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
      <div className="space-y-4">
        <h3 className="font-bold">MAKE YOUR FIRST PICK AND REMEMBER</h3>
        <p className="text-sm">
          Explore your options with 50+ sports and players to choose from, take
          your time and find the best picks for your challenge.
        </p>
        <p className="text-sm">
          Don't run out of time! Each challenge has a set time limit to complete
          all your picks, so be sure to finalize them before the clock expires.
        </p>
        <p className="text-sm">
          Climb the ranks! Winning with PartyCoins boosts your spot on the
          Leaderboard, proving your skills and giving you bragging rights!
        </p>
      </div>
    ),
  },
];

export function HowToPlayModal() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetModal = () => {
    setCurrentStep(0);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="text-sm font-medium text-primary underline-offset-4 hover:underline">
          How to play
        </button>
      </DialogTrigger>
      <DialogContent className="sm:min-w-[800px] flex flex-col justify-start xl:min-w-[1000px] md:min-h-[556px]">
        <div>
          <h2 className="text-xl font-semibold">{steps[currentStep].title}</h2>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center mt-4 relative justify-between   w-[90%] mx-auto">
          <div
            className={` w-8 h-8 xl:w-10 z-20  transition-colors  xl:h-10 rounded-md flex items-center justify-center  
                ${
                  currentStep === 0
                    ? "bg-[#3E5A9B] text-white"
                    : " bg-card-foreground border"
                }
                `}
          >
            <p>1</p>
          </div>
          <div
            className={` w-8 h-8 xl:w-10 z-20  transition-colors  xl:h-10 rounded-md flex items-center justify-center  
                ${
                  currentStep === 1
                    ? "bg-[#3E5A9B] text-white"
                    : " bg-card-foreground border"
                }
                `}
          >
            <p>2</p>
          </div>
          <div
            className={` w-8 h-8 xl:w-10 z-20  transition-colors  xl:h-10 rounded-md flex items-center justify-center  
                ${
                  currentStep === 2
                    ? "bg-[#3E5A9B] text-white"
                    : " bg-card-foreground border"
                }
                `}
          >
            <p>3</p>
          </div>
          <div
            className={` w-8 h-8 xl:w-10 z-20  transition-colors  xl:h-10 rounded-md flex items-center justify-center  
                ${
                  currentStep === 3
                    ? "bg-[#3E5A9B] text-white"
                    : " bg-card-foreground border"
                }
                `}
          >
            <p>4</p>
          </div>
          <div className="absolute h-0.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
            <motion.div
              className="absolute left-0 top-0 h-full rounded-full bg-[#3E5A9B]"
              initial={{ width: 0 }}
              animate={{
                width: `${(currentStep / steps.length) * 130}%`,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </div>
        </div>
        {/* <div className="relative h-1 w-[100%] mx-auto rounded-full bg-gray-200"></div> */}

        {/* Content with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: currentStep === 0 ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{
              opacity: 0,
              x: currentStep === steps.length - 1 ? -50 : 50,
            }}
            transition={{ duration: 0.2 }}
          >
            {steps[currentStep].content}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between mt-auto">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex items-center gap-1 rounded px-3 py-1 text-sm ${
              currentStep === 0
                ? "text-gray-400"
                : "text-primary hover:bg-gray-100"
            }`}
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </button>

          {currentStep < steps.length - 1 ? (
            <button
              onClick={nextStep}
              className="flex items-center gap-1 rounded bg-primary px-3 py-1 text-sm text-white hover:bg-primary/90"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={resetModal}
              className="flex items-center gap-1 rounded bg-primary px-3 py-1 text-sm text-white hover:bg-primary/90"
            >
              Got it!
            </button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
