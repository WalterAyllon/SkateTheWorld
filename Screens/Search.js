import React from 'react';
import { Button, Text, View } from 'react-native';
import styles from '../styles.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add, sub } from '../actions'

class Search extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Search {this.props.counter} </Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(Search)
