import React, { useState, useEffect } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import Addresscard from "../components/Addresscard";
import Atmcard from "../components/Atmcard";
import Carinfo from "../components/Carinfo";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import { LogBox } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Checkout = ({ route, navigation }) => {
  const [selected, setselected] = useState();
  const [Name, setName] = useState();
  const [orderid, setorderid] = useState();
  const [Newadr, setNewadr] = useState([]);
  const [House, setHouse] = useState([]);
  const [Street, setStreet] = useState([]);
  const [City, setCity] = useState([]);
  const [Pin, setPin] = useState([]);
  const [State, setState] = useState([]);
  const { amount, cartitems, userId, phone } = route.params;
  const [visible, setVisible] = React.useState(false);
  const hideModal = () => setVisible(false);
  const [model, setmodel] = useState(false);
  const [addadrs, setaddadrs] = useState([]);
  const [oldadd, setoldadd] = useState();
  const [Colony, setColony] = useState([]);
  // const [address, setAdress] = useState();
  let isFocused = useIsFocused();

  const { date, time } = route.params;

  console.log(amount, userId);
  const cards = [
    { number: "*********123", image: require("../images/payment/Visa.png") },
    {
      number: "*********456",
      image: require("../images/payment/mastercard.png"),
    },
  ];

  const getadd = async () => {
    const token = await AsyncStorage.getItem("token");
    // console.log(token);
    fetch("https://digi-servizzy-backend.herokuapp.com/api/user-address", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        userid: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.data) {
          setaddadrs(data.data.address);
        } else {
          setaddadrs([]);
        }
      });
  };

  // console.log(Newadr);

  React.useEffect(() => {
    getadd();
  }, []);

  const edit = async () => {
    const token = await AsyncStorage.getItem("token");
    fetch("https://digi-servizzy-backend.herokuapp.com/api/user-address", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        userid: token,
      },
      body: JSON.stringify({
        oaddress: oldadd,
        naddress: selected,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.success) {
          alert(data.message);
          getadd();
        } else {
          alert(data.message);
        }
      });
  };

  const add = async () => {
    const token = await AsyncStorage.getItem("token");
    fetch("https://digi-servizzy-backend.herokuapp.com/api/add-address", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        userid: token,
      },
      body: JSON.stringify({
        address: `${House}, ${Colony}, ${Street}, ${City}, ${Pin}, ${State}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.success == true) {
          setHouse([])
          setStreet([])
          setCity([])
          setPin([])
          setState([])
          setColony([])
          getadd();
        } else {
          alert(data.message);
        }
      });
    setVisible(false);
  };
  // console.log("this is amount",amount)
  const getorder = () => {
    fetch(
      "https://digi-servizzy-backend.herokuapp.com/api/create-razorpay-order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          amount: amount,
        },
        // body: JSON.stringify({
        //   // amount:(amount * 100),
        // }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigation.navigate("App", {
          screen: "Confirm Payment",
          params: {
            amount: amount,
            orderid: data.data.id,
            cartitems,
            pickup: { selected },
            userId,
            date,
            time,
            phone,
          },
        });
      });
  };

  const Handelselect = (prop) => {
    setselected(prop);
    setoldadd(prop);
    setmodel(false);
  };

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
        console.log(data);
        setselected(data.data.pickUpAndDropAddress);
        setName(data.data.name);
      });
  };
  // console.log(token);

  React.useEffect(() => {
    getdata();
    LogBox.ignoreLogs(["Animated: `useNativeDriver`"]);
  }, []);
  // console.log(selected);
  useEffect(() => {
    if (isFocused) {
      getadd();
    }
  }, [isFocused]);


  const checkTextInput = () => {
    //Check for the Name TextInput
    if (House=="") {
      alert('Please enter all details');
      return;
    }
    //Check for the Email TextInput
    if (Colony=="") {
      alert('Please enter all details');
      return;
    }
    // if (Street=="") {
    //   alert('Please enter all details');
    //   return;
    // }
    if (City=="") {
      alert('Please enter all details');
      return;
    }
    if (Pin=="") {
      alert('Please enter all details');
      return;
    }
    if (State=="") {
      alert('Please enter all details');
      return;
    }
    //Checked Successfully
    //Do whatever you want
    add();
  };
  return (
    <View style={styles.container}>
      <Carinfo navigation={navigation} />
      <ScrollView>
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20 }}>Pickup Address</Text>
          <Text style={{ fontSize: 18, color: "gray", margin: 10 }}>
            Name : {Name}
          </Text>
          <Text style={{ fontSize: 18, color: "gray", margin: 10 }}>
            Mobile no. : {phone}
          </Text>
          <Text style={{ fontSize: 18, color: "gray", margin: 10 }}>
            Address
          </Text>
        </View>
        <View style={styles.card}>
          <TextInput
            onChangeText={(text) => setselected(text)}
            autoCapitalize="characters"
            value={selected}
            style={{ backgroundColor: "#fff" }}
          />

          {/* <Text onChangeText={(text) => setselected(text)}>{selected}</Text> */}
        </View>
        <TouchableOpacity style={styles.add} onPress={() => setmodel(true)}>
          <Text style={{ fontSize: 20, color: "gray" }}>
            Choose Your Address{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.add} onPress={() => edit()}>
          <Text style={{ fontSize: 20, color: "gray" }}>Edit Address </Text>
        </TouchableOpacity>

        <Modal
          visible={visible}
          onDismiss={hideModal}
          animationType="slide"
          // visible={model}
          transparent={true}
          // contentContainerStyle={containerStyle}
        >
          <ScrollView>
            <View
              style={{
                padding: 10,
                // backgroundColor: 'rgba(115, 115, 115, 1)',
                backgroundColor: "#ffff",
                //   justifyContent: 'center',
                marginTop: "2%",
                marginHorizontal: 10,
                borderRadius: 7,
                // justifyContent: 'space-between',
                flex: 1,
                height: "80%",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <Text style={{ color: "#000", marginLeft: 20, fontSize: 20 }}>
                  Enter Address here{" "}
                </Text>
                <TouchableOpacity onPress={() => setVisible(false)}>
                  <AntDesign name="closecircle" size={24} color="#000" />
                </TouchableOpacity>
              </View>
              <Text style={{ marginTop: 5 }}> House No. *</Text>
              <TextInput
                autoCapitalize="characters"
                label="House No."
                mode="flat"
                style={{
                  marginVertical: 12,
                  backgroundColor: "#fff",
                  borderWidth: 1,
                }}
                onChangeText={(text) => setHouse(text)}
              />
              <Text> Flat/Locality *</Text>
              <TextInput
                autoCapitalize="characters"
                label="Flat/Locality"
                mode="flat"
                style={{
                  marginVertical: 12,
                  backgroundColor: "#fff",
                  borderWidth: 1,
                }}
                onChangeText={(text) => setColony(text)}
              />
              <Text> Landmark </Text>
              <TextInput
                autoCapitalize="characters"
                label="Landmark"
                mode="flat"
                style={{
                  marginVertical: 12,
                  backgroundColor: "#fff",
                  borderWidth: 1,
                }}
                onChangeText={(text) => setStreet(text)}
              />
              <Text> City *</Text>
              <TextInput
                autoCapitalize="characters"
                label="City"
                mode="flat"
                style={{
                  marginVertical: 12,
                  backgroundColor: "#fff",
                  borderWidth: 1,
                }}
                onChangeText={(text) => setCity(text)}
              />
              <Text> Pin Code *</Text>
              <TextInput
                label="Pin Code"
                keyboardType="numeric"
                mode="flat"
                style={{
                  marginVertical: 12,
                  backgroundColor: "#fff",
                  borderWidth: 1,
                }}
                onChangeText={(text) => setPin(text)}
              />
              <Text> State *</Text>
              <TextInput
                autoCapitalize="characters"
                label="State"
                mode="flat"
                style={{
                  marginVertical: 12,
                  backgroundColor: "#fff",
                  borderWidth: 1,
                }}
                onChangeText={(text) => setState(text)}
              />
              <TouchableOpacity onPress={() => checkTextInput()} style={styles.done}>
                <Text
                  style={{ color: "#fff", fontSize: 20, alignSelf: "center" }}
                >
                  Save Address
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Modal>
        {/* <Addaddress /> */}
        {/* <View style={styles.cardcontainer}>
          <Text style={{ marginHorizontal: 15, fontSize: 20 }}>
            Debit,Credit,ATM cards
          </Text>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              marginHorizontal: 10,
              padding: 15,
              borderRadius: 10,
            }}
          >
          
            <Text>Add card +</Text>
          </TouchableOpacity>
          {cards.map((item, index) => {
            return (
              <Pressable onPress={() => setstatus(index)}>
                <Atmcard
                  name={item.number}
                  status={status == index ? "checked" : "unchecked"}
                  image={item.image}
                  key={index}
                  // info={(data) => console.log(data)}
                />
              </Pressable>
            );
          })}
        </View> */}
        <Modal animationType={"slide"} visible={model} transparent={true}>
          <ScrollView
            style={{
              width: "90%",
              backgroundColor: "#fff",
              height: "70%",
              alignSelf: "center",
              marginVertical: "10%",
              borderRadius: 10,
              paddingTop: 10,
              paddingRight: 5,

              paddingBottom: "15%",
            }}
          >
            <View>
              <TouchableOpacity onPress={() => setmodel(!model)}>
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
            <Text style={{ fontSize: 20, color: "gray", marginLeft: 20 }}>
              Your Pickup Address
            </Text>
            {addadrs.length > 0
              ? addadrs.map((data, index) => {
                  return (
                    <Pressable onPress={() => Handelselect(data)} key={index}>
                      <Addresscard
                        address={data}
                        // getadd={getadd}
                        color={selected == data ? "#f07102" : "white"}
                        getadd={getadd}
                      />
                    </Pressable>
                  );
                })
              : null}
            <TouchableOpacity
              style={styles.add}
              onPress={() => setVisible(true)}
            >
              <Text style={{ fontSize: 20, color: "gray" }}>
                + Pickup Location
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </Modal>

        <TouchableOpacity
          style={{
            paddingVertical: 20,
            marginTop: "18%",
            // marginBottom: 20,
            backgroundColor: "#f07102",
            alignItems: "center",
          }}
          onPress={() =>
            // navigation.navigate("App", { screen: "Confirm Payment" })
            getorder()
          }
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            CONFIRM CHECKOUT
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    // paddingTop: '30%',
    paddingVertical: 10,
    flex: 1,
  },
  add: {
    paddingVertical: 15,
    borderWidth: 1,
    // paddingHorizontal: 10,
    alignSelf: "center",
    alignItems: "center",
    margin: "5%",
    borderRadius: 7,
    borderColor: "gray",
    width: "60%",
  },
  done: {
    backgroundColor: "#f07102",
    // width:80,
    width: "50%",
    alignSelf: "center",
    alignItems: "center",
    height: 35,
    borderRadius: 5,
  },
  card: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 5,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#f07102",
    height: 80,
  },
});
