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

export const photosApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({
    baseUrl: apiDomain,
  }),
  endpoints: (builder) => ({
    fetchPhotos: builder.query({
      query: (album) => ({
        url: '/photos',
        params: {
          albumId: album.id,
        },
        method: 'GET',
      }),
    }),
    addPhoto: builder.mutation({
      query: (album) => ({
        url: '/photos',
        method: 'POST',
        body: {
          albumId: album.id,
          url: faker.image.abstract(150, 150, true),
        },
      }),
    }),
    removePhoto: builder.mutation({
      query: (photo) => ({
        url: `/photos/${photo.id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} = photosApi;
