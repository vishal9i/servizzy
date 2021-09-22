import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function AppButton2({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flex: 1,
    marginLeft: 10,
    borderColor: '#99A3A4',
    borderWidth: 2,
    // width: "fit-content",
    // marginVertical: 10,
  },
  text: {
    color: '#000',
    fontSize: 8,
    fontWeight: 'bold',
  },
});

export default AppButton2;
