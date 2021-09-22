import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Store from './Store';
import CarDetails from './CarDetails';

const navigator = createStackNavigator({
  'Buy a car': Store,
  'Car Details': CarDetails,
});
const App = createAppContainer(navigator);

const StoreNavigator = () => {
  return <App />;
};

export default StoreNavigator;

const styles = StyleSheet.create({});
