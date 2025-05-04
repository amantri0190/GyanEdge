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
    <div>
      <h1 className="text-5xl font-bold text-center">WHY US ?</h1>
      <div className="flex mt-20 w-full">
        <div className="w-1/2 flex items-center justify-center p-10">
          <div className="w-[350px] h-[450px] bg-gray-700 rounded-md p-2 pb-20">
            <div className="rounded-md overflow-hidden">
              <video
                className="w-full h-[350px] object-cover rounded-md"
                controls
                autoPlay
                loop
                muted>
                <source src="/path/to/your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="mt-4 flex items-center justify-between text-white px-2">
                <div>
                  <p className="text-2xl font-bold">Aman Tripathi</p>
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
        <div
          className={`w-1/2 text-gray-500 mt-28 space-y-10 text-3xl font-bold ${poppins.className}`}>
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
