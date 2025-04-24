"use client";

import Image from "next/image";
import { useState } from "react";
import { LuCopy } from "react-icons/lu";

export default function ReferAndEarn() {
  const [copied, setCopied] = useState(false);
  const referralCode = "JE2HRFQ1";
  const referralBalance = "$1245.34 USD";

  const referralHistory = [
    {
      date: "Jul 6, 2023",
      profileName: "George W.",
      amount: "$10.00",
      creditAmount: "$24.00",
      status: "Success",
    },
    {
      date: "Jul 6, 2023",
      profileName: "George W.",
      amount: "$10.00",
      creditAmount: "$24.00",
      status: "Success",
    },
    {
      date: "Jul 6, 2023",
      profileName: "George W.",
      amount: "$10.00",
      creditAmount: "$24.00",
      status: "Success",
    },
    {
      date: "Jul 6, 2023",
      profileName: "George W.",
      amount: "$10.00",
      creditAmount: "$24.00",
      status: "Success",
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-card p-6 rounded-[20px] shadow">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Invite Friends</h1>
        <p className="text-primary mb-6">Refer your friends and earn big</p>

        {/* Referral Balance */}
        <div className="bg-card-foreground p-4 rounded-[20px] border border-gray-200 dark:border-slate-700 mb-6">
          <h2 className="text-sm font-medium mb-1">Referral Balance</h2>
          <p className="text-2xl font-bold">{referralBalance}</p>
        </div>

        {/* Unique Referral Link */}
        <div className="mb-8">
          <h2 className="text-sm font-medium mb-2">Your unique Link</h2>
          <div className="flex items-center gap-2 px-3  bg-card-foreground rounded-[20px] border border-gray-200 dark:border-slate-700">
            <div className="flex-1  p-3  dark:border-slate-700">
              <p className="font-mono text-lg">{referralCode}</p>
            </div>
            <button
              onClick={copyToClipboard}
              className=" rounded-[20px] pr-4  transition-colors"
            >
              {copied ? "Copied!" : <LuCopy className="text-lg" />}
            </button>
          </div>
        </div>
      </div>

      {/* Referral History */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Referral History</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 border-b border-gray-200 dark:border-slate-700">
                <th className="pb-2">Date</th>
                <th className="pb-2">Profile Name</th>
                <th className="pb-2">Amount</th>
                <th className="pb-2">Credit Amt.</th>
                <th className="pb-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {referralHistory.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 dark:border-slate-700"
                >
                  <td className="py-3">{item.date}</td>
                  <td>{item.profileName}</td>
                  <td>{item.amount}</td>
                  <td>{item.creditAmount}</td>
                  <td>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        item.status === "Success"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
