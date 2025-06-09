"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { EyeOff, Eye } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import LoadingButton from "@/components/elements/LoadingButton";
import { z } from "zod";
import { Poppins } from "next/font/google";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { parse } from "../../../node_modules/zod/dist/esm/v4/classic/parse";

const loginFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});
const poppins = Poppins({
  weight: ["600"],
  subsets: ["latin"],
});
const Page = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const form = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values) {
    setIsLogin(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      if (res.status === 200 && data.result) {
        if (data.role === "admin") {
          router.push("/dashboard/admin");
        } else if (data.role === "student") {
          router.push("/dashboard/student");
        } else {
          alert("Unknown role. Contact support.");
        }
      } else {
        alert(data.message || "Login Failed");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error("Login error:", error);
    } finally {
      setIsLogin(false);
    }
  }

  return (
    <div className="flex">
      <div className="w-1/2 hidden lg:block">
        <Image
          src="/loginimage.jpg"
          alt="Image 1"
          width={900}
          height={900}
          className="object-fill h-[778px]"
        />
      </div>
      <div className="lg:w-1/2 w-full h-screen flex flex-col items-center justify-center p-4 bg-blue-100">
        <Card className="w-full max-w-md border-gray-100 shadow-xl p-0 bg-white">
          <CardContent className="pt-10">
            <p
              className={`mb-12 text-3xl text-center font-bold ${poppins.className}`}>
              Welcome To GyanEdge
            </p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">
                        Email <span className="text-red">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Email ID . . ."
                          className="h-10 text-lg text-gray-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="mt-6">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm">
                          Password <span className="text-red">*</span>
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="Type here . . ."
                              className="h-10 pr-12 text-lg text-gray-500"
                              {...field}
                            />
                            <button
                              type="button"
                              className="absolute right-3 top-1/2 -translate-y-1/2"
                              onClick={() => setShowPassword(!showPassword)}
                              aria-label={
                                showPassword ? "Hide password" : "Show password"
                              }>
                              {showPassword ? (
                                <Eye className="h-5 w-5" />
                              ) : (
                                <EyeOff className="h-5 w-5" />
                              )}
                            </button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="mb-10 mt-2 flex justify-between">
                  <Link
                    href="/forgotpassword"
                    className="hover:underline cursor-pointer text-sm text-gray-400">
                    Forgot Password?
                  </Link>
                </div>
                <LoadingButton
                  isLoading={isLogin}
                  label="Submit"
                  loadingLabel="Submit"
                  className="bg-blue w-full text-lg bg-black text-white"
                />
                <div className="flex items-center justify-center text-xs mt-2 gap-1 mb-20">
                  <span className="text-gray-800 font-normal">New User?</span>
                  <div
                    to="/auth/signup"
                    className="text-blue hover:underline font-semibold">
                    Request Account
                  </div>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Page;
