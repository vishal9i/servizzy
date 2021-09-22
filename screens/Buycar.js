import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { ScrollView,FlatList, StyleSheet, View,Image } from "react-native";

// import Screen from '../components/sellcarcomponents/Screen';
import Card from "../components/sellcarcomponents/Card";
import Carinfo from "../components/Carinfo";

const listings = [
  {
    id: 1,
    title: "Car1",
    km: 50,
    type: "Diesel",
    location: "jpr",
    price: 1500000,
    image: { uri: "uploads/1626498242964-temp_image_3.jpg" },
  },
  {
    id: 2,
    title: "Car2",
    km: 50,
    type: "Diesel",
    location: "jpr",
    price: 1000,
    image: require("../images/car.jpg"),
  },
  {
    id: 3,
    title: "Car3",
    km: 50,
    type: "Diesel",
    location: "jpr",
    price: 1000,
    image: require("../images/car.jpg"),
  },
  {
    id: 4,
    title: "Car4",
    km: 50,
    type: "Diesel",
    location: "jpr",
    price: 1000,
    image: require("../images/car.jpg"),
  },
  {
    id: 5,
    title: "Car5",
    km: 50,
    type: "Diesel",
    location: "jpr",
    price: 1000,
    image: require("../images/car.jpg"),
  },
  {
    id: 6,
    title: "Car6",
    km: 50,
    type: "Diesel",
    location: "jpr",
    price: 1000,
    image: require("../images/car.jpg"),
  },
  {
    id: 7,
    title: "Car7",
    km: 50,
    type: "Diesel",
    location: "jpr",
    price: 1000,
    image: require("../images/car.jpg"),
  },
];

const Buycar = ({ navigation }) => {
  const [buydata, setbuydata] = useState([]);

  const getcars = async () => {
    const token = await AsyncStorage.getItem("token");
    fetch("https://digi-servizzy-backend.herokuapp.com/api/get-selling-cars", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        userid: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setbuydata(data.data);
      });
  };
  useEffect(() => {
    getcars();
  }, []);
  return (
    <View style={{marginBottom:59}}>
      <Carinfo navigation={navigation}/>
    {/* <ScrollView style={styles.screen}>
      <FlatList
        data={buydata}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Card
            title={item.carName}
            km={item.kmsDriven}
            type={item.location}
            location={item.city}
            subTitle={"INR " + item.expectedPrice}
            image={item.images[0]}
            navigation={navigation}
            images={item.images}
          />
        )}
      />
    </ScrollView> */}
    <Image style={styles.img} source={require("../images/Buysell/Launching_Soon.png") } />
    {/* <View style={{height:100,width:"100%",marginTop:15}}>
    <Image 
    source={require("../images/welcome/Logo.png")} 
    style={{height:100,width:150,alignSelf:"center"}}
    />
    </View> */}
    </View>
  );
};

export default Buycar;
const styles = StyleSheet.create({
  screen: {
    // padding: 20,
    backgroundColor: "#D8D5D4",
    marginTop:3
  },
  img:{
    width:"71%",
    height:"27%",        
    marginTop:15,
    alignSelf:"center",
    marginTop:"50%"
    
},
});
