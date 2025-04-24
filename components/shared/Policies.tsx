"use client";

import Image from "next/image";
import { useState } from "react";

export default function Policies() {
  return (
    <div className="bg-card p-6 rounded-[20px] shadow">
      <h1 className="text-2xl font-bold mb-2.5">
        Policies, Rules and Agreements
      </h1>
      <p className="text-primary mb-6">Set options from here.</p>

      {/* Balance Display */}
      <div className="bg-card-foreground p-4 px-5 rounded-full border border-gray-200 dark:border-slate-700 mb-6">
        <div className="flex justify-between items-center">
          <span className="font-medium">Terms of Use</span>
          <Image
            src="/images/back.svg"
            alt="Logo"
            width={30}
            height={30}
            className="dark:invert mb-2 rotate-180"
          />
        </div>
      </div>
      <div className="bg-card-foreground p-4 px-5 rounded-full border border-gray-200 dark:border-slate-700 mb-6">
        <div className="flex justify-between items-center">
          <span className="font-medium">Privacy Policy</span>
          <Image
            src="/images/back.svg"
            alt="Logo"
            width={30}
            height={30}
            className="dark:invert mb-2 rotate-180"
          />
        </div>
      </div>
      <div className="bg-card-foreground p-4 px-5 rounded-full border border-gray-200 dark:border-slate-700 mb-6">
        <div className="flex justify-between items-center">
          <span className="font-medium">Sweepstakes Rules</span>
          <Image
            src="/images/back.svg"
            alt="Logo"
            width={30}
            height={30}
            className="dark:invert mb-2 rotate-180"
          />
        </div>
      </div>
    </div>
  );
}
