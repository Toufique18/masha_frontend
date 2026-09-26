import { ForgotPasswordForm } from "@/features/auth/components/ForgotPasswordForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | AI Trading",
  description: "Reset your password for AI powered trading management software",
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}
