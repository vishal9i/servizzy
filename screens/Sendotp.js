import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

const Sendotp = ({ route, navigation }) => {
  const [phone, setPhone] = React.useState();
  const [id, setId] = React.useState();
  const [data, setData] = React.useState();
  const [Load, setLoad] = React.useState(false);

  // route.params ? setData(route.params) : setData(null);
  const { model, image, brand, fuel } = route.params
    ? route.params
    : { model: "", image: "", brand: "", fuel: "" };
  console.log(model, image, brand, fuel);

  const getotp = () => {
    setLoad(true);
    let userno = `${phone}`;
    fetch("https://digi-servizzy-backend.herokuapp.com/api/otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: userno,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // setId(data.info.id);
        // console.log(data);
        setLoad(false);
        if (data.success == true) {
          navigation.navigate("Auth", {
            screen: "Verify OTP",
            params: {
              phone: phone,
              id: data.verifyId,
              model: model,
              image: image,
              brand: brand,
              fuel: fuel,
            },
          });
        } else {
          // console.log(data);
          alert(data.message);
        }
      });
    // console.log(typeof userno);
    // navigation.navigate('Verify OTP', {
    //   phone: '38463546854',
    //   id: 'jgegfjkhmfbkmsdf5341sdfjghd',
    //   model: model,
    //   image: image,
    //   brand: brand,
    //   fuel: fuel,
    // });
  };

  return (
    <View style={styles.container}>
      {/* <Image source={require('../images/auth/otp1.png')} style={styles.img} /> */}
      <View>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 25,
            fontWeight: "bold",
            margin: 10,
          }}
        >
          Enter your mobile number
        </Text>
        {/* <Text style={{ alignSelf: 'center', color: 'gray' }}>
          We'll send 6-Digit OTP on
        </Text>*/}
        {/* <Text style={{ alignSelf: 'center', color: 'gray', fontSize: 17 }}>
          your mobile for verification
        </Text> */}
      </View>
      <View style={styles.input}>
        {/* <Text style={{ margin: 4, fontSize: 20, color: '#f07102' }}>+91</Text> */}
        <TextInput
          placeholder="Ex. 9876543210"
          keyboardType="number-pad"
          style={{
            margin: 4,
            fontSize: 20,
            // borderLeftWidth: 1,
            padding: 5,
            borderColor: "#c4c4c4",
            width: "100%",
          }}
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
      </View>
      {!Load && (
        <TouchableOpacity style={styles.save} onPress={() => getotp()}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "white",
              alignSelf: "center",
            }}
          >
            GO
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
    </View>
  );
};

export default Sendotp;

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
    margin: "30%",
    marginTop: "30%",
    flexDirection: "row",
    justifyContent: "center",
    width: "50%",
  },
});
