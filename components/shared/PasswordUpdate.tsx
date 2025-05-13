"use client";

import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";

interface PasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const PasswordUpdate = () => {
  const { data: session } = useSession();
  const [passwordData, setPasswordData] = useState<PasswordData>({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [isPasswordDirty, setIsPasswordDirty] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  const validatePassword = (password: string): string | null => {
    if (password.length < 8) {
      return "Password must be at least 8 characters";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number";
    }
    if (!/[!@#$%^&*]/.test(password)) {
      return "Password must contain at least one special character";
    }
    return null;
  };

  const handlePasswordSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate passwords match
      if (passwordData.newPassword !== passwordData.confirmPassword) {
        throw new Error("New passwords don't match");
      }

      // Validate password strength
      const passwordValidationError = validatePassword(
        passwordData.newPassword
      );
      if (passwordValidationError) {
        throw new Error(passwordValidationError);
      }

      // Call API to update password
      const response = await fetch("/api/user/password", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update password");
      }

      // Success
      toast.success("Password updated successfully!");
      setIsPasswordDirty(false);
      setPasswordError("");
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error: any) {
      console.log("Error updating password:", error);
      setPasswordError(error.message);
      toast.error(error.message || "Failed to update password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-card p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-2">Update Password</h2>
      <p className="text-primary mb-6">Change your account password here.</p>

      <form onSubmit={handlePasswordSave} className="space-y-4 w-full">
        <div>
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
            disabled={isLoading}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
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
              disabled={isLoading}
            />
          </div>

          <div>
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
              disabled={isLoading}
            />
          </div>
        </div>

        <div className="text-xs text-gray-500 dark:text-gray-400">
          Password requirements:
          <ul className="list-disc pl-5 mt-1">
            <li>Minimum 8 characters</li>
            <li>At least one uppercase letter</li>
            <li>At least one number</li>
            <li>At least one special character (!@#$%^&*)</li>
          </ul>
        </div>

        {passwordError && (
          <div className="text-red-500 text-sm">{passwordError}</div>
        )}

        <div className="pt-2">
          <button
            type="submit"
            disabled={!isPasswordDirty || isLoading}
            className={`px-6 py-3.5 w-full rounded-full font-medium text-black text-sm ${
              isPasswordDirty && !isLoading
                ? "gradient-bg"
                : "bg-gray-400 dark:bg-background dark:text-gray-600 cursor-not-allowed"
            } transition-colors`}
          >
            {isLoading ? "Updating..." : "Update Password"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasswordUpdate;
