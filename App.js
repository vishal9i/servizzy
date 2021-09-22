// import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "./screens/Account";
import SelectCarBrand from "./screens/SelectCarBrand";
import Profile from "./screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import Mystack from './screens/Mystack';
// import HomeNavigator from './screens/HomeNavigator';
// import StoreNavigator from './screens/StoreNavigator';
import Mycar from "./screens/Mycar";
import AppIntroSlider from "react-native-app-intro-slider";
import Icon from "react-native-ionicons";
import { AntDesign } from "@expo/vector-icons";
import Sendotp from "./screens/Sendotp";
import Verifyotp from "./screens/Verifyotp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "./screens/Home";
// import Account from './Account';
// import SelectCarBrand from './SelectCarBrand';
import Refer from "./screens/Refer";
import History from "./screens/History";
// import Profile from './Profile';
import Insurance from "./screens/Insurance";
import InsuranceAlert from "./screens/InsuranceAlert";
import Help from "./screens/Help";
import CarModel from "./screens/CarModel";
import Fuel from "./screens/Fuel";
import * as Font from "expo-font";
// import Sendotp from './Sendotp';
// import Verifyotp from './Verifyotp';
import Store from "./screens/Store";
import CarDetails from "./screens/CarDetails";
import Periodicser from "./screens/Periodicser";
import Servicetype from "./screens/Servicetype";
import Status from "./screens/Status";
import Cart from "./screens/Cart";
import Checkout from "./screens/Checkout";
import Records from "./screens/Records";
import Product from "./screens/Product";
import Addcomponents from "./screens/Addcomponents";
import {
  widthPercentageToDP as wt,
  heightPercentageToDP as ht,
} from "react-native-responsive-screen";
import Itemstore from "./screens/Itemstore";
import ViewItem from "./screens/ViewItem";
import Splash from "./screens/Splash";
import Paintjob from "./screens/Paintjob";
import Windshildjob from "./screens/Windshildjob";
import Batterypack from "./screens/Batterypack";
import SellCar from "./screens/SellCar";
import Buycar from "./screens/Buycar";
import Challan from "./screens/Challan";
import Cleaningservices from "./screens/Cleaningservices";
import Mechanicalservices from "./screens/Mechanicalservices";
import Sellcardetails from "./screens/Sellcardetails";
import ConfirmPayment from "./screens/ConfirmPayment";
import CarInspection from "./screens/CarInspection";
import Wheel from "./screens/Wheel";
import InsurenceClaim from "./components/InsurenceClaim";
import AcServicing from "./screens/AcServicing";
import AppLoading from "expo-app-loading";
import Buysell from "./screens/Buysell";
import Problem from "./screens/Problem";
import Electrical from "./screens/Electrical";
import Slot from "./screens/Slot";
import Location from "./screens/Location";
import Carinfo from "./components/Carinfo";
import Workshops from "./screens/Workshops";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#FD6902",
        keyboardHidesTabBar: "true",
        style: {
          paddingBottom: 15,
          paddingTop: 10,
          backgroundColor: "black",
          height: ht(10),
          width: "100%",
          alignSelf: "center",
          borderRadius: 10,
          elevation: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={Itemstore}
        options={{
          tabBarLabel: "Store",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="store" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="My Fleet"
        component={Mycar}
        options={{
          tabBarLabel: "My Fleet",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="car" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Refer & Earn" component={Refer} />
      <Stack.Screen name="Service History" component={History} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Select your car brand" component={SelectCarBrand} />
      <Stack.Screen name="Insurance Alerts" component={Insurance} />
      <Stack.Screen name="Help" component={Help} />
      {/* <Stack.Screen name="Location" component={Location} /> */}
      <Stack.Screen name="Car Model" component={CarModel} />
      <Stack.Screen name="Fuel" component={Fuel} />
      <Stack.Screen name="Preferred Slot" component={Slot} />
      <Stack.Screen name="Insurance Alert" component={InsuranceAlert} />
      <Stack.Screen name="Car Details" component={CarDetails} />
      <Stack.Screen name="Car Services" component={Periodicser} />
      <Stack.Screen name="Service Type" component={Servicetype} />
      <Stack.Screen name="Buy & Sell" component={Buysell} />
      <Stack.Screen
        name="Service Records & Service Status"
        component={Records}
      />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Order Status" component={Status} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Instant Booking" component={Problem} />
      <Stack.Screen name="Add Something" component={Addcomponents} />
      <Stack.Screen name="store" component={ViewItem} />
      <Stack.Screen name="Paint Job" component={Paintjob} />
      <Stack.Screen name="Windshield Replacement" component={Windshildjob} />
      <Stack.Screen name="Battery Replacement" component={Batterypack} />
      <Stack.Screen name="Sell Your Car" component={SellCar} />
      <Stack.Screen name="Buy a car" component={Buycar} />
      <Stack.Screen name="Pay Your Challan" component={Challan} />
      <Stack.Screen name="Cleaning & Detailing" component={Cleaningservices} />
      <Stack.Screen name="Mechanical Services" component={Mechanicalservices} />
      <Stack.Screen name="Car Detail" component={Sellcardetails} />
      <Stack.Screen name="Confirm Payment" component={ConfirmPayment} />
      <Stack.Screen name="Car Inspection" component={CarInspection} />
      <Stack.Screen name="Wheel Balance & Alignment" component={Wheel} />
      <Stack.Screen name="Insurance Claim" component={InsurenceClaim} />
      <Stack.Screen name="AC Servicing" component={AcServicing} />
      <Stack.Screen name="Electrical Repairs" component={Electrical} />
      <Stack.Screen name="Servizzy Workshops Near You" component={Workshops} />
    </Stack.Navigator>
  );
};

export default function MainStack() {
  const [showRealApp, setShowRealApp] = useState(false);

  const fetchfonts = () => {
    return Font.loadAsync({
      arial: require("./assets/fonts/Arialn.ttf"),
    });
  };

  // const [token, setToken] = useState();

  // const [token, setToken] = useState(true);
  // const gettoken = async () => {
  //   let item = await AsyncStorage.getItem('token');
  //   item ? setToken(true) : setToken(false);
  // };

  // React.useEffect(() => {
  //   RootStackScreen();
  // }, []);
  const AuthStack = createStackNavigator();
  const AuthStackScreen = () =>
    showRealApp ? (
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen
          name="Select your car brand"
          component={SelectCarBrand}
        />
        <AuthStack.Screen name="Location" component={Location}/>
        <AuthStack.Screen name="Select Car Model" component={CarModel} />
        <AuthStack.Screen name="Fuel Type" component={Fuel} />
        <AuthStack.Screen name="Send OTP" component={Sendotp} />
        <AuthStack.Screen name="Verify OTP" component={Verifyotp} />
      </AuthStack.Navigator>
    ) : (
      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        onDone={onDone}
        showSkipButton={true}
        onSkip={onSkip}
        bottomButton
        renderNextButton={_renderNextButton}
        renderDoneButton={_renderNextButton}
      />
    );
const _renderonDone = () =>{
  return (
    <View style={styles.nextbutton}>
      {/* <Ion
        name="md-arrow-round-forward"
        color="rgba(255, 255, 255, .9)"
        size={24}
      /> */}
      <Text style={{ fontWeight: "bold", color: "white", fontSize: 20 }}>
        CHOOSE YOUR VEHICLE
      </Text>
    </View>
    // <TouchableOpacity style={styles.btn} onPress={() => console.log('Pressed')} >
    //           <Text style={styles.btntxt}>
    //           Lets #getservizzed
    //           </Text>
    //       </TouchableOpacity>
  );
};
  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };
  // const token = true;
  const [token, setToken] = useState();
  const [item, setItem] = useState();
  const [loading, setloading] = useState(true);
  const gettoken = async () => {
    let item = await AsyncStorage.getItem("token");
    item ? setToken(true) : setToken(false);

    // console.log(item);
  };

  React.useEffect(() => {
    gettoken();
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);
  const RootStack = createStackNavigator();
  const RootStackScreen = () => {
    // // const token = await AsyncStorage.getItem('token');
    // const [token, setToken] = React.useState();
    // const gettoken = async () => {
    //   const item = await AsyncStorage.getItem('token');
    //   setToken(item);
    //   // item ? setToken(true) : setToken(false);
    //   // console.log(item);
    // };
    // gettoken();

    console.log(token);
    return (
      <RootStack.Navigator
        headerMode="none"
        initialRouteName={token ? "Tab" : "Auth"}
        // initialRouteName="App"
      >
        <RootStack.Screen name="Auth" component={AuthStackScreen} />

        <RootStack.Screen name="Tab" component={MyTabs} />
        <RootStack.Screen name="App" component={MyStack} />
      </RootStack.Navigator>
    );
  };

  const RenderItem = ({ item }) => {
    return (
      <View style={{backgroundColor:"#fff",flex:1}}>
        <Image
          style={{height:480,backgroundColor:"#000",alignSelf:"center",}}
          source={item.image}
        />
        <Image
          style={styles.introImage2Style}
          source={item.image2}
        />
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Text style={styles.introTitleStyle}>{item.title2}</Text>
        {/* <Text style={styles.introTextStyle}>{item.text}</Text> */}
      </View>
    );
  };  
  const _renderNextButton = () => {
    return (
      <View style={styles.nextbutton}>
        {/* <Ion
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
        /> */}
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 20,alignSelf:"center" }}>
        Lets #getservizzed
        </Text>
      </View>
      // <TouchableOpacity style={styles.btn} onPress={() => console.log('Pressed')} >
      //           <Text style={styles.btntxt}>
      //           Lets #getservizzed
      //           </Text>
      //       </TouchableOpacity>
    );
  };
  // const [brand, setBrand] = useState();
  // const [name, setName] = useState();
  // const [fuel, setFuel] = useState();
  // const [img, setImg] = useState();

  // const getdata = async () => {
  //   const token = await AsyncStorage.getItem("token");
  //   // console.log(token);
  //   fetch("https://digi-servizzy-backend.herokuapp.com/api/get-car-details", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       userid: token,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data.data.brandName);
  //       setBrand(data.data[0].brandName);
  //       setName(data.data[0].modelName);
  //       setFuel(data.data[0].fuelType);
  //       const brandindex = Cars.data.filter((i) =>
  //         Object.values(i).includes(data.data[0].brandName)
  //       );
  //       // const dataindex = Cars.data.indexOf(brandindex);

  //       const modelindex = brandindex[0].models.filter((i) =>
  //         Object.values(i).includes(data.data[0].modelName)
  //       );

  //       setImg(modelindex[0].modelImage);
  //     });
  // };

  return (
    <>
    {/* <Carinfo data={getdata}/> */}
      {/* {showRealApp ? (
        // <NavigationContainer>
        //   <RootStackScreen />
        // </NavigationContainer>
        <Splash />
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
          bottomButton
          renderNextButton={_renderNextButton}
        />
      )} */}
      {loading == true ? (
        <Splash />
      ) : (
        <NavigationContainer>
          <RootStackScreen />
        </NavigationContainer>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  introImageStyle: {
    alignSelf:"center",
        backgroundColor:"#000",
        height:200,
        marginBottom:-75
  },
  introImage2Style: {
    alignSelf:"center",
        marginBottom:15,
        height:100,
        width:250
  },
  introTextStyle: {
    fontSize: 18,
    textAlign: "center",
  },
  introTitleStyle: {
    fontSize:25,
        marginLeft: 25,
        fontWeight:"700",
        alignSelf:"center",
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(0, 0, 0, .2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  nextbutton: {
    alignSelf:"center",
        justifyContent:"center",
        backgroundColor:"#FE7203",
        width:250,
        height:50,
        padding:5,        
        borderRadius:8,
        marginTop:10,
  },
});

const slides = [
  {
    key: "s1",
    // text: "50+ Services, Repairs, Insurance, Xchange & Accessories",
    title: "India's Premium Car",
    title2: "Care Service Brand",
    image: require("./images/welcome/start.png"),
    image2: require("./images/welcome/Logo.png"),
    backgroundColor: "white",
    width: wt(75),
    height: ht(25),
  },
  // {
  //   key: "s2",
  //   title: "One stop shop for all your car needs",
  //   text: "Click & Book in Minute",
  //   image: require("./images/welcome/welcome2.png"),
  //   backgroundColor: "white",
  //   width: wt(85),
  //   height: ht(30),
  // },
  // {
  //   key: "s3",
  //   title: "Your car deserves the finest",
  //   text: "Doorstep pickup & Delivery",
  //   image: require("./images/welcome/3.png"),
  //   backgroundColor: "white",
  //   width: wt(95),
  //   height: ht(37),
  // },
];
