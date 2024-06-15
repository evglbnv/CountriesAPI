/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1/';

const ALL_COUNTRIES = `${BASE_URL}all?fields=name,capital,region,population,flags`;

export const fetchCountriesData = createAsyncThunk(
  'countries/fetchAllData',
  async () => {
    const response = await axios.get(ALL_COUNTRIES);
    return response.data;
  },
);

const initialState = {
  status: 'idle',
  error: null,
  list: [],
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountriesData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCountriesData.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(fetchCountriesData.fulfilled, (state, action) => {
        state.status = 'received';
        state.list = action.payload;
      });
  },
});

export const coutriesReducer = countriesSlice.reducer;

export const selectAllCountries = (state) => state.countries.list;