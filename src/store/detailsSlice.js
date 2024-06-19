/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1/';

export const searchByCountry = (name) => `${BASE_URL}name/${name}`;

export const fetchCountryDetailsData = createAsyncThunk(
  'details/fetchCountryData',
  async () => {
    // eslint-disable-next-line no-restricted-globals
    const response = await axios.get(searchByCountry(name));
    return response.data;
  },
);

const initialState = {
  currentCountry: null,
  status: 'idle',
  error: null,
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountryDetailsData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCountryDetailsData.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase((fetchCountryDetailsData.fulfilled), (state, action) => {
        state.status = 'received';
        state.currentCountry = action.payload;
      });
  },
});

export const detailsReducer = detailsSlice.reducer;

// selectors
export const selectCountry = (state) => state.detais.currentCountry;
