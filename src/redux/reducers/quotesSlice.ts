import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AUTHOR_PATH, BASE_PATH, PARAMS, RANDOM_PATH } from '../../constants';
import { IQuote } from '../../models/quote';
import { IQuoteByAuthor } from '../../models/quotesByAuthor';

export interface QuotesState {
  currentQuote: IQuote | null;
  quotesByAuthor: IQuoteByAuthor | null;
}

const initialState: QuotesState = {
  currentQuote: null,
  quotesByAuthor: null,
};

export const quotesSLice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    setRandomQuote: (state, { payload }: PayloadAction<IQuote>) => {
      state.currentQuote = payload;
    },
    setQuoteByAuthor: (state, { payload }: PayloadAction<IQuoteByAuthor>) => {
      state.quotesByAuthor = payload;
    },
  },
});

export const { setRandomQuote, setQuoteByAuthor } = quotesSLice.actions;
export default quotesSLice.reducer;

export const onGetRandomQuote = () => async (dispatch: any) => {
  try {
    const response = await fetch(`${BASE_PATH}${RANDOM_PATH}`);
    const { quote } = await response.json();
    dispatch(setRandomQuote(quote));
  } catch (err) {
    console.error(err);
  }
};

export const onGetQuotesByAuthor = (author: string) => async (dispatch: any) => {
  try {
    const response = await fetch(`${BASE_PATH}${author}${AUTHOR_PATH}${PARAMS}`);
    const quotesByAuthor = await response.json();
    dispatch(setQuoteByAuthor(quotesByAuthor));
  } catch (err) {
    console.error(err);
  }
};
