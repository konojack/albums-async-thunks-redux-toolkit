import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiDomain } from '..';

export const albumsApi = createApi({
  reducerPath: 'albums',
  baseQuery: fetchBaseQuery({
    baseUrl: apiDomain,
    endpoints: (builder) => ({
      fetchAlbums: builder.query({
        query: (user) => ({
          url: '/albums',
          params: {
            userId: user.id,
          },
          method: 'GET',
        }),
      }),
    }),
  }),
});

export const { useFetchAlbumsQuery } = albumsApi;
