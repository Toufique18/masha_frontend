export interface IAuth {
  id: string;
  email?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  profileImage?: string;
  hasActiveSubscription?: boolean;
  token?: string;
  role?: string;
}

export interface ISignInPayload {
  email: string;
  password?: string;
}

export interface IForgotPasswordPayload {
  email: string;
}

export interface IResetPasswordPayload {
  password: string;
  token?: string;
}

export interface IAuthState {
  user: IAuth | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  email?: string;
  currentStep: number;
}
