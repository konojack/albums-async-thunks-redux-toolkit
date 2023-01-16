import { faker } from '@faker-js/faker';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiDomain } from '..';

export const addUser = createAsyncThunk('users/add', async () => {
  const response = await axios.post(`${apiDomain}/users`, {
    name: faker.name.fullName(),
  });

  return response.data;
});
