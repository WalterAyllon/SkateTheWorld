
import React from 'react';
import SwitchNavigator from './navigation/SwitchNavigator.js';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import { LogBox } from 'react-native';
import firebase from './config/firebase'
const middleware = applyMiddleware(thunkMiddleware, logger)
const store = createStore(reducer, middleware);
//LogBox.ignoreAllLogs(true);

export default class App extends React.Component {
  render(){
    return (
      <Provider store={store}> 
        <SwitchNavigator/>
      </Provider>
    );
  }
}
