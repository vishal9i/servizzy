import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

const Addresscard = ({ color, address, getadd }) => {
  const [Model, setModel] = useState(false);
  let isFocused = useIsFocused();
  const styles = StyleSheet.create({
    card: {
      backgroundColor: "white",
      padding: 10,
      margin: 10,
      marginHorizontal: 20,
      borderRadius: 10,
      elevation: 5,
      paddingHorizontal: 20,
      borderWidth: 1,
      borderColor: color,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    save: {
      alignItems: "center",
      padding: 10,
      backgroundColor: "#000",
      borderRadius: 7,
      width: "40%",
      marginTop: "12%",
    },
    text: {
      alignSelf: "center",
      color: "#fff",
      fontSize: 20,
      // alignSelf:"center",
      // marginTop:"3%",
      marginLeft: 10,
    },
  });

  const del = async () => {
    const token = await AsyncStorage.getItem("token");
    // console.log(token);
    // console.log(address);
    fetch("https://digi-servizzy-backend.herokuapp.com/api/user-address", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        userid: token,
      },
      body: JSON.stringify({
        address: address,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success == true) {
          getadd();
          setModel(false);
        } else {
          alert(data.message);
        }
      });
  };
  // useEffect(()=>{
  //   if (isFocused){
  //     del();
  //   }
  //   },[isFocused])
  return (
    <View>
      <View style={styles.card}>
        <Modal animationType={"slide"} visible={Model} transparent={true}>
          <View
            style={{
              width: "80%",
              backgroundColor: "#FD6902",
              height: "35%",
              alignSelf: "center",
              marginVertical: "68%",
              borderRadius: 10,
              paddingTop: 10,
              paddingRight: 5,
              alignSelf: "center",
              paddingBottom: "15%",
              // alignItems:"center",
            }}
          >
            <View>
              <TouchableOpacity onPress={() => setModel(false)}>
                <Image
                  source={require("../images/Problem/x.png")}
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    alignSelf: "flex-end",
                  }}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.text}> Are you sure </Text>
            <Text style={styles.text}> you want to delete this</Text>
            <Text style={styles.text}> address ?</Text>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-around",
                elevation: 5,
              }}
            >
              <TouchableOpacity style={styles.save} onPress={() => del()}>
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
                >
                  YES
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.save}
                onPress={() => setModel(false)}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
                >
                  NO
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Text style={{ width: "80%" }}>{address}</Text>
        <TouchableOpacity onPress={() => setModel(true)}>
          <AntDesign name="delete" size={22} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Addresscard;
