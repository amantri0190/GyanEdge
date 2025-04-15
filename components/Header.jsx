import { BookOpenText, ChevronDown } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <nav className="fixed left-1/2 -translate-x-1/2 top-0 z-50 mt-7 flex w-11/12 max-w-7xl flex-col items-center rounded-full p-3 backdrop-blur-lg md:rounded-full">
      <div className="w-full flex items-center justify-between px-4">
        <div className="flex items-center">
          <span className="font-bold text-xl text-white flex items-center justify-center gap-2">
            GyanEdge
          </span>
          <div className="text-white ml-20 space-x-10 text-sm font-medium flex">
            <span>Home</span>
            <span className="flex items-center">
              Courses
              <ChevronDown className="size-4 ml-1" />
            </span>
            <span className="flex items-center">
              Resources
              <ChevronDown className="size-4 ml-1" />
            </span>
            <span>About</span>
          </div>
        </div>
        <div className="gap-3 flex">
          <div className="bg-white text-purple-800 rounded-full p-2 px-4 font-medium cursor-pointer flex justify-center items-center text-sm">
            Create Account
          </div>
          <div className="rounded-full text-white border-white border-2 p-2 px-4 font-medium cursor-pointer text-sm">
            Log In
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
