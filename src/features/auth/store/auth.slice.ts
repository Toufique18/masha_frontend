import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuth, IAuthState } from "../auth.interface";

const initialState: IAuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  email: undefined,
  currentStep: 0,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IAuth | null>) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    nextStep: (state) => {
      state.currentStep = (state.currentStep || 0) + 1;
    },
    prevStep: (state) => {
      state.currentStep = Math.max(0, (state.currentStep || 0) - 1);
    },
    goToStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.email = undefined;
      state.currentStep = 0;
    },
  },
});

export const {
  setUser,
  setToken,
  setEmail,
  nextStep,
  prevStep,
  goToStep,
  logout,
} = authSlice.actions;
export const authReducer = authSlice.reducer;
