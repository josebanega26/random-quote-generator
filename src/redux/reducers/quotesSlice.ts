import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AUTHOR_PATH, BASE_PATH, PARAMS, RANDOM_PATH } from '../../constants';
import { IQuote } from '../../models/quote';
import { IQuoteByAuthor } from '../../models/quotesByAuthor';
import { setLoading, setError } from './uiSlice';
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
  dispatch(setLoading(true));
  try {
    const response = await fetch(`${BASE_PATH}${RANDOM_PATH}`);
    const { quote } = await response.json();
    dispatch(setRandomQuote(quote));
  } catch (err) {
    dispatch(setError(err));
    console.error(err);
  }
  dispatch(setLoading(false));
};

export const onGetQuotesByAuthor = (author: string) => async (dispatch: any) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch(`${BASE_PATH}${AUTHOR_PATH}${author}${PARAMS}`);
    const quotesByAuthor = await response.json();
    dispatch(setQuoteByAuthor(quotesByAuthor));
  } catch (err) {
    console.error(err);
  }
  dispatch(setLoading(false));
};
