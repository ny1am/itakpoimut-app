import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Screen2 extends React.Component {
  static navigationOptions = {
    title: 'Screen Two',
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Screen2</Text>
        <Text
          style={styles.linky}
          onPress={() => navigation.navigate('screen1')}
        >
          Go to Screen One
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
