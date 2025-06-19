"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["600"],
  subsets: ["latin"],
});

export default function AuthLayout({ children }) {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/login-bg.jpg')" }}>
        <div className="absolute inset-0 bg-[#2E2C2C] opacity-95" />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="flex flex-col lg:flex-row w-full max-w-screen-2xl mx-auto bg-transparent">
          {/* Left Visual Section */}
          <div className="hidden lg:flex lg:w-1/2 flex-col justify-center pl-12 xl:pl-24 2xl:pl-32">
            <div className="mt-20">
              <p
                className={`${poppins.className} text-white text-5xl xl:text-6xl leading-tight whitespace-nowrap`}>
                <span className="bg-gradient-to-r from-purple-300 to-purple-400 bg-clip-text text-transparent">
                  Grow
                </span>{" "}
                With Gyaan
              </p>
              <p className="text-4xl xl:text-5xl font-normal text-white mt-6">
                Stand Out With Edge
              </p>
              <p className="text-lg xl:text-2xl mt-10 xl:mt-20 max-w-md font-extralight text-white tracking-wide">
                We don’t follow trends, we launch them using your edge and our
                innovation!
              </p>
            </div>
            <div className="h-72 xl:h-96 mt-10 pr-4 xl:pr-10 w-[400px] xl:w-[600px]">
              <DotLottieReact
                src="https://lottie.host/0fca32dd-bb35-43dc-b80d-7aa31191200d/zEyKFvn6ou.lottie"
                loop
                autoplay
              />
            </div>
          </div>

          {/* Right Auth Form Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center py-10 sm:py-20 px-4 sm:px-8">
            {children}
            <p className="font-normal text-xs sm:text-sm text-white mt-6 text-center">
              &copy; 2025{" "}
              <span className="font-bold">GyanEdge Private Limited</span>. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
