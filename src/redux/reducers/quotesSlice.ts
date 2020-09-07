import { createSlice } from '@reduxjs/toolkit';

const quotesSLice = createSlice({
  name: 'quotes',
  initialState: {
    quote: null,
    quotesList: [],
  },
  reducers: {
    setRandomQuote: (state, { payload }) => {
      return { ...state, quote: payload };
    },
  },
});

export const { setRandomQuote } = quotesSLice.actions;
export default quotesSLice.reducer;
