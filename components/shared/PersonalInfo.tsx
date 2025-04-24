"use client";
import React, { useState } from "react";

const PersonalInfo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "Contact@gmail.com",
    phoneNumber: "",
    dateOfBirth: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const [isDirty, setIsDirty] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setIsDirty(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Save logic would go here
    setIsDirty(false);
    alert("Changes saved successfully!");
  };

  return (
    <div className="bg-card p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-2">Personal Information</h2>
      <p className="text-primary mb-6">Update your personal details here.</p>

      <form
        onSubmit={handleSave}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
      >
        {/* First Name */}
        <div className="md:col-span-1">
          <label htmlFor="firstName" className="block text-sm font-medium mb-1">
            First name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Enter first name"
            className="w-full text-sm px-4 py-2 2xl:py-3 border border-gray-300 dark:border-slate-700 rounded-[10px] focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Last Name */}
        <div className="md:col-span-1">
          <label htmlFor="lastName" className="block text-sm font-medium mb-1">
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Enter last name"
            className="w-full text-sm px-4 py-2 2xl:py-3 border border-gray-300 dark:border-slate-700 rounded-[10px] focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Username - Full width on all screens */}
        <div className="md:col-span-2">
          <label htmlFor="username" className="block text-sm font-medium mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Enter username"
            className="w-full text-sm px-4 py-2 2xl:py-3 border border-gray-300 dark:border-slate-700 rounded-[10px] focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Email - Full width on all screens */}
        <div className="md:col-span-2">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled
            className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-[10px] cursor-not-allowed"
          />
        </div>

        {/* Phone Number */}
        <div className="md:col-span-1">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium mb-1"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Enter phone number"
            className="w-full text-sm px-4 py-2 2xl:py-3 border border-gray-300 dark:border-slate-700 rounded-[10px] focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Date of Birth */}
        <div className="md:col-span-1">
          <label
            htmlFor="dateOfBirth"
            className="block text-sm font-medium mb-1"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            className="w-full text-sm px-4 py-2 2xl:py-3 border border-gray-300 dark:border-slate-700 rounded-[10px] focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Address - Full width on all screens */}
        <div className="md:col-span-2">
          <label htmlFor="address" className="block text-sm font-medium mb-1">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter address"
            className="w-full text-sm px-4 py-2 2xl:py-3 border border-gray-300 dark:border-slate-700 rounded-[10px] focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* City */}
        <div className="md:col-span-1">
          <label htmlFor="city" className="block text-sm font-medium mb-1">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            placeholder="Enter city"
            className="w-full text-sm px-4 py-2 2xl:py-3 border border-gray-300 dark:border-slate-700 rounded-[10px] focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* State */}
        <div className="md:col-span-1">
          <label htmlFor="state" className="block text-sm font-medium mb-1">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            placeholder="Enter state"
            className="w-full text-sm px-4 py-2 2xl:py-3 border border-gray-300 dark:border-slate-700 rounded-[10px] focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* ZIP Code - Full width on all screens */}
        <div className="md:col-span-2">
          <label htmlFor="zip" className="block text-sm font-medium mb-1">
            ZIP Code
          </label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleInputChange}
            placeholder="Enter ZIP code"
            className="w-full text-sm px-4 py-2 2xl:py-3 border border-gray-300 dark:border-slate-700 rounded-[10px] focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Save Button - Full width on all screens */}
        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={!isDirty}
            className={`px-6 py-3.5 mt-4 rounded-full w-full font-medium text-black text-sm ${
              isDirty
                ? "gradient-bg"
                : "bg-gray-400 dark:bg-background dark:text-gray-600 cursor-not-allowed"
            } transition-colors`}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
