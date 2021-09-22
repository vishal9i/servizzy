import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const Workshop = ( { navigation } ) => {
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
          <Text style={{ fontSize: 23 }}>Servizzy</Text>
          <Text style={{ fontSize: 23 }}>Workshops</Text>
          {/* <Text style={{ color: "gray" }}>Find Spare Parts near you</Text> */}
        </View>
        <TouchableOpacity 
        style={styles.button}
        onPress={()=>navigation.navigate('App', {screen: 'Servizzy Workshops Near You'})}
        >
          <Text style={{ color: "white" }}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../images/services/items/1.png")}
          style={styles.img}
        />
        <View>
          <Text>Servizzy</Text>
          <Text>Workshops</Text>
          <Text>Near You</Text>
        </View>
      </View>
    </View>
  );
};

export default Workshop;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f07102",
    borderRadius: 7,
    padding: 10,
    paddingHorizontal: 20,
  },
  container: {
    padding: 20,
    backgroundColor: "white",
  },
  img: {
    width: 150,
    height: 150,
    marginRight: 10,
  },
});
