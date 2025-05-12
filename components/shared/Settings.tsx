"use client";

import Billing from "@/components/shared/billing";
import Image from "next/image";
import { useState } from "react";
import Withdraw from "@/components/shared/Withdraw";
import Policies from "@/components/shared/Policies";
import ReferAndEarn from "@/components/shared/ReferAndEarn";
import TwoFA from "@/components/shared/TwoFA";
import PersonalInfo from "./PersonalInfo";
import PasswordUpate from "./PasswordUpdate";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function Settings() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Personal Info");
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
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [isDirty, setIsDirty] = useState(false);
  const [isPasswordDirty, setIsPasswordDirty] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const menuItems = [
    {
      name: "Personal Info",
      img: "/images/personal.svg",
    },
    {
      name: "Password",
      img: "/images/password.svg",
    },
    {
      name: "Billing",
      img: "/images/billing.svg",
    },
    {
      name: "2-Factor Authentication",
      img: "/images/2fa.svg",
    },
    {
      name: "FAQ",
      img: "/images/faq.svg",
    },
    {
      name: "How to play",
      img: "/images/howtoplay.svg",
    },
    {
      name: "Refer & Earn",
      img: "/images/refer.svg",
    },
    {
      name: "Request Withdrawal",
      img: "/images/withdrawl.svg",
    },
    {
      name: "Verify My ID",
      img: "/images/verify.svg",
    },
    {
      name: "Policies, Rules and Agreements",
      img: "/images/policies.svg",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setIsDirty(true);
  };

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
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Save logic would go here
    setIsDirty(false);
    alert("Changes saved successfully!");
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

  const signOutUser = async () => {
    await signOut({
      redirect: false,
      callbackUrl: "/login",
    });
    toast.success("Signed out successfully!");
    router.refresh();
    router.replace("/login");
  };

  return (
    <div className="max-w-6xl bg-card-foreground mt-6 mb-12 rounded-[24px] mx-auto p-4 md:p-6">
      <h1 className="text-3xl font-anton mb-6">SETTINGS</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Menu */}
        <div className="md:w-64 xl:w-96 flex-shrink-0">
          <ul className="space-y-2 pr-0 md:pr-6 pb-4 md:pb-0">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  className={`w-full text-left text-primary px-4 py-3 flex border items-center border-[#1212121A] dark:border-slate-700 justify-between rounded-full transition-colors ${
                    activeTab === item.name
                      ? "font-medium bg-card"
                      : "hover:bg-gray-100 dark:hover:bg-slate-800"
                  }`}
                  onClick={() => setActiveTab(item.name)}
                >
                  <span className="inline-flex items-center gap-2">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={24}
                      height={24}
                      className="w-7 2xl:w-9 h-7 2xl:h-9"
                    />
                    {item.name}
                  </span>
                  <Image
                    src={"/images/back.svg"}
                    alt={item.name}
                    width={30}
                    height={30}
                    className="ml-2 rotate-180 dark:invert"
                  />
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={signOutUser}
                className={`w-full text-left text-primary px-4 py-3 flex border items-center border-[#1212121A] dark:border-slate-700 justify-between rounded-full transition-colors 
                                  font-medium bg-card`}
              >
                <span className="inline-flex items-center gap-2">
                  <Image
                    src="/images/logout.svg"
                    alt={"Settings"}
                    width={24}
                    height={24}
                    className="w-7 2xl:w-9 h-7 2xl:h-9"
                  />
                  Logout
                </span>
                <Image
                  src={"/images/back.svg"}
                  alt={"Settings"}
                  width={30}
                  height={30}
                  className="ml-2 rotate-180 dark:invert"
                />
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {activeTab === "Personal Info" && <PersonalInfo />}

          {activeTab === "Password" && <PasswordUpate />}

          {activeTab === "Billing" && <Billing />}
          {activeTab === "Request Withdrawal" && <Withdraw />}

          {activeTab === "Policies, Rules and Agreements" && <Policies />}

          {activeTab === "Refer & Earn" && <ReferAndEarn />}

          {activeTab === "2-Factor Authentication" && <TwoFA />}

          {/* Placeholder for other tabs */}

          {/* Other tabs would be rendered here */}
          {activeTab !== "Personal Info" &&
            activeTab !== "Password" &&
            activeTab !== "Policies, Rules and Agreements" &&
            activeTab !== "Request Withdrawal" &&
            activeTab !== "Refer & Earn" &&
            activeTab !== "2-Factor Authentication" &&
            activeTab !== "Billing" && (
              <div className="flex items-center justify-center h-64 text-gray-500">
                <p>{activeTab} content will be displayed here</p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
