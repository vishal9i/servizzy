import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Verifyotp = ({ route, navigation }) => {
  const [otp, setOtp] = React.useState();
  const [Load, setLoad] = React.useState(false);
  // const [user, setUser] = React.useState();
  //   const phone = route.Param('phone');
  //   const id = route.getParam('id');
  const { phone, id, model, image, brand, fuel } = route.params;
  // console.log(model, image, brand, fuel);
  const setcar = (user) => {
    fetch("https://digi-servizzy-backend.herokuapp.com/api/add-car-details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        userid: user,
      },
      body: JSON.stringify({
        brandName: brand,
        modelName: model,
        fuelType: fuel,
        image: image,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  const setotp = async () => {
    setLoad(true);
    let userno = `${phone}`;
    fetch("https://digi-servizzy-backend.herokuapp.com/api/otp-verification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        phonenumber: userno,
        verifyid: id,
      },
      body: JSON.stringify({
        code: otp,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        setLoad(false);
        console.log(data);
        // console.log(await AsyncStorage.getItem('token'));
        await AsyncStorage.setItem("token", data.userId);
        // setUser(data.userId);
        model == "" ? null : setcar(data.userId);
        data.userId
          ? navigation.navigate("Auth", { screen: "Location" })
          : null;
      });
    // console.log(otp, phone, id);
    // navigation.navigate('Home');
    // await AsyncStorage.setItem('token', id);
    // model == '' ? null : setcar();
    // id ? navigation.replace('Tab', { screen: 'Home', user: user }) : null;
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={require("../images/auth/otp2.png")} style={styles.img} />
        <View>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 25,
              fontWeight: "bold",
              margin: 10,
            }}
          >
            Enter 6-Digit number
          </Text>
          <Text style={{ alignSelf: "center", color: "gray" }}>
            We have sent 6-Digit OTP on
          </Text>
          <Text style={{ alignSelf: "center", color: "gray", fontSize: 17 }}>
            +91{phone}
          </Text>
        </View>
        <View style={styles.input}>
          {/* <Text style={{ margin: 4, fontSize: 20, color: '#f07102' }}>+91</Text> */}
          <TextInput
            placeholder="Enter OTP"
            keyboardType="numeric"
            style={{
              margin: 4,
              fontSize: 20,
              padding: 5,
              borderColor: "#c4c4c4",
              width: "100%",
              textAlign: "center",
            }}
            value={otp}
            onChangeText={(text) => setOtp(text)}
          />
        </View>
        {!Load && (
          <TouchableOpacity style={styles.save} onPress={() => setotp()}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
                alignSelf: "center",
              }}
            >
              Verify
            </Text>
          </TouchableOpacity>
        )}
        {Load && (
          <TouchableOpacity style={styles.save}>
            <ActivityIndicator size={"large"} color="#fff" />
            {/* <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              Please Wait
            </Text> */}
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
};

export default Verifyotp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    paddingTop: "10%",
  },
  input: {
    borderRadius: 7,
    borderWidth: 1,
    flexDirection: "row",
    marginTop: "20%",
    alignItems: "center",
    marginHorizontal: "10%",
    borderColor: "#c4c4c4",
  },
  img: {
    width: 160,
    height: 200,
    alignSelf: "center",
    marginTop: 20,
  },
  save: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f07102",
    borderRadius: 7,
    margin: "10%",
  },
});
