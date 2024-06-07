import { configureStore } from '@reduxjs/toolkit';
import globalSlice from './features/globalSlice';
import dashboardSlice from './features/dashboardSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      global: globalSlice,
      dashboard: dashboardSlice
    },
  });
};
