import { baseApi } from "@/redux/api/baseApi";
import { ApiResponse } from "@/types/api";
import { IAuth } from "./auth.interface";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAuths: builder.query<ApiResponse<IAuth[]>, void>({
      query: () => "/auth",
      providesTags: ["auth"],
    }),
    getAuthById: builder.query<ApiResponse<IAuth>, string>({
      query: (id) => `/auth/${id}`,
      providesTags: ["auth"],
    }),
    createAuth: builder.mutation<IAuth, Partial<IAuth>>({
      query: (body) => ({ url: "/auth", method: "POST", body }),
      invalidatesTags: ["auth"],
    }),
    updateAuth: builder.mutation<IAuth, Partial<IAuth> & { id: string }>(
      {
        query: ({ id, ...body }) => ({
          url: `/auth/${id}`,
          method: "PUT",
          body,
        }),
        invalidatesTags: ["auth"],
      }
    ),
    deleteAuth: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({ url: `/auth/${id}`, method: "DELETE" }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const {
  useGetAuthsQuery,
  useGetAuthByIdQuery,
  useCreateAuthMutation,
  useUpdateAuthMutation,
  useDeleteAuthMutation,
} = authApi;
