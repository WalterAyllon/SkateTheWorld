

import React from 'react';
import { Text, View, Button, TextInput} from 'react-native';
import styles from '../styles.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateEmail, updatePassword, updateUsername, updateBio, signup} from '../actions/user.js'
import { TouchableOpacity } from 'react-native-gesture-handler';

class SignUp extends React.Component {
  signup = () => {
    this.props.signup()
    this.props.navigation.navigate('Home')
  }
  
  render(){
    return (
      <View style={styles.container}>
        <Text> Sign Up </Text>
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
        <TextInput
          style={styles.border}
          value={this.props.user.username}
          onChangeText={input => this.props.updateUsername(input)}
          placeholder='Enter username here'
        />
        <TextInput
          style={styles.border}
          value={this.props.user.bio}
          onChangeText={input => this.props.updateBio(input)}
          placeholder='Enter bio here'
        />
        <TouchableOpacity style = {styles.button} onPress={() => this.signup()}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateEmail, updatePassword, updateUsername, updateBio, signup } , dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
