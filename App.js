/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';


import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import ThemeReducer from './components/redux/ThemeReducer'
import MainApp from './MainApp';


const store = createStore(
  ThemeReducer ,
  applyMiddleware(thunk)
)


const App = () => {

  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};



export default App;
