import React from "react";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";

const poppins = Poppins({
  weight: ["700"],
  subsets: ["latin"],
});

const Page1 = () => {
  return (
    <div>
      <div className="ml-20">
        <div>
          <p className={`text-5xl text-white mt-52 ${poppins.className}`}>
            GROW WITH GYAN
          </p>
          <p className={`text-4xl text-white font-bold mt-2`}>
            STAND OUT WITH EDGE
          </p>
        </div>
        <div className="text-white text-xl mt-20">
          <p>At GyanEdge, we blend wisdom with innovation</p>
          <p>to help you rise above the rest.</p>
        </div>
        <Button
          size="lg"
          className="mt-20 h-20 rounded-full font-normal text-lg bg-white text-black hover:bg-white cursor-pointer">
          Explore Courses
        </Button>
      </div>
      <div className="bg-white w-32 h-32 absolute -top-10 right-70 rounded-4xl">
        <p className="font-bold text-4xl text-purple-800 flex items-center justify-center mt-10">
          1.2k+
        </p>
        <p className="text-center">Courses</p>
      </div>
      <div className="bg-white w-32 h-32 absolute -top-10 right-150 rounded-4xl">
        <p className="font-bold text-4xl text-purple-800 flex items-center justify-center mt-10">
          10M
        </p>
        <p className="text-center">Users</p>
      </div>
      <div className="bg-white w-25 h-25 absolute top-70 right-40 rounded-4xl">
        <p className="font-bold text-2xl text-purple-800 flex items-center justify-center mt-5">
          115
        </p>
        <p className="text-center">Countries</p>
      </div>
      <div className="bg-white w-25 h-25 absolute top-70 right-185 rounded-4xl">
        <p className="font-bold text-2xl text-purple-800 flex items-center justify-center mt-5">
          10K+
        </p>
        <p className="text-center">Courses</p>
      </div>
      <img
        src="girls.png"
        alt="Girl in a jacket"
        width="600"
        height="700"
        className="absolute -top-20 right-50"></img>
    </div>
  );
};

export default Page1;
