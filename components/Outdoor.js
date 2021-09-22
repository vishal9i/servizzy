import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const Outdoor = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 23 }}>Spare </Text>
          <Text style={{ fontSize: 23 }}>Parts</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{ color: "white" }}
            onPress={() => navigation.navigate("Tab", { screen: "Store" })}
          >
            View All
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.items}>
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => navigation.navigate("Tab", { screen: "Store" })}
        >
          <Image
            source={require("../images/services/items/4.png")}
            style={styles.icons}
          />
          <Text style={styles.text}>Bumper Reflectors</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() => navigation.navigate("Tab", { screen: "Store" })}
          >
            <Image
              source={require("../images/services/items/2.png")}
              style={styles.icons}
            />
            <Text style={styles.text}>Wipers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() => navigation.navigate("Tab", { screen: "Store" })}
          >
            <Image
              source={require("../images/services/items/3.png")}
              style={styles.icons}
            />
            <Text style={styles.text}>Auto fold side</Text>
            <Text style={styles.text}>view mirrors</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Outdoor;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f07102",
    borderRadius: 7,
    padding: 10,
    paddingHorizontal: 20,
  },
  container: {
    padding: 10,
    margin: 10,
  },
  items: {
    flexDirection: "row",
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  icons: {
    width: 150,
    height: 150,
  },
});
