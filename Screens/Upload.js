import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add, sub } from '../actions'

class Upload extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(Upload)