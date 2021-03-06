import { combineReducers } from '@reduxjs/toolkit';
import quotesSlice from './quotesSlice';
import uiSlice from './uiSlice';

export const rootReducer = combineReducers({
  quotes: quotesSlice,
  ui: uiSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
