import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../http";
import { authHeader } from "./auth-header";
const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  credentials: "include",
  prepareHeaders: async (headers, { getState }) => {
    const token = await authHeader();
    if (token) {
      headers.set("Authorization", token.Authorization);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["Songs", "Users", "Genre", "Country", "Playlist"],
  baseQuery: baseQuery,

  endpoints: () => ({}),
});
