"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  async function handleClick() {
    const res = await fetch("/api/logout", {
      method: "POST",
      credentials: "include",
    });
    if (res.ok) {
      alert("Logged out!");
      window.location.href="/auth/login";
    }
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-center">Welcome to the student dashboard</p>
      <Button onClick={handleClick} className="bg-black text-white">
        Logout
      </Button>
    </div>
  );
};

export default page;
