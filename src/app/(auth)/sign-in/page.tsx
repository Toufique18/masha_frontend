import { SignInForm } from "@/features/auth/components/SignInForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to AI Trading | Sign In",
  description: "Sign in to AI powered trading management software",
};

export default function SignInPage() {
  return <SignInForm />;
}
