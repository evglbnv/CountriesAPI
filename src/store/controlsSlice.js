/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  region: '',
  search: '',
};

const controlSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setRegion, setSearch } = controlSlice.actions;

export const controlsReducer = controlSlice.reducer;

export const selectRegion = (state) => state.controls.region;
export const selectSearch = (state) => state.controls.search;
export const selectControls = (state) => state.controls;
