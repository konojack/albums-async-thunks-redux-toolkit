const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  data: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {},
});

export const usersReducer = usersSlice.reducer;
