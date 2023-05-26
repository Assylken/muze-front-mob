import { baseApi } from "./baseApi";

export const authorizedApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSongs: builder.query({
      query: () => ({
        url: "/songs/getAll",
      }),
      providesTags: ["Songs"],
    }),
    getAllCountry: builder.query({
      query: () => ({
        url: "/country/all",
      }),
      providesTags: ["Country"],
    }),
    getAllGenre: builder.query({
      query: () => ({
        url: "/genre/all",
      }),
      providesTags: ["Genre"],
    }),
    getArtistSongsById: builder.query({
      query: () => ({
        url: "/songs/getSong",
      }),
      providesTags: ["Songs"],
    }),
    postUploadSong: builder.mutation({
      query: (body) => ({
        url: "/songs/upload-song",
        method: "POST",

        body,
      }),
      invalidatesTags: ["Songs"],
    }),
    updateProfileImage: builder.mutation({
      query: (body) => ({
        url: "/users/upload",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
    postUpdateUserInfo: builder.mutation({
      query: (body) => ({
        url: "/users/edit",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
    postProfileImage: builder.mutation({
      query: (body) => ({
        url: "/users/upload",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
    getCountryById: builder.query({
      query: (id) => ({
        url: `/country/getCountry/${id}`,
      }),
      providesTags: ["Country"],
    }),
    getUser: builder.query({
      query: (user) => ({
        url: "/users/me",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Authorization: "Bearer " + user?.access_token,
        },
      }),

      providesTags: ["Users"],
    }),
    getSongsNumber: builder.query({
      query: (id) => ({
        url: `/songs/getSongsNumber/${id}`,
      }),
      providesTags: ["Songs"],
    }),
    addCurrentPlays: builder.mutation({
      query: (body) => ({
        url: "/songs/addCurrentPlays",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Songs"],
    }),
    addTotalPlays: builder.query({
      query: (id) => ({
        url: `/songs/addTotalPlays/${id}`,
      }),
      providesTags: ["Songs"],
    }),
    getPlaylistNumber: builder.query({
      query: (id) => ({
        url: `/playlist/getPlaylistNumber/${id}`,
      }),
      providesTags: ["Playlist"],
    }),
    deletPlaylist: builder.mutation({
      query: (body) => ({
        url: "/playlist/deletePlaylist",
        method: "DELETE",
        body,
      }),
      invalidatesTags: ["Playlist"],
    }),
    deleteSongFromPlaylist: builder.mutation({
      query: (body) => ({
        url: "/playlist/deleteSongFromPlaylist",
        method: "DELETE",
        body,
      }),
      invalidatesTags: ["Playlist"],
    }),
    getGenreById: builder.query({
      query: (id) => ({
        url: `/genre/getGenre/${id}`,
      }),
      providesTags: ["Genre"],
    }),
    getUserById: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
      }),
      providesTags: ["Users"],
    }),
    postPlaylist: builder.mutation({
      query: (body) => ({
        url: "/playlist/createPlaylist",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Playlist"],
    }),

    postAddToPlaylist: builder.mutation({
      query: (body) => ({
        url: "/playlist/addToPlaylist",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Playlist"],
    }),
    postAddWallet: builder.mutation({
      query: (body) => ({
        url: "/users/addWallet",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
    getPlaylistByUserId: builder.query({
      query: () => ({
        url: `/playlist/getPlaylistByUserId`,
      }),
      providesTags: ["Playlist"],
    }),
    getPlaylistById: builder.query({
      query: (id) => ({
        url: `/playlist/getPlaylistById/${id}`,
      }),
      providesTags: ["Playlist"],
    }),

    getSongsOfPlaylist: builder.query({
      query: (id) => ({
        url: `/playlist/getSongsOfPlaylist/${id}`,
      }),
      providesTags: ["Playlist"],
    }),
    getAllPlaylist: builder.query({
      query: () => ({
        url: `/playlist/getAllPlaylist`,
      }),
      providesTags: ["Playlist"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllSongsQuery,
  usePostUploadSongMutation,
  useGetCountryByIdQuery,
  useGetGenreByIdQuery,
  useGetUserByIdQuery,
  usePostUpdateUserInfoMutation,
  usePostProfileImageMutation,
  useGetArtistSongsByIdQuery,
  useUpdateProfileImageMutation,
  useGetAllCountryQuery,
  useGetAllGenreQuery,
  useGetAllPlaylistQuery,
  useGetPlaylistByUserIdQuery,
  useGetSongsOfPlaylistQuery,
  usePostPlaylistMutation,
  usePostAddToPlaylistMutation,
  useGetPlaylistByIdQuery,
  usePostAddWalletMutation,
  useAddCurrentPlaysMutation,
  useAddTotalPlaysQuery,
  useDeletPlaylistMutation,
  useDeleteSongFromPlaylistMutation,
  useGetPlaylistNumberQuery,
  useGetSongsNumberQuery,
  useGetUserQuery,
} = authorizedApi;
