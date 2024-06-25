/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1/';

export const searchByCountry = (name) => `${BASE_URL}name/${name}`;

export const searchByCode = (borders) => `${BASE_URL}alpha?codes=${borders}`;

export const fetchCountryDetailsData = createAsyncThunk(
  'details/fetchCountryData',
  async (name) => {
    // eslint-disable-next-line no-restricted-globals
    const response = await axios.get(searchByCountry(name));
    return response.data;
  },
);

export const fetchBorderDetails = createAsyncThunk(
  'details/fetchBorderData',
  async (borders) => {
    const response = await axios.get(searchByCode(borders));

    return response.data;
  },
);

const initialState = {
  currentCountry: null,
  neighbors: [],
  status: 'idle',
  error: null,
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
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
        state.currentCountry = action.payload[0];
      })
      .addCase((fetchBorderDetails.fulfilled), (state, action) => {
        state.neighbors = action.payload.map((country) => country.name.common);
      });
  },
});

export const detailsReducer = detailsSlice.reducer;
export const { clearDetails } = detailsSlice.actions;

// selectors
export const selectCountry = (state) => state.details.currentCountry;
export const selectDetails = (state) => state.details;
export const selectNeighbors = (state) => state.details.neighbors;
