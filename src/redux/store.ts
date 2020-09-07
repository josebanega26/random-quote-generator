import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers/reducers';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  // middleware: applyMiddleware(middlewares),
});
