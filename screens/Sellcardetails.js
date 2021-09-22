import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Swiper from "react-native-web-swiper";
import Carinfo from "../components/Carinfo";

// const images = [
//   require("../images/buycardetails/Car.png"),
//   require("../images/buycardetails/Car.png"),
//   require("../images/buycardetails/Car.png"),
// ];

const Sellcardetails = ({ route, navigation }) => {
  const { images, title, image, km, type, location, subTitle } = route.params;
  return (
    <View style={styles.container}>
      <Carinfo navigation={navigation}/>
      <View style={{ flex: 1 }}>
        <Swiper
          from={1}
          minDistanceForAction={0.1}
          controlsProps={{
            dotsTouchable: true,
            prevPos: "left",
            nextPos: "right",

            nextTitleStyle: { color: "white", fontSize: 24, fontWeight: "500" },
            PrevComponent: ({ onPress }) => (
              <TouchableOpacity onPress={onPress}>
                <Text
                  style={{ color: "white", fontSize: 24, fontWeight: "500" }}
                ></Text>
              </TouchableOpacity>
            ),
          }}
        >
          {images.map((image, index) => {
            return (
              <View style={styles.swiperdesign}>
                {/* // <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"white"}}> */}
                <Image
                  style={styles.img}
                  key={index}
                  source={{
                    uri: `https://digi-servizzy-backend.herokuapp.com/${image.path}`,
                  }}
                />
              </View>
            );
          })}
        </Swiper>
      </View>
      <View style={{ padding: 10 }}>
        <Text>{title}</Text>
        <Text>{subTitle}</Text>
      </View>
      <View style={styles.buttondesign}>
        <View>
          <TouchableOpacity
            style={styles.contain}
            onPress={() => navigation.navigate()}
          >
            <Text style={styles.textbutton}>View Car Details</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 15 }}>
          <TouchableOpacity
            style={styles.contains}
            onPress={() => navigation.navigate()}
          >
            <Text style={styles.textbuttons}>Contact Seller</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.lineStyle} />

      <Text style={{ marginHorizontal: 15, fontSize: 20, color: "grey" }}>
        Overview
      </Text>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.Overviewbox}>
          <View style={styles.Overview}>
            <Image
              source={require("../images/buycardetails/I_1.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text style={{ marginHorizontal: 15 }}>2020</Text>
          </View>
          <View style={styles.Overview}>
            <Image
              source={require("../images/buycardetails/I_2.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text style={{ marginHorizontal: 15 }}>{km} kms</Text>
          </View>
          <View style={styles.Overview}>
            <Image
              source={require("../images/buycardetails/I_3.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text style={{ marginHorizontal: 15 }}>Petrol</Text>
          </View>
          <View style={styles.Overview}>
            <Image
              source={require("../images/buycardetails/I_4.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text style={{ marginHorizontal: 15 }}>Manual</Text>
          </View>
        </View>
        <View style={styles.Overviewbox2}>
          <View style={styles.Overview}>
            <Image
              source={require("../images/buycardetails/I_5.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text style={{ marginHorizontal: 15 }}>Manual</Text>
          </View>
          <View style={styles.Overview}>
            <Image
              source={require("../images/buycardetails/I_6.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text style={{ marginHorizontal: 15 }}>Manual</Text>
          </View>
          <View style={styles.Overview}>
            <Image
              source={require("../images/buycardetails/I_7.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text style={{ marginHorizontal: 15 }}>Manual</Text>
          </View>
          <View style={styles.Overview}>
            <Image
              source={require("../images/buycardetails/I_8.png")}
              style={{ width: 20, height: 20 }}
            />
            <Text style={{ marginHorizontal: 15 }}>Manual</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Sellcardetails;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 10,
    flex: 1,
  },
  img: {
    width: wp("100%"),
    height: wp("60%"),
  },
  swiperdesign: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttondesign: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  contain: {
    backgroundColor: "orange",
    padding: 10,
    marginVertical: 10,
    borderRadius: 9,
    elevation: 2,
    alignSelf: "center",
    justifyContent: "center",
  },
  textbutton: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  contains: {
    padding: 10,
    marginVertical: 10,
    borderRadius: 9,
    elevation: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  textbuttons: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "#dddddd",
    marginVertical: 10,
  },
  Overviewbox: {
    paddingVertical: 15,
  },
  Overview: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  Overviewbox2: {
    paddingHorizontal: 25,
    marginHorizontal: 25,
    marginVertical: 15,
  },
});
