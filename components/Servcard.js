import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Servcard = (props) => {
  // console.log(props);
  return (
    <View>
      <View style={styles.card}>
        <View>
          <Text
            style={{
              fontSize: 25,
              marginBottom: 20,
              fontWeight: "100",
              marginHorizontal: 10,
            }}
          >
            {props.name}
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 20,
            overflow: "hidden",
            borderColor: "#f07102",
            paddingVertical: 5,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ width: "60%" }}>
              <View
                style={[
                  styles.textstyle,
                  { display: props.duration == "null" ? "none" : null },
                ]}
              >
                <Ionicons name="checkmark-sharp" size={24} color="black" />
                <Text style={{ marginVertical: 5, marginLeft: 2 ,width:160}}>
                  {props.duration == "null" ? null : props.duration}
                </Text>
              </View>
              <View
                style={[
                  styles.textstyle,
                  { display: props.time == "null" ? "none" : null },
                ]}
              >
                <Ionicons name="checkmark-sharp" size={24} color="black" />
                <Text style={{ marginVertical: 5, marginLeft: 2 ,width:160}}>
                  {props.time == "null" ? null : props.time}
                </Text>
              </View>
              <View style={styles.textstyle}>
                <Ionicons name="checkmark-sharp" size={24} color="black" />
                <Text style={{ marginVertical: 5, marginLeft: 2 ,width:160}}>
                  {props.warranty}
                </Text>
              </View>
              {/* <Text style={{ marginVertical: 5 }}>{props.services}</Text> */}
              {/* <Text>{props.srvid}</Text> */}
            </View>
            <View style={{ elevation: 20, backgroundColor: "#fff", margin: 5 ,borderRadius:12 }}>
              <Image source={props.image} style={styles.img} />
            </View>
          </View>
          <View style={styles.buttonview}>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                props.navigation.navigate("App", {
                  screen: "Service Type",
                  params: {
                    duration: props.duration,
                    name: props.name,
                    time: props.time,
                    warranty: props.warranty,
                    services: props.services,
                    image: props.image,
                    price: props.price,
                    options: props.options,
                    srvid: props.srvid,
                  },
                })
              }
            >
              <Text style={{ color: "white" }}>View Details</Text>
            </TouchableOpacity>
            <View style={styles.price}>
              <Text style={{ color: "#f07102" }}>Rs. {props.price}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Servcard;

const styles = StyleSheet.create({
  price: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 7,
    alignSelf: "center",
    paddingHorizontal: 10,
    margin: 10,
    borderColor: "#f07102",
  },
  card: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    margin: 10,
    padding: 10,
    backgroundColor: "white",
  },
  img: {
    width: 110,
    height: 110,
    borderRadius:12
  },
  button: {
    padding: 5,
    borderRadius: 7,
    alignSelf: "center",
    paddingHorizontal: 20,
    margin: 10,
    backgroundColor: "#f07102",
    marginLeft: 30,
  },
  textstyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonview: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
