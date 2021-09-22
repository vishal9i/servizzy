import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import StepIndicator from "react-native-step-indicator";

const labels = [
  {
    image: require("../images/orderstatus/1.png"),
    heading: "Service Ready",
    message: "Ready to pick up                    ",
  },
  {
    image: require("../images/orderstatus/2.png"),
    heading: "Car Picked Up",
    message: "Your car has been picked up         ",
  },
  {
    image: require("../images/orderstatus/3.png"),
    heading: "In Service Station",
    message: "Service of your car is in process   ",
  },
  {
    image: require("../images/orderstatus/4.png"),
    heading: "Placed Order",
    message: "We have recived your service request",
  },
];
const customStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  //   currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: "#fe7013",
  separatorFinishedColor: "#fe7013",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#fe7013",
  stepIndicatorUnFinishedColor: "#aaaaaa",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: "#000000",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "rgba(255,255,255,0.5)",
  labelColor: "#666666",
  labelSize: 15,
  currentStepLabelColor: "#fe7013",
};

const Status = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ marginHorizontal: 20, marginVertical: 30, fontSize: 20 }}>
        Wed 12 Sep
      </Text>
      <View style={{ height: "60%", width: "100%" }}>
        <StepIndicator
          direction="vertical"
          customStyles={customStyles}
          currentPosition={1}
          stepCount={4}
          labels={labels.map((item) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  //   alignItems: 'center',
                  justifyContent: "space-between",
                }}
              >
                <Image
                  source={item.image}
                  style={{ width: 50, height: 50, marginRight: 10 }}
                />
                <View>
                  <Text style={{ fontSize: 20 }}>{item.heading}</Text>
                  <Text>{item.message}</Text>
                </View>
              </View>
            );
          })}
        />
      </View>

      <TouchableOpacity style={styles.addresscard}>
        <Image
          source={require("../images/orderstatus/location.png")}
          style={{ width: 30, height: 30, marginRight: 10 }}
        />
        <View>
          <Text style={{ marginVertical: 8, fontSize: 20 }}>
            Pickup Address
          </Text>
          <Text style={{ paddingRight: "20%" }}>
            Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "white",
    height: "100%",
  },
  addresscard: {
    borderRadius: 7,
    elevation: 5,
    borderColor: "white",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
});
