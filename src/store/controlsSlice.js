/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  region: '',
};

const controlSlice = createSlice({
  name: 'controls',
  initialState,
  reducers: {
    setRegion: (state, action) => {
      state.region = action.payload;
    },
  },
});

export const { setRegion } = controlSlice.actions;

export const controlsReducer = controlSlice.reducer;

export const selectRegion = (state) => state.controls.region;
export const selectControls = (state) => state.controls;
