import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';

const navigator = createStackNavigator({
  // 'Send OTP': Sendotp,
  Home: Home,
  // 'verify OTP': Verifyotp,
});
const App = createAppContainer(navigator);
const Drawer = createDrawerNavigator();
const HomeNavigator = () => {
  return (
    // <NavigationContainer>
    //   <Drawer.Navigator>
    //     <Drawer.Screen name="Home" component={Home} />
    //     {/* <Drawer.Screen name="Profile" component={Profile} /> */}
    //   </Drawer.Navigator>
    // </NavigationContainer>
    <App />
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
