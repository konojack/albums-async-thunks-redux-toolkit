const { configureStore } = require('@reduxjs/toolkit');
const { usersReducer } = require('./slices/usersSlice');

export const apiDomain =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3005'
    : // : 'https://my-json-server.typicode.com/konojack/users-albums-photos-server-async-thunks-1';
      'https://users-albums-photos-server-async-thunks-1.vercel.app';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export * from './thunks/fetchUsers';
export * from './thunks/addUser';
