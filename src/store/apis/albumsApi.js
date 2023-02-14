import { faker } from '@faker-js/faker';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiDomain =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3005'
    : 'https://my-json-server.typicode.com/konojack/users-albums-photos-server-async-thunks-1';

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(1), duration);
  });
};

export const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: apiDomain,
    fetchFn: async (...args) => {
      //REMOVE FOR PROD
      await pause(500);
      return fetch(...args);
    },
  }),
  endpoints: (builder) => ({
    fetchAlbums: builder.query({
      providesTags: (result, error, user) => {
        return [{ type: 'Album', id: user.id }];
      },
      query: (user) => ({
        url: '/albums',
        params: {
          userId: user.id,
        },
        method: 'GET',
      }),
    }),
    addAlbum: builder.mutation({
      invalidatesTags: (result, error, user) => {
        return [{ type: 'Album', id: user.id }];
      },
      query: (user) => ({
        url: '/albums',
        method: 'POST',
        body: {
          userId: user.id,
          title: faker.commerce.productName(),
        },
      }),
    }),
    removeAlbum: builder.mutation({
      invalidatesTags: (result, error, album) => {
        return [{ type: 'Album', id: album.userId }];
      },
      query: (album) => ({
        url: `/albums/${album.id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi;
