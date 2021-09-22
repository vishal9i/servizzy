import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { RadioButton } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DatePicker from "react-native-datepicker";
import { LogBox } from "react-native";
import Carinfo from "../components/Carinfo";

const Profile = ({navigation}) => {
  const [checked, setChecked] = React.useState();
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [date, setDate] = React.useState();
  const [address, setAdress] = React.useState();
  const [city, setCity] = React.useState();
  const [House, setHouse] = React.useState();
  const [Locality, setLocality] = React.useState();
  const [Pin, setPin] = React.useState();

  // const [gender, setGender] = React.useState();

  const updatedata = async () => {
    const token = await AsyncStorage.getItem("token");
    fetch("https://digi-servizzy-backend.herokuapp.com/api/update-profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        userid: token,
      },
      body: JSON.stringify({
        name: name,
        email: email,
        gender: checked,
        // phoneNumberTwo: phoneNumber,
        city: city,
        dateOfBirth: date,
        pickUpAndDropAddress: address,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        data.success == true
          ? alert("Details updated successfully !")
          : alert("Details not updated try again !");
      });
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
        // console.log(data.data.name);
        console.log(data);
        setName(data.data.name);
        setEmail(data.data.email);
        setChecked(data.data.gender);
        setPhoneNumber(data.data.phoneNumber);
        setCity(data.data.city);
        setAdress(data.data.pickUpAndDropAddress);
        setDate(data.data.dateOfBirth);
      });
  };
  // console.log(token);

  React.useEffect(() => {
    getdata();
    LogBox.ignoreLogs(["Animated: `useNativeDriver`"]);
  }, []);
  return (
    <View>
      <Carinfo navigation={navigation}/>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text style={{ fontSize: 20, marginVertical: 10 }}>
              Personal Details
            </Text>
            <View style={styles.inputbox}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                placeholder="Your Name"
                autoCapitalize="characters"
                style={styles.inputs}
                value={name}
                onChangeText={(text) => setName(text)}
              />
            </View>
            <View style={styles.inputbox}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                placeholder="Your Email Id"
                style={styles.inputs}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
            <View style={styles.inputbox}>
              <Text style={styles.label}>Mobile No</Text>
              <Text
                placeholder="Your Mobile no"
                autoCapitalize="characters"
                keyboardType="numeric"
                style={styles.inputs}
                value={phoneNumber}
                onChangeText={(text) => setPhoneNumber(text)}
              >{phoneNumber}</Text>
            </View>
            <View style={styles.inputbox}>
              <Text style={styles.label}>D.O.B</Text>
              <DatePicker
                showIcon={false}
                androidMode="spinner"
                style={{ width: 290 }}
                date={date}
                mode="date"
                placeholder="DD/MM/YYYY"
                format="DD-MM-YYYY"
                // maxDate={moment().format('DD-MM-YYYY')}
                confirmBtnText="Chọn"
                cancelBtnText="Hủy"
                customStyles={{
                  dateInput: {
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderColor: "#f07102",
                    borderRadius: 7,
                    alignItems: "flex-start",
                    marginTop: 15,
                    paddingLeft:8,
                  },
                }}
                // style={styles.inputs}
                onDateChange={(date) => {
                  setDate(date);
                }}
              />
            </View>
            <View style={styles.inputbox}>
              <Text style={styles.label}>City</Text>
              <TextInput
                placeholder="City Name"
                autoCapitalize="characters"
                style={styles.inputs}
                value={city}
                onChangeText={(text) => setCity(text)}
              />
            </View>
            <View style={[styles.inputbox]}>
              <Text style={styles.label}>Pickup {"&"} Drop Address</Text>
              <TextInput
                placeholder="Enter Your Address"
                autoCapitalize="characters"
                style={[
                  {
                    height: 100,
                    borderWidth: 1,
                    marginVertical: 10,
                    borderRadius: 7,
                    paddingHorizontal: 10,
                    borderColor: "#f07102",
                  },
                ]}
                value={address}
                onChangeText={(text) => setAdress(text)}
                multiline={true}
                // textAlignVertical={true}
              />
            </View>
            {/* <View style={styles.inputbox}>
              <Text style={styles.label}>House No.</Text>
              <TextInput
                placeholder="House No."
                autoCapitalize="characters"
                style={styles.inputs}
                value={House}
                onChangeText={(text) => setHouse(text)}
              />
            </View>
            <View style={styles.inputbox}>
              <Text style={styles.label}>Flat/Locality</Text>
              <TextInput
                placeholder="Flat/Locality"
                autoCapitalize="characters"
                style={styles.inputs}
                value={Locality}
                onChangeText={(text) => setLocality(text)}
              />
            </View>
            <View style={styles.inputbox}>
              <Text style={styles.label}>Pin Code</Text>
              <TextInput
                keyboardType="numeric"
                placeholder="Pin code"
                autoCapitalize="characters"
                style={styles.inputs}
                value={Pin}
                onChangeText={(text) => setPin(text)}
              />
            </View> */}
            <View style={styles.inputbox}>
              <Text style={styles.label}>Gender</Text>

              <View style={styles.radio}>
                <RadioButton
                  value={checked}
                  status={checked === "male" ? "checked" : "unchecked"}
                  onPress={() => setChecked("male")}
                  color="#f07102"
                />
                <Text>Male</Text>
                <RadioButton
                  value={checked}
                  status={checked === "female" ? "checked" : "unchecked"}
                  onPress={() => setChecked("female")}
                  color="#f07102"
                />
                <Text>Female</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.save} onPress={() => updatedata()}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              SAVE
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
    justifyContent: "space-between",
    height: "98%",
    paddingBottom:120
  },
  inputs: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 7,
    paddingHorizontal: 10,
    borderColor: "#f07102",
  },
  label: {
    fontSize: 15,
    color: "gray",
  },
  inputbox: {
    marginVertical: 10,
  },
  radio: {
    flexDirection: "row",
    alignItems: "center",
  },
  save: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f07102",
    borderRadius: 7,
  },
});
