import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  FlatList,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Topservices from "../components/Topservices";
import Trendingservices from "../components/Trendingservices";
import Indoor from "../components/Indoor";
import Tracker from "../components/Tracker";
import Outdoor from "../components/Outdoor";
import Engine from "../components/Engine";
import Bdriver from "../components/Bdriver";
import Workshop from "../components/Workshop";
import Search from "../components/Search";
import Carinfo from "../components/Carinfo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { withTheme } from "react-native-paper";
import {
  widthPercentageToDP as wt,
  heightPercentageToDP as ht,
} from "react-native-responsive-screen";
import SearchInput, { createFilter } from "react-native-search-filter";
// import { data } from '../datastructure';

const KEYS_TO_FILTERS = [
  { name: "Periodic Service" },
  { name: "Mechanical service" },
  { name: "Paint Job" },
  { name: "Cleaning services" },
  { name: "Battery Packs" },
  { name: "Windshield Job" },
  { name: "Car Inspection" },
  { name: "Wheel Balance & Alinement" },
  { name: "Insurence Claim" },
  { name: "Ac Servicing" },
  { name: "Sell car" },
  { name: "Buy car" },
];
const key = ["name"];

export default function Home({ navigation }) {
  const [car, setCar] = React.useState("");
  const [searchresult, setSearchresult] = React.useState([]);
  const [model, setmodel] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setmodel(true);
    }, 30000);
  }, []);

  const searchHandler = (prop) => {
    setCar(prop);
    if (car !== "") {
      const newBrandList = KEYS_TO_FILTERS.filter((name) => {
        return Object.values(name)
          .join(" ")
          .toLocaleLowerCase()
          .includes(car.toLocaleLowerCase());
      });
      setSearchresult(newBrandList);
    } else {
      setSearchresult([]);
    }
  };

// useEffect(()=>{
//   if (isFocused){}
//   },[isFocused])
  
  return (
    <View style={{ paddingTop: "10%" }}>
      <Modal animationType={"slide"} visible={model} transparent={true}>
    <View
      style={{
        width: "80%",
        backgroundColor:"#FD6902",
        height: "60%",
        alignSelf: "center",
        marginTop: "20%",
        borderRadius: 10,
        elevation: 5,
      }}
    >
      <TouchableOpacity onPress={() => setmodel(!model)}>
      </TouchableOpacity>
      <View style={styles.MView2}>
             <View style={styles.Mheading}> 
                 <Text style={styles.Mheading}>{"Not sure about"}</Text>
                 <Text style={styles.Mheading}>{"your car problem "}</Text>
            </View>
             <Text style={styles.Mheadingmark}>{"?"}</Text>
        
         <View style={{alignItems: 'center'}}>
             <View style={styles.Mheader}>
                <TouchableOpacity onPress={() => setmodel(!model)}>
                   <Image
                    source={require('../images/Problem/x.png')}
                    style={{height: 30, width: 30,borderRadius:15 }}
                    />
                </TouchableOpacity>
            </View>
        </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../images/Problem/expert.png')}
            style={{height: 150, width: 150, marginVertical: 10}}
          />
        </View>
        <View>
                <Text style={styles.Mheading}>{"Our experts will get"}</Text>
                <Text style={styles.Mheading}>{"in touchwith you ! "}</Text>
            </View>
            <TouchableOpacity style={styles.Mbtn}
             onPress={() => navigation.navigate("App", { screen: "Instant Booking" })} >
                <Text style={styles.Mbtntxt}>
                Instant Booking
                </Text>
            </TouchableOpacity>
            </View>
  </Modal>
      <ScrollView>
        <View style={styles.topcontainer}>
          <View style={styles.logobar}>
            <Image
              source={require("../images/Logo/Logo.png")}
              style={{ width: 130, height: 80 }}
            />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("App", { screen: "Cart" })}
              >
                <Image
                  source={require("../images/20.png")}
                  style={{ width: 40, height: 40, marginRight: 10,marginBottom:15 }}
                />
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={() => navigation.navigate("App", { screen: "Account" })}
              >
                <Image
                  source={require("../images/19.png")}
                  style={{ width: 40, height: 40 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Carinfo navigation={navigation}/>
        {/* <Search
          searchTerm={searchTerm}
          changeWord={(word) => setsearchTerm(word)}
        /> */}
        <View style={styles.container}>
          <View style={styles.searchbar}>
            <TextInput
              placeholder="Search"
              style={styles.input}
              onChangeText={(text) => searchHandler(text)}
            />
            {/* <SearchInput
              onChangeText={(term) => {
                setsearch(term);
              }}
              style={styles.input}
              placeholder="Type a message to search"
            /> */}
            <TouchableOpacity
              style={{
                backgroundColor: "#f07102",
                paddingHorizontal: 17,
                paddingVertical: 7,
                borderTopRightRadius: 7,
                borderBottomRightRadius: 7,
              }}
            >
              <Ionicons
                name="md-search-sharp"
                size={24}
                color="white"
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          {searchresult == "undefined"
            ? null
            : searchresult.map((item) => {
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("App", { screen: `${item.name}` })
                    }
                    style={{
                      alignSelf: "center",
                      display: car == "" ? "none" : null,
                      marginVertical: 10,
                    }}
                  >
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                );
              })}
        </View>

        {/* <ScrollView horizontal={true}>
          <View style={{ flexDirection: 'row' }}>
            {data.map((i) => {
              return <Text style={{ fontSize: 20 }}>{i.lastUpdated}</Text>;
            })}
          </View>
        </ScrollView> */}
        <Topservices navigation={navigation} />
        <Trendingservices navigation={navigation} />
        <Indoor navigation={navigation} />
        <Tracker navigation={navigation} />
        <Outdoor navigation={navigation} />
        <Engine navigation={navigation} />
        {/* <Bdriver /> */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Tab", { screen: "Store" })}
        >
          <Image
            source={require("../images/serv/store.jpg")}
            style={{ width: wt(100), height: ht(20), marginTop: "10%" }}
          />
        </TouchableOpacity>
        <Workshop navigation={navigation}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  topcontainer: {
    backgroundColor: "black",
    height: "3%",
  },
  logobar: {
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(33, 28, 28, 1)",
    borderRadius: 8,
  },
  container: {
    backgroundColor: "white",
    padding: 5,
  },
  searchbar: {
    backgroundColor: "white",
    borderColor: "#f07102",
    borderWidth: 1,
    borderRadius: 7,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    paddingLeft: 10,
  },
  icon: {
    alignSelf: "center",
  },
  Mheader: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
    // color:"#fff",
  },
  Mheading: {
    fontSize:25,
    marginLeft: 10,
    fontWeight:"700",
    color:"#fff",
    alignSelf:"center",
    // marginTop:10
},
Mheadingmark:{
    fontSize:80,
    color:"#fff",
},
MView2:{
    flexDirection:"row",
},
Mbtn:{
    alignSelf:"center",
    justifyContent:"center",
    backgroundColor:"#000",
    width:150,
    height:50,
    padding:5,        
    borderRadius:8,
    marginVertical:8
    // color:"#000"
},
Mbtntxt: {
    alignSelf:"center",
    color:"#fff",
    fontWeight:"bold",
    fontSize:15
},
});
