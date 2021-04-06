import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles.js'

export default class Profile extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app! {this.state.count}</Text>
      </View>
    );
  }
}

