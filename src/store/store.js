/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import { coutriesReducer } from './countriesSlice';

export const store = configureStore({
  reducer: {
    countries: coutriesReducer,
  },
  devTools: true,
  // middlware by default
});
