import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useState} from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import { Button, TextInput } from 'react-native-paper';
import Carinfo from "../components/Carinfo";

function Problem({navigation}){
    const [number, setNumber] = React.useState("");
  const [Name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [car_no, setCar_no] = React.useState("");
  const [car_model, setCar_model] = React.useState("");
  const [problem, setProblem] = React.useState("");
//   const [phone, setPhone] = React.useState("");
    const prob = async () => {
        const token = await AsyncStorage.getItem("token");
        console.log(token);
        fetch("https://digi-servizzy-backend.herokuapp.com/api/problem", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            userid: token,
          },
          body: JSON.stringify({
            // number: number,
            name: Name,
            email: email,
            phone:number,
            car_no:car_no,
            car_model:car_model,
            problem:problem
          }),
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          data.success == true
            ? navigation.navigate("Tab", { screen: "Home" })
            : alert("something went wrong!");
        });
              
      };

    return (
      <View style={{marginBottom:59}}>
        <Carinfo navigation={navigation}/>
        <ScrollView style={styles.View}>
            <View style={styles.View2}>
            <View>
            <Text style={styles.heading}>{"Not sure about"}</Text>
            <Text style={styles.heading}>{"your car problem "}</Text>
            </View>
            <Text style={styles.headingmark}>{"?"}</Text>
            </View>
            <Image style={styles.image} source={require("../images/Problem/expert.png") } />
            <Text style={styles.heading2}>{"Our experts will get in touch ! "}</Text>
            <TextInput 
            value={Name}
            style={styles.input} 
            onChangeText={(text) => setName(text)}
            mode="outlined"
            label="Name"
            autoCapitalize="characters"
            />
            <TextInput
            value={email}
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            label="Email"
            mode="outlined"
            >
            </TextInput>
            <TextInput
            value={number}
            style={styles.input}
            onChangeText={(text) => setNumber(text)}
            mode="outlined"
            label="Phone No."
            keyboardType="numeric"
            />
            <TextInput
            value={car_no}
            style={styles.input}
            onChangeText={(text) => setCar_no(text)}
            mode="outlined"
            label="Car No."
            autoCapitalize="characters"
            >
            </TextInput>
            <TextInput
            value={car_model}
            style={styles.input}
            onChangeText={(text) => setCar_model(text)}
            mode="outlined"
            label="Car model"
            autoCapitalize="characters"
            >
            </TextInput>
            <TextInput
            value={problem}
            style={styles.input}
            onChangeText={(text) => setProblem(text)}
            autoCapitalize="characters"
            mode="outlined"
            label="Explain us about your car problem !"
            >
            </TextInput>
            <Button style={styles.btn} mode="contained" onPress={() => prob()}> Get a quote </Button>
            </ScrollView>
            </View>
            )
};
const styles = StyleSheet.create({
    View: {
        marginTop:10,
        marginBottom:10
    },
    View2:{
        flexDirection:"row",
        alignItems:"center"
    },
    heading: {
        fontSize:25,
        marginLeft: 25,
        fontWeight:"700"
    },
    heading2: {
        fontSize:22,
        marginLeft: 25,
        marginRight:25,
        fontWeight:"600",
        marginBottom:10,
        fontWeight:"bold"
    },
    input: {
        height:45,
        marginHorizontal:25,
      },
    image: {
        // alignSelf:"center",
        width:"95%",
        height:180
    },
    headingmark:{
        fontSize:80,
        color:"#FE7203",
    },
    btn:{
        alignSelf:"center",
        backgroundColor:"#FE7203",
        width:200,
        height:45,
        padding:5,       
        borderRadius:8,
        marginTop:10,
    },
  });

export default Problem;