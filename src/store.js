import { applyMiddleware, compose, createStore } from 'redux'
import createRootReducer from './reducers/root_reducer'
import axios from 'axios';

// MIDDLEWARES
import thunk from 'redux-thunk'
import { createLogger } from "redux-logger"

const logger = createLogger();

export default function configureStore(initialState) {
  const store = createStore(
    createRootReducer(),
    initialState,
    compose(
      applyMiddleware(
        thunk,
        logger
      ),
    )
  );
  return store;
}
