import React from "react";
import { Poppins } from "next/font/google";
import { Button } from "../ui/button";

const poppins = Poppins({
  weight: ["800"],
  subsets: ["latin"],
});

const Hero = ({ onScrollClick }) => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{ backgroundImage: `url('/bgimage.png')` }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-9 py-20 md:py-32 lg:py-48 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left -mt-24 lg:-mt-60">
          <div>
            <p
              className={`text-4xl sm:text-5xl md:text-3xl lg:text-5xl text-white ${poppins.className}`}>
              GROW WITH GYAN
            </p>
            <p className="text-2xl sm:text-4xl md:text-2xl lg:text-4xl text-white font-semibold mt-4">
              STAND OUT WITH EDGE
            </p>
          </div>
          <div className="text-white text-lg lg:text-xl md:text-sm sm:text-xl mt-8 md:mt-12 hidden sm:block">
            <p>At GyanEdge, we blend wisdom with innovation</p>
            <p>to help you rise above the rest.</p>
          </div>
          <div className="mt-8 sm:mt-12">
            <Button
              onClick={onScrollClick}
              size="lg"
              className="h-14 sm:h-16 md:h-14 lg:h-20 px-6 md:px-4 lg:px-8 sm:px-8 rounded-full font-medium text-base lg:text-lg md:text-sm sm:text-lg bg-white text-black hover:bg-gray-100 shadow-2xl cursor-pointer">
              Explore Courses
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          <div className="bg-white lg:w-44 lg:h-24 w-28 h-14 flex flex-col justify-center rounded-4xl absolute md:mr-56 lg:mr-72 lg:-mt-4 mt-2 mr-32">
            <p className="font-bold lg:text-4xl text-lg text-purple-800 flex items-center justify-center">
              1.2k+
            </p>
            <p className="text-center text-sm">Courses</p>
          </div>
          <div className="bg-white lg:w-44 lg:h-20 w-24 h-12 flex flex-col justify-center rounded-4xl absolute lg:mr-96 md:mr-72 mr-54 lg:mt-28 mt-20">
            <p className="font-bold lg:text-2xl text-base text-purple-800 flex items-center justify-center">
              100Hr+
            </p>
            <p className="text-center text-xs">Live Classes</p>
          </div>
          <img
            src="/work.png"
            alt="Hero Graphic"
            className="w-96 lg:w-[500px] xl:w-[600px] h-auto object-contain mb-10 -mr-8 md:mr-20 sm:mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
