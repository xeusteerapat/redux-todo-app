import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { todos } from './reducers';
import { loadState, saveState } from './storeServices';
import './index.css';
import App from './components/App';

const persistState = loadState();
const store = createStore(todos, persistState);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
