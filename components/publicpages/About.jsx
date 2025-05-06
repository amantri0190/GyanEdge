"use client";
import React, { useEffect, useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["800"],
  subsets: ["latin"],
});

const About = () => {
  const [timeLeft, setTimeLeft] = useState(30);
  const radius = 18;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (timeLeft === 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const progress = ((30 - timeLeft) / 30) * circumference;

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
        WHY US ?
      </h1>
      <div className="flex flex-col lg:flex-row md:mt-20 mt-10 w-full gap-10">
        {/* Video Card Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="w-full max-w-sm bg-gray-700 rounded-md p-2 pb-6">
            <div className="rounded-md overflow-hidden">
              <video
                className="w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-md"
                controls
                autoPlay
                loop
                muted>
                <source src="/path/to/your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="mt-4 flex items-center justify-between text-white px-2">
                <div>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold">
                    XYZ
                  </p>
                  <p className="text-sm font-light">
                    Co-Founder of GyanEdge | Developer
                  </p>
                </div>
                <div className="relative w-[50px] h-[50px]">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="25"
                      cy="25"
                      r={radius}
                      stroke="#ffffff33"
                      strokeWidth="4"
                      fill="none"
                    />
                    <circle
                      cx="25"
                      cy="25"
                      r={radius}
                      stroke="#ffffff"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference - progress}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">
                    {timeLeft}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div
          className={`w-full lg:w-1/2 text-gray-700 mt-5 lg:mt-28 space-y-6 text-xl sm:text-2xl md:text-3xl font-bold ${poppins.className}`}>
          <p>Earn While You Learn</p>
          <p>Work on Real-World Projects</p>
          <p>Live Mentorship from MAANG Experts</p>
          <p>Get Certified for Your Work</p>
        </div>
      </div>
    </div>
  );
};

export default About;
