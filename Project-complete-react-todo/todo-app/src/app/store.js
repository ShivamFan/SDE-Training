import { configureStore} from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlice";

import createSagaMiddleware from 'redux-saga'
import rootSaga from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore(
  {    
    reducer: {
      todo: todoReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)

  });
  
  sagaMiddleware.run(rootSaga)