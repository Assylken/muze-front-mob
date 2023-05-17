import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../http";

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  credentials: "include",
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["Songs", "Users", "Genre", "Country", "Playlist"],
  baseQuery: baseQuery,

  endpoints: () => ({}),
});
