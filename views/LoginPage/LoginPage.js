import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-material-ui';

import styles from './styles';

export default class LoginPage extends React.Component {
  state = {
    username: 'ny1am.lviv.ua@gmail.com',
    password: '',
  };

  onUsernameChange = (username) => {
    this.setState({ username });
  };

  onPasswordChange = (password) => {
    this.setState({ password });
  };

  onSubmit = () => {
    return this.props.onSubmit(this.state).then(() => {
      return this.props.navigation.navigate('landing');
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <View style={styles.container}>
        <Text>Login Page</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={this.onUsernameChange}
            value={username}
            editable={true}
            maxLength={40}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={this.onPasswordChange}
            value={password}
            editable={true}
            maxLength={40}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button primary raised text="Log in" onPress={this.onSubmit} />
        </View>
      </View>
    );
  }
}
