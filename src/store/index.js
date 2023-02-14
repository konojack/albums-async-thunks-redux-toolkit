import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { albumsApi } from './apis/albumsApi';
import { photosApi } from './apis/photosApi';

const { configureStore } = require('@reduxjs/toolkit');
const { usersReducer } = require('./slices/usersSlice');

export const apiDomain =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3005'
    : 'https://my-json-server.typicode.com/konojack/users-albums-photos-server-async-thunks-1';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(albumsApi.middleware)
      .concat(photosApi.middleware),
});

setupListeners(store.dispatch);

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/deleteUser';
export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from './apis/albumsApi';
export {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} from './apis/photosApi';
