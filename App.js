import React from 'react';
import { Font } from 'expo';
// We're going to use navigation with redux
import ReduxNavigation from './components/navigation/ReduxNavigation';
import { Provider } from 'react-redux';
import createStore from './store';
import { StyleSheet, View, StatusBar } from 'react-native';
import { COLOR, ThemeProvider } from 'react-native-material-ui';

const store = createStore();

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
    accentColor: COLOR.pink500,
  },
};

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return this.state.fontLoaded ? (
      <ThemeProvider uiTheme={uiTheme}>
        <Provider store={store}>
          <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <ReduxNavigation />
          </View>
        </Provider>
      </ThemeProvider>
    ) : null;
  }
}

/*
* Both of the following files work for react-navigation
* Routes will always be added and supported by modifying
* the AppNavigation file.  Special redux actions/reducers
* will be handled in Redux Navigation
*   // use this to use react-navigation no redux
*   import AppNavigation from './Navigation/AppNavigation'
*
*   // use this to use react-navigation with redux
*   import ReduxNavigation from './Navigation/ReduxNavigation'
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
