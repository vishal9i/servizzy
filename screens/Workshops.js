import React, {useState,useEffect} from "react";
import { StyleSheet, Image, Text, ScrollView, TouchableOpacity, View } from "react-native";


function Workshops(){
    return (
        <View style={{margin:4}}>
        <ScrollView style={styles.View}> 
           <View style={styles.card}>
      <Image
        style={styles.image}
        source={require('../images/cars/workshop1.jpg')}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Servizzy South Delhi Centre</Text>
        <Text style={styles.subTitle}>
          Plot no. 843/1 E2 Vasant Kunj opp CNG pump near Ryan International School - New Delhi
        </Text>
        <View style={styles.detailsContainer2}>
          <TouchableOpacity 
        style={styles.button}
        >
          <Text style={{ color: "#000",fontWeight:"bold" }}>Contact - 8286 777 555</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={require('../images/cars/workshop2.jpg')}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Servizzy Delhi MG Road Centre</Text>
        <Text style={styles.subTitle}>
          Plot no - 374 | Metro pillar no 9B, Behind Kapoor lamps, Sultanpur, Main MG Road, New Delhi
        </Text>
        <View style={styles.detailsContainer2}>
          <TouchableOpacity 
        style={styles.button}
        >
          <Text style={{ color: "#000",fontWeight:"bold" }}>Contact - 8445 844 451</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={require('../images/cars/workshop3.jpg')}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Servizzy Gurugram Centre</Text>
        <Text style={styles.subTitle}>
          Plot no 21 | Sector -61 Golf course extn road, Sector -65 Gurugram, Haryana -122001
        </Text>
        <View style={styles.detailsContainer2}>
          <TouchableOpacity 
        style={styles.button}
        >
          <Text style={{ color: "#000",fontWeight:"bold" }}>Contact - 8286 555 333</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
            </ScrollView>
            </View>
            
            )
};
const styles = StyleSheet.create({
    card: {
        padding: 10,
        backgroundColor: "#fff",
        marginBottom: 2,
        overflow: "hidden",
        alignItems: "flex-start",
        flexDirection: "row",
      },
      detailsContainer: {
        padding: 20,
        flex: 1,
      },
      detailsContainer2: {
        maxWidth: "100%",
        flex: 1,
        paddingTop: 8,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      image: {
        width: "31%",
        height: 90,
        borderRadius: 10,
      },
      title: {
        marginTop: -20,
        fontWeight: "bold",
      },
      subTitle: {
        color: "#99A3A4",
        fontSize:12,
        // width:"100%",
      },
      price: {
        color: "#000",
        fontWeight: "bold",
      },
      save: {
        alignItems: "center",
        padding: 10,
        backgroundColor: "#000",
        borderRadius: 7,
        width:"40%",
        marginTop:"12%",
      },
      text:{
        alignSelf:"center",
        color:"#fff",
        fontSize:20,
        // alignSelf:"center",
        // marginTop:"3%",
        marginLeft:10
      },
      button: {
        backgroundColor: "#E6EBEB",
        borderRadius: 7,
        padding: 10,
        // paddingHorizontal: 20,
      },
  });

export default Workshops;