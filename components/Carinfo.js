import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Cars } from "../data/carsdata";
import { useIsFocused } from "@react-navigation/native";

const Carinfo = ( {navigation} ) => {
  const [brand, setBrand] = useState();
  const [name, setName] = useState();
  const [fuel, setFuel] = useState();
  const [img, setImg] = useState();
  const [city, setcity] = useState();
  const [address, setaddress] = useState();
  const [City, setCity] = useState();
  let isFocused = useIsFocused();
  const getdata = async () => {
    const token = await AsyncStorage.getItem("token");
    // console.log(token);
    fetch("https://digi-servizzy-backend.herokuapp.com/api/get-car-details", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        userid: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("our aim ",data.data.brandName);
        setBrand(data.data[0].brandName);
        setName(data.data[0].modelName);
        setFuel(data.data[0].fuelType);
        const brandindex = Cars.data.filter((i) =>
          Object.values(i).includes(data.data[0].brandName)
        );
        // const dataindex = Cars.data.indexOf(brandindex);

        const modelindex = brandindex[0].models.filter((i) =>
          Object.values(i).includes(data.data[0].modelName)
        );

        setImg(modelindex[0].modelImage);
      });
  };

  const getLocation = async () => {
    const token = await AsyncStorage.getItem("token");
    fetch("https://digi-servizzy-backend.herokuapp.com/api/user-location", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        userid: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.location.city);
        setCity(data.location.city)
      });
  };


  const getaddress = async () => {
    const token = await AsyncStorage.getItem("token");
    fetch("https://digi-servizzy-backend.herokuapp.com/api/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        userid: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setcity(data.data.city);
        setaddress(data.data.pickUpAndDropAddress);
      });
  };
  getaddress();
  getdata();

  React.useEffect(() => {
    getdata();
    getLocation();
  }, []);
  useEffect(()=>{
    if (isFocused){
      getdata();
    }
    },[isFocused])
    
  return (
    <View style={styles.container}>
        <TouchableOpacity 
       onPress = {()=> navigation.navigate("Tab",{ screen:"My Fleet"})}
       style={{ flexDirection: "row", alignItems: "center" }}
        >
        {/* <View style={{ flexDirection: "row", alignItems: "center" }}> */}
        <Image
          source={img}
          style={{ width: 80, height: 50 }}
        />
        <View>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>{brand}</Text>
          <Text style={{ fontSize: 10 }}>{name}</Text>
          {/* <Text style={{ fontSize: 10 }}>{fuel}</Text> */}
        </View>
        {/* </View> */}
        </TouchableOpacity>
      <View style={{ alignItems: "flex-end" }}>
        <Text style={{ fontSize: 14, fontWeight: "bold", marginHorizontal: 15 }}>{City?City:null}</Text>
        {/* <Text style={{ fontSize: 10, color: "gray" }}>
          Something ,block no.2
        </Text> */}
        {/* <TouchableOpacity>
          <Text style={{ color: "#f07102" }}>Select Location</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default Carinfo;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
});
