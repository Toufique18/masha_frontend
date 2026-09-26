"use client";

import { IRole } from "@/features/user/user.interface";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { toast } from "sonner";
import { IAuth } from "../auth.interface";
import { logout as logoutAction, setUser } from "../store/auth.slice";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user, token, isAuthenticated, isLoading } = useAppSelector(
    (state) => state.auth
  );

  const login = useCallback(
    async (userData: IAuth) => {
      dispatch(setUser(userData));
      toast.success("Welcome back!");
      router.push("/");
    },
    [dispatch, router]
  );

  const logout = useCallback(() => {
    dispatch(logoutAction());
    toast.info("Logged out successfully");
    router.push("/sign-in");
  }, [dispatch, router]);

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  const handleLogin = useCallback(
    async (payload: { email: string; otp?: number; password?: string }) => {
      const mockUser: IAuth = {
        id: "usr_123",
        email: payload.email,
        name: payload.email.split("@")[0],
        firstName: payload.email.split("@")[0],
        role: "user",
      };
      dispatch(setUser(mockUser));
      return { success: true, user: mockUser };
    },
    [dispatch]
  );

  const handleVerifyOtp = useCallback(
    async (payload: { email: string; otp: number }) => {
      return handleLogin(payload);
    },
    [handleLogin]
  );

  const handleSendOtp = useCallback(async ({ email }: { email: string }) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { success: true, message: `OTP sent to ${email}` };
  }, []);

  const getUserRole = useCallback((): IRole | null => {
    if (!user?.role) return null;
    return (user.role as IRole) || null;
  }, [user]);

  return {
    user,
    profile: user,
    token,
    isAuthenticated,
    isLoading,
    login,
    logout,
    handleLogout,
    handleLogin,
    handleVerifyOtp,
    handleSendOtp,
    getUserRole,
  };
};
