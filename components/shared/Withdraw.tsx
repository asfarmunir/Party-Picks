"use client";

import Image from "next/image";
import { useState } from "react";

export default function RequestWithdrawal() {
  const [amount, setAmount] = useState("");
  const [withdrawalMethod, setWithdrawalMethod] = useState<"cash" | null>(null);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and decimal point
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid withdrawal amount");
      return;
    }
    if (!withdrawalMethod) {
      alert("Please select a withdrawal method");
      return;
    }
    // Process withdrawal logic here
    alert(`Withdrawal request for $${amount} submitted successfully!`);
  };

  return (
    <div className="bg-card p-6 rounded-[20px] shadow">
      <h1 className="text-2xl font-bold mb-6">Withdraw Funds</h1>
      <p className="text-primary mb-6">See your billing details here.</p>

      {/* Balance Display */}
      <div className="bg-card-foreground p-4 rounded-[20px] border border-gray-200 dark:border-slate-700 mb-6">
        <div className="flex justify-between items-center">
          <span className="font-medium">Partybucks Winnings Balance</span>
          <span className="text-xl font-bold">$250.00</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Withdrawal Amount */}
        <div className="mb-6 bg-card-foreground p-4 rounded-[20px] border border-gray-200 dark:border-slate-700">
          <h2 className="text-lg font-semibold mb-2">Withdrawal amount</h2>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
              $
            </span>
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              placeholder="0.00"
              className="w-full bg-card pl-10    pr-4 py-3 border border-gray-300 dark:border-slate-700 rounded-[20px] focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>

        {/* Withdrawal Methods */}
        <div className="mb-6 bg-card-foreground p-4 rounded-[20px] border border-gray-200 dark:border-slate-700">
          <h2 className="text-lg font-semibold mb-2">Withdraw in Cash</h2>
          <p className="text-primary mb-4">
            Withdraw your funds directly to your bank account or payment card
          </p>

          <button
            type="button"
            onClick={() => setWithdrawalMethod("cash")}
            className={`w-full p-4 rounded-[20px] border-2 ${
              withdrawalMethod === "cash"
                ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
                : "border-gray-300 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-medium">Click here for Cash</span>
              </div>
              {withdrawalMethod === "cash" && (
                <span className="text-green-500 text-lg">✓</span>
              )}
            </div>
          </button>
        </div>

        {/* Submit Button */}
        {/* <button
          type="submit"
          disabled={!amount || !withdrawalMethod}
          className={`w-full px-6 py-3 rounded-[20px] font-medium text-black text-sm ${
            amount && withdrawalMethod
              ? "gradient-bg hover:opacity-90"
              : "bg-gray-400 cursor-not-allowed"
          } transition-colors`}
        >
          Request Withdrawal
        </button> */}
      </form>
    </div>
  );
}
