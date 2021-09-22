import React from 'react';
import { StyleSheet, Image, Text, ScrollView, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { Entypo } from "@expo/vector-icons";
import Carinfo from "../components/Carinfo";

function Buysell( {navigation} ) {
    return (
        // <View style={styles.fake}>
        //     <Carinfo navigation={navigation}/>
        <View style={styles.View} >
        <Text style={styles.heading}>{" Buy & Sell a Car "}</Text>
        <Image style={styles.img} source={require("../images/Buysell/Snap.png") } />
        <Text style={styles.heading2}>{" Sell your vehicle "}</Text>
        <Text style={styles.click}>{" On a single click! "}</Text>
        <View style={styles.contact}>
            <View style={{flexDirection:"row"}}>
        <Entypo name="dot-single" size={24} color="black" />
        <Text style={styles.subheading}>{" Reach our 1000+ Verified Customers "}</Text>
        </View>
        <View style={{flexDirection:"row"}}>
        <Entypo name="dot-single" size={24} color="black" />
        <Text style={styles.subheading}>{" No agent fees "}</Text>
        </View>
        <View style={{flexDirection:"row"}}>
        <Entypo name="dot-single" size={24} color="black" />
        <Text style={styles.subheading}>{" Free Listing for Servizzy Customers "}</Text>
        </View>
        <View style={{flexDirection:"row"}}>
        <Entypo name="dot-single" size={24} color="black" />
        <Text style={styles.subheading}>Live listing & verified end users</Text>
        </View>
        </View>
        <View style={styles.option}>
            <View>
            {/* <Text style={styles.imgheading}>{" Buy your Car "}</Text> */}
                <Image style={styles.img2} source={require("../images/Buysell/Buy_Car.png") } />
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("App", { screen: "Buy a car" })} >
                    <Text style={styles.btntxt}>
                        Click Here
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
            {/* <Text style={styles.imgheading}>{" Sell your Car "}</Text> */}
                <Image style={styles.img2} source={require("../images/Buysell/Sell_Car.png")} />
                 <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("App", { screen: "Sell Your Car" })} >
                    <Text style={styles.btntxt}>
                        Click Here
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
        // </View>
    )
  };

  const styles = StyleSheet.create({
      fake:{
          flex:1
      },
    heading: {
        fontSize:35,
        fontWeight:"500",
        alignSelf:"flex-start",
        marginTop:15
    },
    heading2: {
        fontSize:30,
        fontWeight:"500",
        alignSelf:"flex-start",
        marginTop:50,
        fontStyle:"italic",
    },
    subheading: {
        fontSize:17,
        // fontWeight:"600",
        fontStyle:"italic",
    },
    imgheading: {
        fontSize:17,
        fontWeight:"700",
        alignSelf:"center"
    },
    click: {
        fontSize:35,
        fontWeight:"700",
        fontStyle:"italic",
    },
    View: {
        flex:1,
        marginLeft:20
    },
    img:{
        width:180,
        height:50,        
        marginTop:15,
    },
    img2:{
        width:160,
        height:110,        
        marginTop:5,
    },
    contact:{
        marginVertical:35
    },
    option: {
        flexDirection:"row"
    },
    btn:{
        alignSelf:"center",
        justifyContent:"center",
        backgroundColor:"#797D7F",
        width:90,
        height:30,
        padding:5,        
        borderRadius:5,
        marginTop:5,
    },
    btntxt: {
        alignSelf:"center",
        color:"#fff",
        // fontWeight:"bold",
        fontSize:15
    },
  });

  export default Buysell;