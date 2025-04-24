"use client";
import React, { useState } from "react";

const PasswordUpate = () => {
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [isPasswordDirty, setIsPasswordDirty] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setIsPasswordDirty(true);

    // Clear error when user starts typing
    if (passwordError) {
      setPasswordError("");
    }
  };

  const handlePasswordSave = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate passwords match
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError("New passwords don't match");
      return;
    }

    // Validate password strength (optional)
    if (passwordData.newPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return;
    }

    // Password change logic would go here
    setIsPasswordDirty(false);
    setPasswordError("");
    alert("Password updated successfully!");

    // Clear form
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };
  return (
    <div className="bg-card p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-2">Update Password</h2>
      <p className="text-primary mb-6">Change your account password here.</p>

      <form
        onSubmit={handlePasswordSave}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
      >
        <div className=" col-span-1 ">
          <label
            htmlFor="currentPassword"
            className="block text-sm font-medium mb-1"
          >
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            value={passwordData.currentPassword}
            onChange={handlePasswordChange}
            placeholder="Enter current password"
            className="w-full text-sm px-4 py-2 2xl:py-3 border border-gray-300 dark:border-slate-700 rounded-[10px] focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>

        <div className=" col-span-1 ">
          <label
            htmlFor="newPassword"
            className="block text-sm font-medium mb-1"
          >
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={passwordData.newPassword}
            onChange={handlePasswordChange}
            placeholder="Enter new password"
            className="w-full text-sm px-4 py-2 2xl:py-3 border border-gray-300 dark:border-slate-700 rounded-[10px] focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>

        {/* <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium mb-1"
                  >
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                    placeholder="Confirm new password"
                    className="w-full text-sm px-4 py-2 2xl:py-3 border border-gray-300 dark:border-slate-700 rounded-[10px] focus:ring-orange-500 focus:border-orange-500"
                    required
                  />
                </div> */}

        {passwordError && (
          <div className="text-red-500 text-sm">{passwordError}</div>
        )}

        <div className="pt-2 col-span-2 ">
          <button
            type="submit"
            disabled={!isPasswordDirty}
            className={`px-6 py-3.5 w-full rounded-full font-medium text-black text-sm ${
              isPasswordDirty
                ? "gradient-bg"
                : "bg-gray-400 dark:bg-background dark:text-gray-600 cursor-not-allowed"
            } transition-colors`}
          >
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasswordUpate;
