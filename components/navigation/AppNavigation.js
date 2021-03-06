import React from 'react';
import { Text, Animated, Easing } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-material-ui';
import Drawer from '../Drawer';

import LandingPage from '../../views/LandingPage';
import CompaniesPage from '../../views/CompaniesPage';
import CompanyPage from '../../views/CompanyPage';
import LoginPage from '../../views/LoginPage';

// https://github.com/react-community/react-navigation/issues/1254
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0,
  },
});

// drawer stack
const DrawerStack = DrawerNavigator(
  {
    landing: { screen: LandingPage },
    companies: { screen: CompaniesPage },
    company: { screen: CompanyPage },
    login: { screen: LoginPage },
  },
  {
    gesturesEnabled: false,
    contentComponent: Drawer,
  }
);

const drawerButton = (navigation) => (
  <Text
    style={{ padding: 5, color: 'white' }}
    onPress={() => {
      // Coming soon: navigation.navigate('DrawerToggle')
      // https://github.com/react-community/react-navigation/pull/2492
      if (navigation.state.index === 0) {
        navigation.navigate('DrawerOpen');
      } else {
        navigation.navigate('DrawerClose');
      }
    }}
  >
    <Icon name="menu" style={{ color: 'white' }} />
  </Text>
);

const backButton = (navigation) => (
  <Text
    style={{ padding: 5, color: 'white' }}
    onPress={() => {
      navigation.navigate('companies');
    }}
  >
    <Icon name="arrow-back" style={{ color: 'white' }} />
  </Text>
);

const DrawerNavigation = StackNavigator(
  {
    DrawerStack: { screen: DrawerStack },
  },
  {
    headerMode: 'float',
    navigationOptions: ({ navigation, navigationOptions = {} }) => ({
      headerStyle: { backgroundColor: '#004a80' },
      title: navigationOptions.title || 'Menu',
      headerTintColor: 'white',
      gesturesEnabled: false,
      headerLeft: navigationOptions.back
        ? backButton(navigation)
        : drawerButton(navigation),
    }),
  }
);

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    drawerStack: { screen: DrawerNavigation },
  },
  {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'drawerStack',
    transitionConfig: noTransitionConfig,
  }
);

export default PrimaryNav;
