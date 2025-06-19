"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
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
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const forgotPasswordFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});
const poppins = Poppins({
  weight: ["600"],
  subsets: ["latin"],
});
const Page = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [linkSent, setLinkSent] = useState(false);
  const forgotPasswordForm = useForm({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values) {
    console.log(values);
    setIsLogin(true);
    try {
      const res = await fetch("/api/forgotpassword", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (res.ok) {
        setLinkSent(true);
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Forgot password error:", error);
      alert("Something went wrong");
    } finally {
      setIsLogin(false);
    }
  }

  return (
    <div>
      {linkSent ? (
        <SuccessCard />
      ) : (
        <ForgotPasswordForm
          form={forgotPasswordForm}
          onSubmit={onSubmit}
          isLogin={isLogin}
        />
      )}
    </div>
  );
};

export default Page;

const SuccessCard = () => (
  <Card className="w-full max-w-md bg-white">
    <CardContent className="pt-6">
      <div className="flex items-center justify-center mb-2">
        <Image
          src="/success.png"
          width={100}
          height={100}
          alt="success image"
        />
      </div>
      <p className="mb-8 text-xl text-center font-bold">
        Link Sent Successfully
      </p>
      <p className="text-sm font-normal mb-6">
        Check your email for a link to reset your password. If it doesnt appear
        within a few minutes, check your spam folder.
      </p>
      <Link href="/login">
        <Button
          type="submit"
          className="w-full bg-blue text-lg bg-black text-white">
          Return To Login
        </Button>
      </Link>
    </CardContent>
  </Card>
);

const ForgotPasswordForm = ({ form, onSubmit, isLogin }) => (
  <Card className="w-[500] border-gray-100 shadow-xl p-0 bg-white">
    <CardContent className="pt-10">
      <p
        className={`mb-12 text-3xl text-center font-bold ${poppins.className}`}>
        Forgot Your Password ?
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">
                  Email <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Email ID . . ."
                    className="h-10 text-lg text-gray-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-xs font-semibold" />
              </FormItem>
            )}
          />
          <div className="mb-10 mt-2 flex justify-between">
            <Link
              href="/auth/login"
              className="hover:underline cursor-pointer text-sm text-gray-400">
              Return Login?
            </Link>
          </div>
          <LoadingButton
            isLoading={isLogin}
            label="Submit"
            loadingLabel="Submit"
            className="bg-blue cursor-pointer w-full text-lg bg-purple-950 hover:bg-purple-900 text-white"
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
);
