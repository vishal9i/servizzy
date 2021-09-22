import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Mechanicalservices from "../screens/Mechanicalservices";
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  widthPercentageToDP as wt,
  heightPercentageToDP as ht,
} from "react-native-responsive-screen";

const Topservices = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 23, marginHorizontal: wt(2) }}>
        Core Services
      </Text>
      <View style={styles.items}>
        <View>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate("App", { screen: "Car Services" })}
        >
          
          <Text style={styles.text}>Car Service</Text>
          <Text style={styles.subtext}>Choose your Package</Text>
          <Image
            source={require("../images/services/im1.png")}
            style={styles.icons}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() =>
            navigation.navigate("App", { screen: "Mechanical Services" })
          }
        >
          
          <Text style={styles.text}>Mechanical</Text>
          <Text style={styles.text}>Services</Text>
          <Text style={styles.subtext}>Choose your Service</Text>
          <Image
            source={require("../images/services/im3.png")}
            style={styles.icons}
          />
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate("App", { screen: "Paint Job" })}
        >
          
          <Text style={styles.text}>Paint Job</Text>
          <Text style={styles.subtext}>Choose your Service</Text>
          <Image
            source={require("../images/services/im4.png")}
            style={styles.icons}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() =>
            navigation.navigate("App", { screen: "Cleaning & Detailing" })
          }
        >
    
          <Text style={styles.text}>Cleaning &</Text>
          <Text style={styles.text}>Detailing</Text>
          <Text style={styles.subtext}>Choose your Package</Text>
          <Image
            source={require("../images/services/im2.png")}
            style={styles.icons}
          />
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Topservices;

const styles = StyleSheet.create({
  container: {
    padding: wt(0.5),
  },
  items: {
    flexDirection: "row",
    marginVertical: 3,
    marginHorizontal: 5,
    justifyContent:"space-around",
  },
  icons: {
    width: wt(18),
    height: ht(8),
    alignSelf:"flex-end"
  },
  text: {
    color: "#000",
    // fontSize:20
    fontWeight:"bold"
  },
  subtext:{
    color:"gray",
    fontSize:10,
  },
  box: {
    // alignItems: "center",
    // borderWidth: 1,
    padding: wt(1),
    // marginHorizontal: wt(1),
    marginTop:10,
    borderRadius: 7,
    elevation: 5,
    backgroundColor: "#fff",
    // borderColor: "gray",
    width:160,
    // shadowOpacity:100,
    shadowColor:"gray"

  },
});
