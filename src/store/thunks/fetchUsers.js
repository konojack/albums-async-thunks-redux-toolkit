import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiDomain } from '..';

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get(`${apiDomain}/users`);
  // await pause(2000);
  return response.data;
});

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(1), duration);
  });
};
