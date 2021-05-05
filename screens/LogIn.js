
import React from 'react';
import { Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
import styles from '../styles.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, login } from '../actions/user.js'
import firebase from 'firebase'

class LogIn extends React.Component {

  login = () => {
      this.props.login()
      this.props.navigation.navigate('Home')
  }
  render(){
    return (
      <View style={styles.container}>
        <Text> LogIn </Text>
        <TextInput
          style={styles.border}
          value={this.props.user.email}
          onChangeText={input => this.props.updateEmail(input)}
          placeholder='Email'
        />
        <TextInput
          style={styles.border}
          value={this.props.user.password}
          onChangeText={input => this.props.updatePassword(input)}
          placeholder='Password'
          secureTextEntry={true}
        />
        <TouchableOpacity style = {styles.button} onPress={() => this.login()}>
          <Text>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button} onPress={() => this.props.navigation.navigate('SignUp')}>
          <Text>SignUp</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

mapStateToProps = (state) => {
  return {
    user: state.counter
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateEmail, updatePassword, login} , dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
