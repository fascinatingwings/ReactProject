import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers/counter';

const store = createStore(reducer, undefined, window.devToolsExtension ? window.devToolsExtension() : f => f);
//this allows the app to run instead of throwing an undefined error. Ternary statement / operator

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
); //instead constructor, I'm creating a store.
//super is how you pass on props to a parent element.