import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAAfDA3gF8rJFuFB4Vv9PLXPU-k_Ofikfk',
      authDomain: 'auth-57233.firebaseapp.com',
      databaseURL: 'https://auth-57233.firebaseio.com',
      projectId: 'auth-57233',
      storageBucket: 'auth-57233.appspot.com',
      messagingSenderId: '284357804564'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
