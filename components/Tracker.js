import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import Swiper from "react-native-swiper";

const Tracker = ({ navigation }) => {
  return (
    <View style={styles.containers}>
      <Swiper style={{ height: 250 }} autoplay={true} showsPagination={false}>
      
        <Image 
        source={require("../images/Swiper/s1.jpg")}
        style={{ height:250 ,width:"100%" }}/>
        <Image 
        source={require("../images/Swiper/s2.jpg")}
        style={{ height:250 ,width:"100%" }}/>
        <Image 
        source={require("../images/Swiper/s3.jpg")}
        style={{ height:250 ,width:"100%" }}/>
        <Image 
        source={require("../images/Swiper/s4.jpg")}
        style={{ height:250 ,width:"100%" }}/>
        <Image 
        source={require("../images/Swiper/s5.jpg")}
        style={{ height:250 ,width:"100%" }}/>
        <Image 
        source={require("../images/Swiper/s6.jpg")}
        style={{ height:250 ,width:"100%" }}/>
        <Image 
        source={require("../images/Swiper/s7.jpg")}
        style={{ height:200 ,width:"100%" }}/>
        <Image 
        source={require("../images/Swiper/s8.jpg")}
        style={{ height:250 ,width:"100%" }}/>
      </Swiper>
      {/* <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 40, color: "white", fontWeight: "bold" }}>
          GPS Tracker
        </Text>
        <Text style={{ color: "white" }}>
          Wireless GPS car tracking service
        </Text>
        <View style={{ padding: 20, flexDirection: "row" }}>
          <Text>Just for you</Text>
          <Text style={{ color: "#f5ed0c" }}>{">>>"}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row-reverse" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Tab", { screen: "Store" })}
        >
          <Text>View All</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

export default Tracker;

const styles = StyleSheet.create({
  containers: {
    // backgroundColor: "#146eff",
    paddingHorizontal: 10,
    // paddingVertical: 10,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 7,
    padding: 10,
    paddingHorizontal: 20,
  },
});
