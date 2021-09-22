import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";

const Engine = ({ navigation }) => {
  return (
    <View>
      <ImageBackground
        source={require("../images/services/backgrounds/3.jpg")}
        style={styles.bimg}
      >
        <View>
          <View style={{ marginLeft: 20, marginVertical: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 30, color: "white" }}>
              Engine
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 30, color: "white" }}>
              Essentials
            </Text>
            <Text style={{ color: "#f5ed0c" }}>Engine</Text>
            <Text style={{ color: "#f5ed0c" }}>Oil</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Tab", { screen: "Store" })}
          >
            <Text>View All</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("../images/services/backgrounds/2.png")}
          style={styles.img}
        />
      </ImageBackground>
    </View>
  );
};

export default Engine;

const styles = StyleSheet.create({
  bimg: {
    width: "100%",
    flexDirection: "row",
  },
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 7,
    alignSelf: "center",
    paddingHorizontal: 20,
  },
  container: {
    flexDirection: "row",
  },
  img: {
    width: 120,
    height: 200,
  },
});
