import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Cartitem from "../components/Cartitem";
import Carinfo from "../components/Carinfo";


const Cart = ({ navigation }) => {
  const [cartdata, setcartdata] = useState([]);
  const [amount, setamount] = useState(0);
  const [cartitems, setcartitems] = useState();
  const [total, settotal] = useState(0);
  const [phone , setPhone] = useState();
  const [name, setName] = useState();

  const getcart = async () => {
    const token = await AsyncStorage.getItem("token");
    fetch("https://digi-servizzy-backend.herokuapp.com/api/get-cart", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        userid: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setcartdata(data.data);
        let cartItems = [];
        data.data.map((i) =>
          cartItems.push({ name: i.serviceName, price: i.total })
        );
        setcartitems(cartItems);
        let amountarray = [];
        data.data.map((i) => amountarray.push(i.total));
        const famount = amountarray.reduce((a, b) => Number(a) + Number(b), 0);
        setamount(famount);
        settotal(famount);
        setPhone(data.phone);
        // console.log(data.data);
      });
  };
// console.log(cartdata)
  // let finalAmount = 0;
  // cartdata.forEach((element) => {
  //   finalAmount += element.total;
  // });
  // console.log(finalAmount);

  useEffect(() => {
    getcart();
  }, []);
  // console.log(cartitems);
  // console.log(cartdata[0].userId);

  const getdata = async () => {
    const token = await AsyncStorage.getItem("token");
    fetch("https://digi-servizzy-backend.herokuapp.com/api/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        userid: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setName(data.data.name);
        console.log("Require name",data.data.name);
        if(data.data.name)
        {
          navigation.navigate("App", {
            screen: "Preferred Slot",
            params: { amount:total, cartitems, userId: cartdata[0].userId,phone },
          })
        }
        else {
          navigation.navigate("App",{
            screen:"Profile",
          })
          alert("Please Complete All The Details")
        }
      });
  };
  // React.useEffect(() => {
  //   getdata();
  // }, []);
  

  return (
   <View style={styles.container}>
      <Carinfo navigation={navigation}/>
      <ScrollView>
        {cartdata.map((item, index) => {
          // console.log(item.total);
          return (
            <Cartitem
              name={item.serviceName}
              amount={item.total}
              uid={item.userId}
              serviceid={item._id}
              key={index}
              getcart={getcart}
              changeTotal={(n)=>settotal(total+n)}
            />
          );
        })}
      </ScrollView>
      {/* <Cartitem /> */}
      <View style={styles.bottomcontainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingVertical: 10,
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Total</Text>
            <Text>{cartdata.length} Items</Text>
          </View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>INR {total}</Text>
        </View>

        { cartdata.length<1 ? null : <TouchableOpacity
          style={styles.button}
          onPress={() =>getdata()
            // navigation.navigate("App", {
            //   screen: "Preferred Slot",
            //   params: { amount:total, cartitems, userId: cartdata[0].userId,phone },
            // })
          }
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            CHECKOUT
          </Text>
        </TouchableOpacity>}
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    justifyContent: "space-between",
  },
  bottomcontainer: {
    backgroundColor: "rgba(221, 220, 220, 1)",
    paddingTop: 10,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  button: {
    paddingVertical: 10,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#f07102",
  },
});
