
import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../styles.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add, sub } from '../actions'

class Home extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <Text> Home {this.props.counter} </Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Button title='Add' onPress={() => this.props.add()}/>
        <Button title='Subtract' onPress={() => this.props.sub()}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home)

