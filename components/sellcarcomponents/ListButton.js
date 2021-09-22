import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// import colors from "../config/colors";

function ListButton({ title, onPress, color = "primary" }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FC4805",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "90%",
    marginLeft: 10,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    // fontWeight: "bold",
  },
});

export default ListButton;
