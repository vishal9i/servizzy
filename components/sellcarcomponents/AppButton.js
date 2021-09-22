import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// import colors from "../config/colors";

function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FC4805',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    flex: 1,
    // marginLeft:,
    width: 100,
    // width: "fit-content",
    // marginVertical: 10,
  },
  text: {
    color: '#fff',
    fontSize: 8,
    fontWeight: 'bold',
  },
});

export default AppButton;
