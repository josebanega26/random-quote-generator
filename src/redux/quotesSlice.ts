import { createSlice } from '@reduxjs/toolkit';

const quotesSLice = createSlice({
  name: 'quotes',
  initialState: {
    quote: null,
    quotesList: [],
  },
  reducers: {},
});

export default quotesSLice.reducer;
