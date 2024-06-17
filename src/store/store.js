/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import { coutriesReducer } from './countriesSlice';
import { controlsReducer } from './controlsSlice';

export const store = configureStore({
  reducer: {
    countries: coutriesReducer,
    controls: controlsReducer,
  },
  devTools: true,
  // middlware by default
});
