"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import axios from "axios";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
export default function Login() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const id = params?.id as string;
  const token = searchParams.get("token") as string;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.patch(
        `/api/auth/reset-password/${id}?token=${token}`,
        {
          password: password,
          confirmPassword: confirmPassword,
          id,
          token,
        }
      );

      if (response.status === 200) {
        toast.success("Password reset successfully");
        router.push("/login");
      }
    } catch (error: any) {
      console.log("Error resetting password:", error.response);
      toast.error("An error occurred during the password reset");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row justify-center md:gap-20 items-center sm:px-6 lg:px-8 bg-[url('/images/bg.webp')] bg-no-repeat bg-center bg-cover md:bg-none">
        <div className=" mt-auto md:-mt-24 flex md:hidden relative items-center -mb-12 md:mb-0  ">
          <Image
            src="/images/player1.svg"
            alt="Logo"
            width={220}
            height={200}
            className="mx-auto -mr-4 "
          />
          <Image
            src="/images/player2.svg"
            alt="Logo"
            width={200}
            height={200}
            className="mx-auto -ml-5 "
          />
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
        <div className="  md:h-fit z-10 w-full sm:max-w-lg  md:bg-card-foreground rounded-tr-[20px] rounded-tl-[20px] md:rounded-br-[20px] md:rounded-bl-[20px] bg-background  ">
          <div className=" py-8 md:py-10 px-4 shadow sm:rounded-lg sm:px-8">
            <div className="flex gap-3.5  items-center mb-8 ">
              <Link href={"/login"}>
                <Image
                  src="/images/back.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                  className=" "
                />
              </Link>
              <div>
                <h2 className="text-lg text-primary  font-semibold mb-2">
                  Reset your password
                </h2>

                <p className="text-sm ">Please enter your email here</p>
              </div>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium "
                >
                  New Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-3 border border-gray-300 dark:border-[#FFFFFF1A] dark:bg-[#16172C] rounded-[10px] text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    placeholder="Enter password"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium "
                >
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-3 border border-gray-300 dark:border-[#FFFFFF1A] dark:bg-[#16172C] rounded-[10px] text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    placeholder="Enter password"
                  />
                </div>
              </div>

              <div>
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full  disabled:opacity-50  flex justify-center py-4 px-4 border border-transparent rounded-full text-sm font-medium text-black gradient-bg  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
