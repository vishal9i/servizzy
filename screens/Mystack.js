import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Account from './Account';
import SelectCarBrand from './SelectCarBrand';
import Refer from './Refer';
import History from './History';
import Profile from './Profile';
import Insurance from './Insurance';
import InsuranceAlert from './InsuranceAlert';
import Help from './Help';
import CarModel from './CarModel';
import Fuel from './Fuel';
import Sendotp from './Sendotp';
import Verifyotp from './Verifyotp';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppStack = createStackNavigator({
  Account: Account,
  'Select your car Brand': SelectCarBrand,
  'Refer & Earn': Refer,
  'Order History': History,
  Profile: Profile,
  Insurance: Insurance,
  'Insurance Alert': InsuranceAlert,
  Help: Help,
  'Model of your car': CarModel,
  'Select fuel type': Fuel,
});

const AuthStack = createStackNavigator({
  'Send OTP': Sendotp,
  'Verify OTP': Verifyotp,
});

// const App = createAppContainer(navigator);

const Mystack = () => {
  const [isLoggedin, setIsLoggedin] = React.useState(null);
  const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    // console.log(token);
    if (token) {
      setIsLoggedin(true);
      // console.log(token);
    } else {
      setIsLoggedin(false);
    }
  };

  React.useEffect(() => {
    getToken();
  }, []);
  const App = createAppContainer(
    createSwitchNavigator(
      { Appstack: AppStack, Authstack: AuthStack },
      { initialRouteName: isLoggedin == true ? 'Appstack' : 'Authstack' }
    )
  );
  return <App />;
};

export default Mystack;

const styles = StyleSheet.create({});
