"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    console.log({ email, password, rememberMe });
  };

  return (
    <>
      <div
        className="min-h-screen    flex flex-col md:flex-row justify-center md:gap-20 items-center  sm:px-6 lg:px-8"
        style={{
          backgroundImage: "url('/images/bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" mt-auto md:-mt-24 flex relative items-center -mb-12 md:mb-0  ">
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
        <div className="  md:h-fit z-10 w-full sm:max-w-lg rounded-tr-[20px] rounded-tl-[20px] md:rounded-br-[20px] md:rounded-bl-[20px] bg-background  ">
          <div className=" py-8 md:py-10 px-4 shadow sm:rounded-lg sm:px-8">
            <h2 className="text-lg text-primary  font-semibold mb-2">
              Welcome
            </h2>

            <p className="text-sm mb-8">
              The Ultimate Playground for Sports Fans.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium "
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-3 border border-gray-300 dark:border-[#FFFFFF1A] dark:bg-[#16172C] rounded-[10px] text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    placeholder="Enter email"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-1 text-sm font-medium "
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-3 border border-gray-300 dark:border-[#FFFFFF1A] dark:bg-[#16172C] rounded-[10px] text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500  border-gray-300 dark:border-orange-400 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block  text-sm text-primary"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link href="/reset-password" className="font-medium ">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full  flex justify-center py-4 px-4 border border-transparent rounded-full text-sm font-medium text-black gradient-bg  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Log In
                </button>
              </div>
            </form>

            <div className="mt-2">
              <Link href="/signup">
                <button className="w-full flex justify-center py-4 px-4 border border-transparent rounded-full text-sm font-medium text-primary bg-[#1212121A] dark:bg-[#FFFFFF1A]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                  Create Account
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
