import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Carinfo from "../components/Carinfo";
import Historycard from "../components/Historycard";

const Records = ({ navigation }) => {
  return (
    <View>
      <Carinfo navigation={navigation}/>
      <View>
        <View style={{ backgroundColor: "#ff8127" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginVertical: "10%",
            }}
          >
            <View style={styles.circle}></View>
            <View>
              <Text style={{ color: "white", fontSize: 25 }}>User Name</Text>
              <Text>1234567890</Text>
            </View>
          </View>
        </View>
        <View style={styles.carcard}>
          <Carinfo />
        </View>
        <TouchableOpacity
          style={styles.historycard}
          onPress={() => navigation.navigate("App", { screen: "Order Status" })}
        >
          <Historycard />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Records;

const styles = StyleSheet.create({
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    marginHorizontal: 10,
    backgroundColor: "#e9e9e9",
    borderColor: "white",
  },
  carcard: {
    borderRadius: 7,
    margin: 10,
    overflow: "hidden",
    elevation: 5,
  },
  historycard: {
    marginHorizontal: 10,
    borderRadius: 7,
    overflow: "hidden",
    elevation: 5,
  },
});
