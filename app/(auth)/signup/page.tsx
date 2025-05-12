"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import axios from "axios";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
export default function Signup() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    retypePassword: "",
    zipCode: "",
    acceptTerms: false,
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    if (!formData.firstname) {
      toast.error("First name is required");
      return false;
    }
    if (!formData.lastname) {
      toast.error("Last name is required");
      return false;
    }
    if (!formData.username) {
      toast.error("Username is required");
      return false;
    }
    if (!formData.email) {
      toast.error("Email is required");
      return false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast.error("Please enter a valid email");
      return false;
    }
    if (!formData.password) {
      toast.error("Password is required");
      return false;
    } else if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return false;
    }
    if (formData.password !== formData.retypePassword) {
      toast.error("Passwords do not match");
      return false;
    }
    if (!formData.zipCode) {
      toast.error("Zip code is required");
      return false;
    }
    if (!formData.acceptTerms) {
      toast.error("You must accept the terms and conditions");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        const { email, password } = formData;
        const response = await axios.post("/api/auth/signup", formData);
        if (response.status !== 200 || response.data.status !== 200) {
          throw new Error(response.data.message || "Signup failed");
        }
        // Auto-login after signup
        const logRes = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });
        console.log("Auto-login response:", logRes);
        if (!logRes?.ok || logRes?.error) {
          throw new Error(logRes?.error || "Auto-login failed");
        }
        toast.success("Account created successfully!");
        router.push("/");
      } catch (error: any) {
        console.log("Signup error:", error);
        toast.error(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row justify-center md:gap-20 items-center sm:px-6 lg:px-8 bg-[url('/images/bg.svg')] bg-no-repeat bg-center bg-cover md:bg-none">
        <div className=" mt-auto md:-mt-24 flex md:hidden relative items-center -mb-12 md:mb-0  ">
          <div className=" bg-background hidden  shadow-inner shadow-orange-400/60 absolute -bottom-2 w-full px-4 py-3 rounded-[20px] md:flex items-center justify-center">
            <Image
              src="/images/logoIcon.svg"
              alt="Logo"
              width={30}
              height={30}
              className="mx-auto "
            />
          </div>
        </div>
        <div className="md:h-fit mt-auto md:my-12  z-10 w-full  md:bg-card-foreground sm:max-w-lg rounded-tr-[20px] rounded-tl-[20px] md:rounded-br-[20px] md:rounded-bl-[20px] bg-background">
          <div className="py-8 md:py-10 px-4 shadow sm:rounded-lg sm:px-8">
            <h2 className="text-lg text-primary font-semibold mb-2">
              Create Account
            </h2>
            <p className="text-sm mb-8">
              Join the Ultimate Playground for Sports Fans.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstname"
                    className="block mb-1 text-sm font-medium"
                  >
                    First Name
                  </label>
                  <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    value={formData.firstname}
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-3 border border-gray-300 dark:border-[#FFFFFF1A] dark:bg-[#16172C] rounded-[10px] text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastname"
                    className="block mb-1 text-sm font-medium"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    value={formData.lastname}
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-3 border border-gray-300 dark:border-[#FFFFFF1A] dark:bg-[#16172C] rounded-[10px] text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium mb-1"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-3 border border-gray-300 dark:border-[#FFFFFF1A] dark:bg-[#16172C] rounded-[10px] text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  placeholder="Username"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-3 border border-gray-300 dark:border-[#FFFFFF1A] dark:bg-[#16172C] rounded-[10px] text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  placeholder="Email"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-1 text-sm font-medium"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-3 border border-gray-300 dark:border-[#FFFFFF1A] dark:bg-[#16172C] rounded-[10px] text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <label
                    htmlFor="retypePassword"
                    className="block mb-1 text-sm font-medium"
                  >
                    Retype Password
                  </label>
                  <input
                    id="retypePassword"
                    name="retypePassword"
                    type="password"
                    value={formData.retypePassword}
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-3 border border-gray-300 dark:border-[#FFFFFF1A] dark:bg-[#16172C] rounded-[10px] text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    placeholder="Retype password"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="zipCode"
                  className="block text-sm font-medium mb-1"
                >
                  Zip Code
                </label>
                <input
                  id="zipCode"
                  name="zipCode"
                  type="text"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-3 border border-gray-300 dark:border-[#FFFFFF1A] dark:bg-[#16172C] rounded-[10px] text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                  placeholder="Zip code"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="acceptTerms"
                  name="acceptTerms"
                  type="checkbox"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 dark:border-orange-400 rounded"
                />
                <label htmlFor="acceptTerms" className="ml-2 block text-xs">
                  I accept the{" "}
                  <Link href="/terms" className="underline">
                    Terms of Use
                  </Link>
                  ,{" "}
                  <Link href="/privacy" className="underline">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/rules" className="underline">
                    Sweepstakes Rules
                  </Link>{" "}
                  of PartyPicks LLC
                </label>
              </div>

              <div>
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full disabled:opacity-80 flex justify-center py-4 px-4 border border-transparent rounded-full text-sm font-medium text-black gradient-bg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  {!loading ? (
                    <span>Create Account</span>
                  ) : (
                    <Loader
                      className="animate-spin h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </div>
            </form>

            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-primary">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
