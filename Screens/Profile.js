import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from '../styles.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add, sub } from '../actions'

class Profile extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app! {this.props.counter}</Text>
        <Button title='Add' onPress={() => {this.props.add()}}/>
      </View>
    );
  }
}

mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ add, sub } , dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
