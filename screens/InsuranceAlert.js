import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Switch,
  ScrollView
} from "react-native";
import DatePicker from "react-native-datepicker";
import { Button } from "react-native-paper";
import Carinfo from "../components/Carinfo";

const InsuranceAlert = ({ navigation }) => {
  const [number, setNumber] = React.useState("");
  const [name, setName] = React.useState("");
  const [date, setDate] = useState();
  const [alert, setalert] = useState();
  const [loading, setloading] = useState(false);
  const addalert = async () => {
    setloading(true);
    const token = await AsyncStorage.getItem("token");
    console.log(token, date);
    fetch("https://digi-servizzy-backend.herokuapp.com/api/add-insurance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        userid: token,
      },
      body: JSON.stringify({
        vehicalNumber: number,
        insuranceName: name,
        insurerExpiryDate: date,
        alertMe: alert,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.success == true
          ? navigation.navigate("App", { screen: "Insurance" })
          : alert("something went wrong!");
      });
    setloading(false);
  };

  return (
    <View>
      <Carinfo navigation={navigation}/>
      <ScrollView style={styles.container}>
        <Text
          style={{
            color: "#f07102",
            fontSize: 22,
            padding: 10,
            marginBottom: "10%",
          }}
        >
          Add new alert
        </Text>
        <View style={styles.form}>
          <View>
            <Text style={styles.label}>Vehicle Number</Text>
            <TextInput
            autoCapitalize="characters"
              value={number}
              placeholder="Enter vehicle number"
              style={styles.input}
              onChangeText={(text) => setNumber(text)}
            />
          </View>
          <View>
            <Text style={styles.label}>Insurance Name</Text>
            <TextInput
            autoCapitalize="characters"
              value={name}
              style={styles.input}
              placeholder="Enter Insurance Name"
              onChangeText={(text) => setName(text)}
            />
          </View>

          <Text style={styles.label}>Insurance Expiry Date</Text>
          <DatePicker
            showIcon={false}
            androidMode="spinner"
            style={{ width: 300 }}
            date={date}
            mode="date"
            placeholder="DD/MM/YYYY"
            format="DD-MM-YYYY"
            // maxDate={new Date()}
            confirmBtnText="confirm"
            cancelBtnText="cancel"
            customStyles={{
              dateInput: {
                backgroundColor: "white",
                alignItems: "flex-start",
                marginHorizontal: 10,
                paddingHorizontal: 10,
                borderColor: "white",
                borderBottomColor: "gray",
              },
            }}
            onDateChange={(date) => {
              setDate(date);
            }}
          />

          <Text style={{ fontWeight: "bold", fontSize: 20, margin: 20 }}>
            Alert me
          </Text>
          <View>
            <View style={styles.switch}>
              <Switch
                trackColor={{ false: "#767577", true: "#f07102" }}
                thumbColor={"#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => setalert("week")}
                value={alert == "week" ? true : false}
              />
              <Text style={{ marginLeft: 10 }}>A week Before</Text>
            </View>
            <View style={styles.switch}>
              <Switch
                trackColor={{ false: "#767577", true: "#f07102" }}
                thumbColor={"#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => setalert("fifteen")}
                value={alert == "fifteen" ? true : false}
              />
              <Text style={{ marginLeft: 10 }}>15 Days Before</Text>
            </View>
            <View style={styles.switch}>
              <Switch
                trackColor={{ false: "#767577", true: "#f07102" }}
                thumbColor={"#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => setalert("thirty")}
                value={alert == "thirty" ? true : false}
              />
              <Text style={{ marginLeft: 10 }}>30 Days Before</Text>
            </View>
          </View>
          {/* <Text style={{ color: '#f07102', marginHorizontal: 10 }}>
            Choose a custom date {'>'}
          </Text> */}
          {/* <TouchableOpacity style={styles.save}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
              ADD ALERT
            </Text>
          </TouchableOpacity> */}
          <Button
            mode="contained"
            onPress={() => addalert()}
            color={"#f07102"}
            labelStyle={{ color: loading ? "#f07102" : "white" }}
            style={{ marginTop: "10%" }}
            loading={loading == true ? true : false}
            disabled={loading == true ? true : false}
          >
            ADD ALERT
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default InsuranceAlert;

const styles = StyleSheet.create({
  label: {
    paddingHorizontal: 10,
    marginTop: 10,
    color: "gray",
  },
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    marginHorizontal: 10,
    borderBottomColor: "gray",
  },
  switch: {
    flexDirection: "row",
    margin: 10,
  },
  container: {
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    borderRadius: 7,
    elevation: 5,
    height: "100%",
  },
  save: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f07102",
    borderRadius: 7,
    marginTop: "10%",
  },
});
