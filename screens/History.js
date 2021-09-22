import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Carinfo from "../components/Carinfo";
import Historycard from "../components/Historycard";
import { useIsFocused } from "@react-navigation/native";
import { Cars } from "../data/carsdata";

const History = ({ navigation }) => {
  const [apidata, setapidata] = useState([]);
  const [brand, setBrand] = useState();
  const [name, setName] = useState();
  const [fuel, setFuel] = useState();
  const [img, setImg] = useState();
  let isFocused = useIsFocused();
  const getorderhistory = async () => {
    const token = await AsyncStorage.getItem("token");
    fetch("https://digi-servizzy-backend.herokuapp.com/api/order-history", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        userid: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setapidata(data);
      });
      console.log(data);
  };

  useEffect(() => {
    getorderhistory();
  }, []);
  // console.log(apidata);

  const getdata = async () => {
    const token = await AsyncStorage.getItem("token");
    // console.log(token);
    fetch("https://digi-servizzy-backend.herokuapp.com/api/get-car-details", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        userid: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("we need",data.data.modelImage);
        const brandindex = Cars.data.filter((i) =>
          Object.values(i).includes(data.data[0].brandName)
        );
        // const dataindex = Cars.data.indexOf(brandindex);

        const modelindex = brandindex[0].models.filter((i) =>
          Object.values(i).includes(data.data[0].modelName)
        );

        setImg(modelindex[0].modelImage);
      });
  };
  useEffect(() => {
    getdata();
  }, []);
  useEffect(()=>{
    if (isFocused){
      getdata();
    }
    },[isFocused])


  return (
    <View>
      <View
        style={[
          styles.container,
          { display: apidata.length == 0 ? null : "none" },
        ]}
      >
        <Image source={require("../images/history.jpg")} style={styles.img} />
        <View style={styles.msg}>
          <Text style={{ fontSize: 30 }}>Sorry,</Text>
          <Text style={{ color: "gray", fontSize: 15 }}>
            It seems like you don't have any ongoing service for your car.
          </Text>
        </View>
        <TouchableOpacity style={styles.book}>
          <Text
            style={{
              fontSize: 20,
              color: "white",
              alignSelf: "center",
              fontWeight: "bold",
            }}
          >
            BOOK A SERVICE
          </Text>
        </TouchableOpacity>
      </View>
    <View>
        {/* <View style={{ backgroundColor: "#ff8127" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginVertical: "10%",
            }}
          >
            <View style={styles.circle}></View>
            <View>
              <Text style={{ color: "white", fontSize: 25 }}>
                {apidata.length == 0
                  ? "USER NAME"
                  : apidata[0].userDetails.name ?  apidata[0].userDetails.name:'USER NAME'}
              </Text>
              <Text>
                {apidata.length == 0 
                  ? "Phone"
                  : apidata[0].userDetails.phoneNumber ? apidata[0].userDetails.phoneNumber:'Mobile No.'}
              </Text>
            </View>
          </View>
        </View> */}





        {/* <View
        style={[
          styles.container,
          { display: apidata.length == 0 ? null : "none" },
        ]}
      > */}


        <View style={{height:100,backgroundColor:"#fff"}}>
        <Image
        // source={require("../images/welcome/Logo.png")} 
        source={img}
        // style={{ width: 80, height: 50 }}
        style={{height:100,width:150,backgroundColor:"#fff",alignSelf:"center"}}
        />
        </View>
        <View style={styles.carcard}>
          <Carinfo navigation={navigation}/>
        </View>
        <View style={{ marginHorizontal: 20 }}>
          <Text>Service History</Text>
          <Text>Total Services Availed : {apidata.length}</Text>
        </View>
        <View style={{ paddingBottom: "100%" }}>
          <ScrollView style={{ marginBottom:290}}>
            {apidata.map((item, index) => {
              return (
                <Historycard
                  key={index}
                  amount={item.total}
                  date={item.createdAt}
                  address={item.pickUpAddress}
                  navigation={navigation}
                  orderId={item._id}
                  serdate ={item.serviceDate}
                  sertyp={item.serviceType}
                  invoiceamount={item.invoiceAmount}
                  odometerReading={item.odometerReading}
                  dealerName={item.dealerName}
                  invoicePDF={item.invoicePDF}
                  orderStatus={item.orderStatus}
                  brandName={item.carDetails.suc.brandName}
                  modelName={item.carDetails.suc.modelName}
                  fuelType={item.carDetails.suc.fuelType}
                  createDate={item.createDate}
                  pickUpDate={item.pickUpDate}
                  pickUpSlot={item.pickUpSlot}
                />
              );
            })
          }
          </ScrollView>
        </View>
      </View>
      {/* </View> */}
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    // flex:1,
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: "white",
    height: "100%",
    borderRadius: 10,
    elevation: 5,
  },
  img: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  msg: {
    marginVertical: 10,
    marginHorizontal: 25,
  },
  book: {
    backgroundColor: "#f07102",
    marginHorizontal: 40,
    paddingVertical: 10,
    marginVertical: 20,
    borderRadius: 7,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    marginHorizontal: 10,
    backgroundColor: "#e9e9e9",
    borderColor: "white",
  },
  carcard: {
    borderRadius: 7,
    margin: 10,
    overflow: "hidden",
    elevation: 5,

  },
});
