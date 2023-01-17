import { faker } from '@faker-js/faker';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiDomain } from '..';

export const addUser = createAsyncThunk('users/add', async () => {
  const response = await axios.post(`${apiDomain}/users`, {
    name: faker.name.fullName(),
  });
  // await pause(4000);

  return response.data;
});

const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(1), duration);
  });
};
