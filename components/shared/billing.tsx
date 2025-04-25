"use client";

import { useState } from "react";
import Image from "next/image";

export default function Billing() {
  const [view, setView] = useState<"billing" | "addCard">("billing");
  const [cards, setCards] = useState([
    {
      type: "Visa",
      lastFour: "5645",
      expDate: "02/25",
      isDefault: true,
    },
  ]);
  const [newCard, setNewCard] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
  });
  const [transactions] = useState([
    {
      date: "Jul 6, 2023",
      type: "Deposit",
      amount: "$10.00",
      method: "ACH Transfer",
    },
    {
      date: "Jul 6, 2023",
      type: "Deposit",
      amount: "$10.00",
      method: "ACH Transfer",
    },
    {
      date: "Jul 6, 2023",
      type: "Deposit",
      amount: "$10.00",
      method: "ACH Transfer",
    },
    {
      date: "Jul 6, 2023",
      type: "Deposit",
      amount: "$10.00",
      method: "ACH Transfer",
    },
  ]);

  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate card details here

    // Add new card to the list
    const newCardData = {
      type: "Visa", // You can detect this from the card number
      lastFour: newCard.cardNumber.slice(-4),
      expDate: newCard.expiryDate,
      isDefault: false,
    };

    setCards([...cards, newCardData]);
    setNewCard({
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardholderName: "",
    });
    setView("billing");
    alert("Card added successfully!");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCard((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const setAsDefault = (index: number) => {
    const updatedCards = cards.map((card, i) => ({
      ...card,
      isDefault: i === index,
    }));
    setCards(updatedCards);
  };

  return (
    <div className="bg-card p-4 md:p-6 rounded-[20px] shadow">
      {view === "billing" ? (
        <>
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-semibold">Billing</h2>
              <p className="text-primary">See your billing details here.</p>
            </div>
          </div>

          {/* Saved Cards Section */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Payment Methods</h3>
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-card-foreground border border-gray-200 dark:border-slate-700 rounded-[20px] mb-3"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-6 bg-blue-100 dark:bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-xs font-bold">{card.type}</span>
                  </div>
                  <div>
                    <p className="font-medium">
                      {card.type} ending in {card.lastFour}
                    </p>
                    <p className="text-sm text-gray-500">
                      Exp. Date {card.expDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {card.isDefault && (
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      Default
                    </span>
                  )}
                  {!card.isDefault && (
                    <button
                      onClick={() => setAsDefault(index)}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Set as default
                    </button>
                  )}
                </div>
              </div>
            ))}

            <button
              onClick={() => setView("addCard")}
              className="mt-4 px-4 py-2 border border-dashed bg-[#FF9E421A] text-[#FF9E42] border-gray-300 dark:border-slate-700 rounded-[20px] w-full hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
            >
              + Add card
            </button>
          </div>

          {/* Transaction History */}
          <div className="bg-card-foreground border border-gray-200 dark:border-slate-700 rounded-[20px] p-4 mt-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Transaction History</h3>
              <button className="text-sm text-blue-600 hover:underline">
                Filter
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="">
                  <tr className="text-center bg-card text-xs xl:text-sm text-gray-500 border-b border-gray-200 dark:border-slate-700">
                    <th className="pb-2 pt-5">Date</th>
                    <th className="pb-2 pt-5">Type</th>
                    <th className="pb-2 pt-5">Amount</th>
                    <th className="pb-2 pt-5">Method</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr
                      key={index}
                      className="border-b bg-card text-xs 2xl:text-sm text-center border-gray-200 dark:border-slate-700"
                    >
                      <td className="py-3">{transaction.date}</td>
                      <td>{transaction.type}</td>
                      <td>{transaction.amount}</td>
                      <td>{transaction.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => setView("billing")}
              className="text-gray-500 hover:text-gray-700"
            >
              <Image
                src={"/images/back.svg"}
                alt="Back"
                width={30}
                height={30}
                className=" dark:invert"
              />
            </button>
            <div>
              <h2 className="text-2xl font-semibold">Add payment card</h2>
              <p className="text-primary">
                Enter your card details to save it for future payments
              </p>
            </div>
          </div>

          <form onSubmit={handleAddCard} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Card number
              </label>
              <input
                type="text"
                name="cardNumber"
                value={newCard.cardNumber}
                onChange={handleInputChange}
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-[10px] focus:ring-orange-500 focus:border-orange-500"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Expiry Date
                </label>
                <input
                  type="text"
                  name="expiryDate"
                  value={newCard.expiryDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-[10px] focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={newCard.cvv}
                  onChange={handleInputChange}
                  placeholder="123"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-[10px] focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Cardholder name
              </label>
              <input
                type="text"
                name="cardholderName"
                value={newCard.cardholderName}
                onChange={handleInputChange}
                placeholder="Enter name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-[10px] focus:ring-orange-500 focus:border-orange-500"
                required
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full px-6 py-3 gradient-bg text-black font-medium rounded-[20px] hover:bg-orange-700 transition-colors"
              >
                Add card
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
