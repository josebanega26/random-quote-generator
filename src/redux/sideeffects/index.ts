import { fetchRandomQuotes } from './getRandomQuotes';
import { fork, all } from 'redux-saga/effects';

function* quotesSaga() {
  yield all([fork(fetchRandomQuotes)]);
}

export default quotesSaga;
