import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import { fetchMemes } from './actions';
import App from './components/App';
import rootReducer from './reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

store.subscribe(() => console.log('store', store.getState()));
store.dispatch(fetchMemes());

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
