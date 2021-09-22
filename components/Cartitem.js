import React, {useState,useEffect} from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CounterInput from "react-native-counter-input";
import All from '../Utils/All';

const Cartitem = ({ name, amount, uid, serviceid, getcart,changeTotal }) => {
  const [no, setNo] = useState(1);
  // const [Price, setPrice] = useState(amount);
  const updatetotal=(prop)=>{
changeTotal(amount*prop)
  }
   
  const inc =() => {
    let newno = no+1
      setNo(newno)
      // setPrice(amount*no);
      // updatetotal(newno)
      changeTotal(parseInt(amount))
      console.log(typeof amount);
  }

  const dec =() => {
      if(no>1){
      setNo(no - 1)
      // setPrice(amount*no)
      changeTotal(-amount)
      }else{
          setNo(1)
      }
  }
  const deletehandler = () => {
    console.log(uid, serviceid);
    fetch("https://digi-servizzy-backend.herokuapp.com/api/remove-cart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        id: serviceid,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getcart();
      });
  };

 
  // console.log(name, amount);
  return (
    <View>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center",width:"50%" }}>
          <View style={styles.imgcontainer}>
            <Image
              // source={require("../images/serv/3.png")}
              source={All[name]}
              style={styles.img}
            />
          </View>
        <View >
            <Text style={{ marginBottom: 12, fontSize: 15 }}>{name}</Text>
            {/* <Text style={{ color: "gray" }}>INR {amount}</Text> */}
            {/* <CounterInput
            onChange={(counter) => {
              console.log("onChange Counter:", counter);
            }}
            horizontal={true}
            style={{ height: 25, width: 80 }}
            increaseButtonBackgroundColor="#f07102"
            decreaseButtonBackgroundColor="#f07102"
          /> */}

           <View style={styles.cont}>
            <TouchableOpacity style={styles.decr} onPress={()=>dec()}>
            <Text> - </Text>
            </TouchableOpacity>
            
            <Text style={styles.num}> {no} </Text>
            
            <TouchableOpacity style={styles.incr} onPress ={() => inc()}>
            <Text> + </Text>
            </TouchableOpacity>
        </View>

          </View>
        </View>
        <View style={{ alignItems: "center",width:"50%",marginLeft:39 }}>
          <Text style={{ color: "gray" }}>INR {amount*no}</Text>
          <TouchableOpacity onPress={() => deletehandler(uid, serviceid)}>
            <Text
              style={{
                color: "gray",
                marginTop: 20,
                marginLeft: 10,
                color: "red",
              }}
            >
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Cartitem;

const styles = StyleSheet.create({
  imgcontainer: {
    // backgroundColor: "rgba(33, 28, 28, 1)",
    // padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  img: {
    width: 75,
    height:60,
    borderRadius: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  cont:{
    flexDirection:"row"
},
incr:{
    // marginTop:150,
    backgroundColor:"orange",
    // alignSelf :"center",
    justifyContent:"center",
    width:30,
    height:25,
    alignItems:"center",
    borderRadius:5,
    fontSize:15
},
decr:{
    // marginTop:150,
    backgroundColor:"orange",
    // alignSelf :"center",
    width:30,
    height:25,
    alignItems:"center",
    borderRadius:5,
    justifyContent:"center",
},
num:{
    // marginTop:3,
    width:20,
    height:25,
    alignSelf:"center",
    marginLeft:5
}
});
