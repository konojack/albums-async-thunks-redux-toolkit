import { faker } from '@faker-js/faker';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiDomain =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3005'
    : 'https://my-json-server.typicode.com/konojack/users-albums-photos-server-async-thunks-1';

export const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: apiDomain,
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
  }),
});

export const { useFetchAlbumsQuery, useAddAlbumMutation } = albumsApi;
