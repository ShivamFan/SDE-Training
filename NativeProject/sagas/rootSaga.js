import { all } from 'redux-saga/effects'
import watcherTodoSaga from './handlers';
export default function* rootSaga() {
  yield all([watcherTodoSaga()]);
}