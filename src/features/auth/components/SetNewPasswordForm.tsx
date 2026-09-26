"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { setNewPasswordSchema, SetNewPasswordFormValues } from "../auth.schema";
import { AuthLogo } from "./AuthLogo";

export const SetNewPasswordForm: React.FC = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SetNewPasswordFormValues>({
    resolver: zodResolver(setNewPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: SetNewPasswordFormValues) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      if (data.password) {
        toast.success("Password updated successfully! You can now sign in.");
      }
      router.push("/sign-in");
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Failed to set new password";
      toast.error(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[420px] mx-auto px-4 py-8 flex flex-col items-center">
      {/* Brand Logo */}
      <div className="mb-6 flex justify-center">
        <AuthLogo />
      </div>

      {/* Heading */}
      <div className="text-center mb-7">
        <h1 className="font-space-grotesk font-bold text-2xl sm:text-3xl text-[#1a1a1a] tracking-tight">
          Set New Password
        </h1>
        <p className="text-xs sm:text-sm text-[#737373] mt-2 max-w-[320px] mx-auto leading-relaxed">
          Create a new password to secure your account.
        </p>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
          {/* New Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative flex items-center">
                    <Lock className="absolute left-4 w-4 h-4 text-[#8e8d8d] pointer-events-none" />
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your new password"
                      className="w-full rounded-full border border-[#ded8cf] bg-[#efe9e0]/60 hover:bg-[#efe9e0]/90 focus-visible:bg-[#efe9e0] pl-11 pr-11 py-2.5 h-11 text-sm text-[#1a1a1a] placeholder:text-[#9c9a96] focus-visible:ring-1 focus-visible:ring-[#163935] focus-visible:border-[#163935] transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 text-[#8e8d8d] hover:text-[#1a1a1a] focus:outline-hidden transition-colors"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage className="text-xs text-red-600 pl-3" />
              </FormItem>
            )}
          />

          {/* Confirm Password Field */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative flex items-center">
                    <Lock className="absolute left-4 w-4 h-4 text-[#8e8d8d] pointer-events-none" />
                    <Input
                      {...field}
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Re-enter your new password"
                      className="w-full rounded-full border border-[#ded8cf] bg-[#efe9e0]/60 hover:bg-[#efe9e0]/90 focus-visible:bg-[#efe9e0] pl-11 pr-11 py-2.5 h-11 text-sm text-[#1a1a1a] placeholder:text-[#9c9a96] focus-visible:ring-1 focus-visible:ring-[#163935] focus-visible:border-[#163935] transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 text-[#8e8d8d] hover:text-[#1a1a1a] focus:outline-hidden transition-colors"
                      aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </FormControl>
                <FormMessage className="text-xs text-red-600 pl-3" />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-full bg-[#183935] hover:bg-[#122c29] text-[#f4efe9] font-medium h-11 text-sm shadow-xs transition-colors cursor-pointer"
            >
              {isLoading ? (
                <>
                  <Spinner className="w-4 h-4 text-[#f4efe9]" />
                  <span>Updating password...</span>
                </>
              ) : (
                "Continue"
              )}
            </Button>
          </div>

          {/* Back to Login Link */}
          <div className="pt-4 text-center">
            <Link
              href="/sign-in"
              className="text-xs sm:text-sm font-medium text-[#163935] hover:text-[#0b1e1b] transition-colors"
            >
              Back to Login
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};
