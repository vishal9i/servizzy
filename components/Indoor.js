import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import {
  widthPercentageToDP as wt,
  heightPercentageToDP as ht,
} from "react-native-responsive-screen";

const Indoor = ({ navigation }) => {
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
          <Text style={{ fontSize: 23 }}>Car</Text>
          <Text style={{ fontSize: 23 }}>Accessories</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Tab", { screen: "Store" })}
        >
          <Text style={{ color: "white" }}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.items}>
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => navigation.navigate("Tab", { screen: "Store" })}
        >
          <Image
            source={require("../images/services/items/8.png")}
            style={styles.icons}
          />
          <Text style={styles.text}>Air Purifier</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: "center", padding: 5 }}
          onPress={() => navigation.navigate("Tab", { screen: "Store" })}
        >
          <Image
            source={require("../images/services/items/7.png")}
            style={styles.icons}
          />
          <Text style={styles.text}>Premium Steering Covers</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.items}>
        <TouchableOpacity
          style={{ alignItems: "center", padding: 5 }}
          onPress={() => navigation.navigate("Tab", { screen: "Store" })}
        >
          <Image
            source={require("../images/services/items/6.png")}
            style={styles.icons}
          />
          <Text style={styles.text}>Car Charger</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: "center", padding: 5 }}
          onPress={() => navigation.navigate("Tab", { screen: "Store" })}
        >
          <Image
            source={require("../images/services/items/5.png")}
            style={styles.icons}
          />
          <Text style={styles.text}>Car Mats</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Indoor;

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
  },
  icons: {
    width: wt(37),
    height: ht(18),
  },
});
