import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiDomain } from '..';

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get(`${apiDomain}/users`);
  return response.data;
});
