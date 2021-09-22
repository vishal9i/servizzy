import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Fuel = ({ route, navigation }) => {
  // const model = navigation.getParam('carmodel');
  // const brand = navigation.getParam('carbrand');
  // const image = navigation.getParam('carimage');
  const { carmodel, carbrand, carimage,token, petrol, diesel } = route.params;
  console.log(carmodel, carbrand, carimage,token, petrol, diesel);
  const updatecar  = async (prop) => {
    // console.log(prop);
    const token1 = await AsyncStorage.getItem('token')
    console.log(token);
    fetch("https://digi-servizzy-backend.herokuapp.com/api/add-car-details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        userid: token1,
      },
      body: JSON.stringify({
        brandName: carbrand,
        modelName: carmodel,
        fuelType: prop,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigation.replace("Tab", { screen: "My cars" });
      });
  };
  return (
    <View style={{ backgroundColor: "white", height: "100%", padding: 20 }}>
      <Text style={{ fontSize: 35, marginHorizontal: 15, marginTop: "20%" }}>
        {carmodel}
      </Text>
      <Text
        style={{
          fontSize: 25,
          color: "gray",
          marginHorizontal: 15,
          marginBottom: "10%",
        }}
      >
        {carbrand}
      </Text>
      <Image source={carimage} style={styles.carimg} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() =>
            token == ""
              ? navigation.navigate("Send OTP", {
                  model: carmodel,
                  image: carimage,
                  brand: carbrand,
                  fuel: "Petrol",
                })
              : updatecar("Petrol")
          }
          style={{ display: petrol ? null : "none" }}
        >
          <Image
            style={styles.type}
            source={require("../images/cars/petrol.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            token == ""
              ? navigation.navigate("Send OTP", {
                  model: carmodel,
                  image: carimage,
                  brand: carbrand,
                  fuel: "Diesel",
                })
              : updatecar("Diesel")
          }
          style={{ display: diesel ? null : "none" }}
        >
          <Image
            style={styles.type}
            source={require("../images/cars/Diesel.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Fuel;

const styles = StyleSheet.create({
  carimg: {
    width: 330,
    height: 220,
    alignSelf: "center",
  },
  type: {
    width: 150,
    height: 120,
  },
});
