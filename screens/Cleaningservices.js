import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
// import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import Servcard from "../components/Servcard";
import Cleaning from "../Utils/Cleaning";
import Carinfo from "../components/Carinfo";

const Cleaningservices = ({ navigation }) => {
  const [apidata, setapidata] = useState([]);
  const [cardata, setcardata] = useState();
  const getcardata = async () => {
    const token = await AsyncStorage.getItem("token");

    fetch("https://digi-servizzy-backend.herokuapp.com/api/get-car-details", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        userid: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // setcardata(data.data);
        getdata({
          brandName: data.data[0].brandName,
          modelName: data.data[0].modelName,
          fuelType: data.data[0].fuelType,
        });
        console.log(data.data.modelName);
      });
  };

  const getdata = ({ brandName, modelName, fuelType }) => {
    console.log(brandName, modelName, fuelType);
    fetch("https://digi-servizzy-backend.herokuapp.com/api/get-car-cleaning-pack", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        brandName: brandName,
        brandModel: modelName,
        fuelType: fuelType,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data);
        // setapidata(data.data);
        // console.log(data.data);
        const filterdata = data.data.filter((x) => Object.keys(Cleaning).includes(x.title))
        setapidata(filterdata);
      });
  };

  useEffect(() => {
    getcardata();
  }, []);
  console.log(cardata);
  return (
    <View style={{marginBottom:59}}>
      {/* <View style={styles.card}>
              <Text>Gold service </Text> */}
      {/* </View> */}
      <Carinfo navigation={navigation}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        {apidata.map((item, index) => {
          return (
            <Servcard
              srvid={item._id}
              name={item.title}
              duration={item.warnTwo}
              time={item.time}
              warranty={item.warnOne}
              services="Includes 9 Services"
              // image={require("../images/serv/1.png")}
              image={Cleaning[item.title]}
              price={item.price}
              options={item.options}
              navigation={navigation}
              key={index}
            />
          );
        })}
        {/* <Servcard
              name="Prime Service"
              duration="Every 10000 Kms/3 Months"
              time="Takes 6 hours"
              warranty="1 Month warranty"
              services="Includes 15 Services"
              // image={require('../images/serv/2.png')}
              price="31.5"
              navigation={navigation}
            /> */}
             <Text style={{ fontWeight: "bold",width:"84%" , alignSelf:"center",marginBottom:8}}>Are you facing an issue ? Call our 24/7 assistance - 8286 777 555</Text>
      </ScrollView>
    </View>
  );
};
export default Cleaningservices;

const styles = StyleSheet.create({});
