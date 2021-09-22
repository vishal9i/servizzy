import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wt,
  heightPercentageToDP as ht,
} from "react-native-responsive-screen";

const Trendingservices = ({ navigation }) => {
  const [more, setmore] = useState(false);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginRight: 20,
        }}
      >
        <Text style={{ fontSize: 23, marginLeft: 10 }}>Other Services</Text>
        <TouchableOpacity onPress={() => setmore(!more)}></TouchableOpacity>
      </View>
      <View style={styles.items}>
        <TouchableOpacity
          style={styles.itemstyle1}
          onPress={() =>
            navigation.navigate("App", { screen: "Battery Replacement" })
          }
        >
          <Image
            source={require("../images/services/6.png")}
            style={styles.icons}
          />
          <Text style={styles.text}>Battery</Text>
          <Text style={styles.text}>Replacement</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemstyle1}
          onPress={() =>
            navigation.navigate("App", { screen: "Windshield Replacement" })
          }
        >
          <Image
            source={require("../images/services/7.png")}
            style={styles.icons}
          />
          <Text style={styles.text}>Windshield</Text>
          <Text style={styles.text}>Replacement</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemstyle1}
          onPress={() =>
            navigation.navigate("App", { screen: "Car Inspection" })
          }
        >
          <Image
            source={require("../images/services/8.png")}
            style={styles.icons}
          />
          <Text style={styles.text}>Car</Text>
          <Text style={styles.text}>Inspection</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemstyle1}
          onPress={() =>
            navigation.navigate("App", {
              screen: "Wheel Balance & Alignment",
            })
          }
        >
          <Image
            source={require("../images/services/25.png")}
            style={{
              width: wt(12),
              height: ht(6),
              marginTop: ht(1.5),
              marginHorizontal: wt(1),
              marginBottom: ht(1),
            }}
          />
          <Text style={styles.text}>Wheel Balance</Text>
          <Text style={styles.text}>{"&"} Alignment</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.items}>
        <TouchableOpacity
          style={styles.itemstyle}
          onPress={() =>
            navigation.navigate("App", {
              screen: "Insurance Claim",
            })
          }
        >
          <Image
            source={require("../images/services/10.png")}
            style={styles.icons}
          />
          <Text style={styles.text}>Insurance</Text>
          <Text style={styles.text}>Claims</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemstyle}
          onPress={() => navigation.navigate("App", { screen: "Buy & Sell" })}
        >
          <Image
            source={require("../images/services/11.png")}
            style={styles.icons}
          />
          <Text style={styles.text}>Buy/Sell</Text>
          <Text style={styles.text}>Car</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemstyle}
        onPress={() => navigation.navigate("App", { screen: "Electrical Repairs" })}
        >
          <Image
            source={require("../images/services/12.png")}
            style={styles.icons}
          />
          <Text style={styles.text}>Electrical</Text>
          <Text style={styles.text}>Repairs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemstyle}
          onPress={() => navigation.navigate("App", { screen: "Pay Your Challan" })}
        >
          <Image
            source={require("../images/services/5.png")}
            style={styles.icons}
          />
          <Text style={styles.text}>Pay your</Text>
          <Text style={styles.text}>Challan</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.items]}>
        <TouchableOpacity
          style={styles.itemstyle}
          onPress={() => navigation.navigate("App", { screen: "AC Servicing" })}
        >
          <Image
            source={require("../images/services/26.png")}
            style={styles.icons2}
          />
          <Text style={styles.text}>AC</Text>
          <Text style={styles.text}>Servicing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemstyle} onPress={() => navigation.navigate("App", { screen: "Insurance Alerts" })}>
          <Image
            source={require("../images/services/27.png")}
            style={styles.icons2}
            
          />
          <Text style={styles.text}>Insurance</Text>
          <Text style={styles.text}>Alert</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemstyle}
          onPress={() => navigation.navigate("Tab", { screen: "Store" })}
        >
          <Image
            source={require("../images/services/28.png")}
            style={styles.icons2}
          />
          <Text style={styles.text}>Servizzy </Text>
          <Text style={styles.text}>Store</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemstyle} onPress={() => navigation.navigate("App", { screen: "Instant Booking" })}>
          <Image
            source={require("../images/services/29.png")}
            style={styles.icons2}
          />
          <Text style={styles.text}>Instant</Text>
          <Text style={styles.text}>Booking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Trendingservices;

const styles = StyleSheet.create({
  container: {},
  icons: {
    width: wt(17),
    height: ht(8),
  },
  items: {
    flexDirection: "row",
    marginTop: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: { fontSize: 10 },
  icons2: {
    height: ht(5),
    width: wt(11.5),
    marginBottom: 15,
    marginHorizontal: 10,
  },
  itemstyle: {
    alignItems: "center",
    padding: wt(1),
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 7,
    marginHorizontal: wt(1),
    elevation: 5,
    backgroundColor: "#fff",
    // alignSelf: "stretch",
  },
  itemstyle1: {
    alignItems: "center",
    padding: wt(1),
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 7,
    marginHorizontal: wt(1),
    elevation: 5,
    backgroundColor: "#fff",
  },
});
