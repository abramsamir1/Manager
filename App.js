import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import Router from './src/Router';

class App extends Component {
  componentWillMount() {
      const config = {
      apiKey: 'AIzaSyA_hrJ2ezqNaiMGYxrjVWhWbOGo9XBLg0Y',
      authDomain: 'manager-f287b.firebaseapp.com',
      databaseURL: 'https://manager-f287b.firebaseio.com',
      projectId: 'manager-f287b',
      storageBucket: 'manager-f287b.appspot.com',
      messagingSenderId: '477865984042'
    };
    firebase.initializeApp(config);
  }

render() {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (

    <Provider store={store}>
      <Router />
    </Provider>
    );
  }
}

export default App;
