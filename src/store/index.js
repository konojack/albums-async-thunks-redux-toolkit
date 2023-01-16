const { configureStore } = require('@reduxjs/toolkit');
const { usersReducer } = require('./slices/usersSlice');

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
