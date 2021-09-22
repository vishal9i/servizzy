import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Reviewcard from "../components/Reviewcard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Carinfo from "../components/Carinfo";

const Servicetype = ({ route, navigation }) => {
  // console.log(route.params);
  const {
    duration,
    name,
    services,
    time,
    warranty,
    image,
    price,
    options,
    srvid,
  } = route.params;
  //   console.log(duration, name, services, time, warranty, image);
  const { mark } = route.params;
  // console.log(mark);
  const addtocart = async () => {
    const token = await AsyncStorage.getItem("token");
    console.log(srvid, name, price, token);
    fetch("https://digi-servizzy-backend.herokuapp.com/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        userid: token,
      },
      body: JSON.stringify({
        serviceId: srvid,
        serviceName: name,
        total: price,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigation.navigate("App", { screen: "Cart" });
      });
  };

  // const item = item == "undefined" ? "" : item;c

  return (
    <View style={styles.container}>
      <Carinfo navigation={navigation}/>
      <ScrollView>
        <View>
          <Image source={image} style={styles.mainimg} />
        </View>
        <View style={{ backgroundColor: "#f7b016" }}>
          <View style={{ margin: 20, paddingVertical: 20 }}>
            <Text style={{ fontSize: 20, marginVertical: 10, color: "white" }}>
              {name}
            </Text>
            <Text style={styles.points}>{time}</Text>
            <Text style={styles.points}>{duration}</Text>
            <Text style={styles.points}>{warranty}</Text>
            {/* <Text style={styles.points}>{services}</Text> */}
          </View>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              margin: 10,
            }}
          >
            what's included
          </Text>

          {options.map((item, index) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 5,
                }}
                key={index}
              >
                <Feather
                  name="check-circle"
                  size={20}
                  color="#16f725"
                  style={{ marginRight: 10 }}
                />
                <Text>{item}</Text>
              </View>
            );
          })}

          {mark
            ? mark.map((item, index) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 5,
                    }}
                    key={index}
                  >
                    <Feather
                      name="check-circle"
                      size={20}
                      color="#16f725"
                      style={{ marginRight: 10 }}
                    />
                    <Text>{item}</Text>
                  </View>
                );
              })
            : null}
        </View>
        <View style={styles.bulebox}>
          <Image source={require("../images/serv/3.png")} style={styles.img} />
          <View style={styles.bulebox1}>
            <Text style={{ color: "white", fontSize: 20 }}>
              Servizzy Warranty
            </Text>
            <Text style={{ color: "white", marginVertical: 10 }}>
              1 Month Replacement warranty
            </Text>
          </View>
        </View>
        <View style={styles.reviewsection}>
          <Text style={{ fontSize: 25 }}>Customer Reviews</Text>
          <View style={styles.card}>
            <Reviewcard />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.save} onPress={() => addtocart()}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            ₹ {price}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            ADD TO CART
          </Text>
        </TouchableOpacity>
    </View>
  );
};

export default Servicetype;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    // paddingTop: 20,
    // paddingBottom: '40%',
  },
  mainimg: {
    // width: 220,
    // width: "100%",
    height: 220,
    alignSelf: "center",
  },
  points: {
    color: "white",
  },
  bulebox: {
    paddingVertical: 20,
    backgroundColor: "#0275cc",
    marginVertical: 10,
    flexDirection: "row",
    // justifyContent: "space-between",
    width:400
  },
  bulebox1: {
    marginHorizontal:20
  },
  img: {
    width: 130,
    height: 85,
    marginLeft:5
  },
  reviewsection: {
    padding: 20,
  },
  save: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f07102",
    borderRadius: 7,
    marginBottom: 30,
    marginHorizontal: "6%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
