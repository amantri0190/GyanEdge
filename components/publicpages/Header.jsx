"use client";
import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  return (
    <div>
      <nav className="fixed w-full lg:px-24 top-0 z-120 p-3 backdrop-blur-lg bg-black/20">
        <div className="flex items-center justify-between px-4 my-2">
          {/* Logo */}
          <div className="font-bold text-2xl text-white flex items-center gap-2">
            GyanEdge
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-10 xl:text-base text-sm font-medium text-white ml-4 cursor-pointer">
            <Link href="/">Home</Link>
            <span className="flex items-center">Courses</span>
            <span>About</span>
            <span>Contact Us</span>
          </div>
          {/* Buttons */}
          <div className="hidden md:flex gap-3">
            <div className="bg-white text-purple-800 rounded-full p-2 px-4 font-medium cursor-pointer text-sm flex items-center justify-center">
              Create Account
            </div>
            <Link
              href="/login"
              className="rounded-full text-white border-white border-2 p-2 px-4 font-medium cursor-pointer text-sm transform transition-transform duration-200 hover:scale-105">
              Log In
            </Link>
          </div>
          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            {menuOpen ? (
              <X
                className="text-white cursor-pointer"
                size={28}
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <Menu
                className="text-white cursor-pointer"
                size={28}
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>
        {/* Mobile Menu */}
      </nav>
      {menuOpen && (
        <div className="md:hidden fixed backdrop-blur-lg bg-black/20 px-6 py-4 text-white space-y-4 text-sm font-medium z-50 left-1/2 -translate-x-1/2 w-full top-13">
          <div>Home</div>
          <div className="flex items-center">
            Courses <ChevronDown className="size-4 ml-1" />
          </div>
          <div className="flex items-center">
            Resources <ChevronDown className="size-4 ml-1" />
          </div>
          <div>About</div>
          <div className="flex flex-col gap-3 pt-4 border-t border-white/20 mt-4">
            <div className="bg-white text-purple-800 rounded-full p-2 text-center font-medium cursor-pointer text-sm">
              Create Account
            </div>
            <div className="rounded-full text-white border-white border-2 p-2 text-center font-medium cursor-pointer text-sm">
              Log In
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
