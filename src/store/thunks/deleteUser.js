import { faker } from '@faker-js/faker';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiDomain } from '..';

export const deleteUser = createAsyncThunk('users/delete', async (userId) => {
  const response = await axios.delete(`${apiDomain}/users/${userId}`);
  // await pause(4000);

  return userId;
});

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(1), duration);
  });
};
