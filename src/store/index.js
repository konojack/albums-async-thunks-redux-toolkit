const { configureStore } = require('@reduxjs/toolkit');
const { usersReducer } = require('./slices/usersSlice');

export const apiDomain =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3005'
    : 'https://stronkaJakas.pl';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
