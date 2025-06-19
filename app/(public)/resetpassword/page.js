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
import { Eye, EyeOff } from "lucide-react";
import { useSearchParams } from "next/navigation";

const resetPasswordFormSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
const poppins = Poppins({
  weight: ["600"],
  subsets: ["latin"],
});
const Page = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [linkSent, setLinkSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const resetPasswordForm = useForm({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values) {
    const { password } = values;
    const res = await fetch("/api/resetpassword", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password, token }),
    });

    const data = await res.json();
    console.log(data);
  }

  return (
    <div>
      <div className="w-full h-screen flex flex-col items-center justify-center p-4 bg-blue-100">
        {linkSent ? (
          <SuccessCard />
        ) : (
          <ResetPasswordForm
            form={resetPasswordForm}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            onSubmit={onSubmit}
            isLogin={isLogin}
          />
        )}
      </div>
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
        Password Reset Successfully
      </p>
      <p className="text-sm font-normal mb-6">
        Go to the login page , and try to login with the newly created
        credential. If facing any probleum , feel free to connect with us at
        support@gyanedge.in .
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

const ResetPasswordForm = ({
  form,
  onSubmit,
  isLogin,
  showPassword,
  setShowPassword,
}) => (
  <Card className="w-full max-w-md border-gray-100 shadow-xl p-0 bg-white">
    <CardContent className="pt-10">
      <p
        className={`mb-12 text-3xl text-center font-bold ${poppins.className}`}>
        Reset Password !
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">
                  Password <span className="text-red">*</span>
                </FormLabel>
                <FormControl>
                  <div className="relative mb-4">
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">
                  Confirm Password <span className="text-red">*</span>
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
          <LoadingButton
            isLoading={isLogin}
            label="Submit"
            loadingLabel="Submit"
            className="bg-blue w-full text-lg bg-black text-white mt-4"
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
