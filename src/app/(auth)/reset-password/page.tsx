import { SetNewPasswordForm } from "@/features/auth/components/SetNewPasswordForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Set New Password | AI Trading",
  description: "Create a new password to secure your account",
};

export default function ResetPasswordPage() {
  return <SetNewPasswordForm />;
}
