/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import { coutriesReducer } from './countriesSlice';
import { controlsReducer } from './controlsSlice';
import { detailsReducer } from './detailsSlice';
import { themeReducer } from './themeSlice';

export const store = configureStore({
  reducer: {
    countries: coutriesReducer,
    controls: controlsReducer,
    details: detailsReducer,
    theme: themeReducer,
  },
  devTools: true,
});
