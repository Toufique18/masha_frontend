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
import { Mail } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { forgotPasswordSchema, ForgotPasswordFormValues } from "../auth.schema";
import { AuthLogo } from "./AuthLogo";

export const ForgotPasswordForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "ayeshahabib@gmail.com",
    },
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitted(true);
      toast.success(`Reset link sent to ${data.email}! Please check your inbox.`);
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Failed to send reset link";
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
          Forgot Password?
        </h1>
        <p className="text-xs sm:text-sm text-[#737373] mt-2 max-w-[340px] mx-auto leading-relaxed">
          Enter the email address associated with your account. We&apos;ll send you a link to reset your password.
        </p>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative flex items-center">
                    <Mail className="absolute left-4 w-4 h-4 text-[#8e8d8d] pointer-events-none" />
                    <Input
                      {...field}
                      type="email"
                      placeholder="ayeshahabib@gmail.com"
                      className="w-full rounded-full border border-[#ded8cf] bg-[#efe9e0]/60 hover:bg-[#efe9e0]/90 focus-visible:bg-[#efe9e0] pl-11 pr-4 py-2.5 h-11 text-sm text-[#1a1a1a] placeholder:text-[#9c9a96] focus-visible:ring-1 focus-visible:ring-[#163935] focus-visible:border-[#163935] transition-all"
                    />
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
                  <span>Sending link...</span>
                </>
              ) : isSubmitted ? (
                "Resend Reset Link"
              ) : (
                "Send Reset Link"
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
