import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export type SignInFormValues = z.infer<typeof signInSchema>;

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
});

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export const emailSchema = forgotPasswordSchema;
export type EmailFormValues = ForgotPasswordFormValues;

export const otpSchema = z.object({
  otp: z.string().min(1, { message: "Please enter verification code" }),
});

export type OtpFormValues = z.infer<typeof otpSchema>;

export const setNewPasswordSchema = z
  .object({
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Please confirm your password" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SetNewPasswordFormValues = z.infer<typeof setNewPasswordSchema>;

export const AuthSchema = signInSchema;
export type AuthSchemaType = SignInFormValues;
