import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchRandomQuote } from '../../api/quotes';
import { setRandomQuote } from '../reducers/quotesSlice';

export function* fetchRandomQuotes() {
  try {
    const quote = yield call(fetchRandomQuote);
    yield put(setRandomQuote(quote));
  } catch (err) {
    console.log(err);
  }
}

// export default function* onGetRandomCountries() {
//   yield takeLatest(countries.getAll.type, getAll);
// }
