import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

export function configureStore(initialState = {}) {
  return createStore(reducers, initialState, applyMiddleware(thunk));
}

export const store = configureStore();
