// React
import React from 'react';
import ReactDOM from 'react-dom';
// Store
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// Reducer
import { rootReducer } from './reducers';
// Styling
import './index.css';
// Component
import App from './App';
// Other
import * as serviceWorker from './serviceWorker';


// The store uses the createStore function to create your redux store
// It takes in (reducer, middleware) as parameters
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
// logger must always be the final middleware passed into applyMiddleWare

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



/*

- Step 1 -
Import the following:

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { usersReducer } from './reducers/usersReducer';


- Step 2 -
Create the store passing your reducer and middleware as parameters
(see line 21)


- Step 3 -
Wrap the <App /> with <Provider></Provider>
Pass the store into the Provider as props


- Step 4 -
Congratulations! You now have created the redux store!
Now we create an app to display our data. Head over to App.js for the next step!

*/