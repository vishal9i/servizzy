import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

const Atmcard = ({ name, status, info, image }) => {
  return (
    <View>
      <View style={styles.atm}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={image}
            style={{ width: 50, height: 20, marginRight: 10 }}
          />
          <Text style={{ color: 'gray' }}>{name}</Text>
        </View>
        <RadioButton status={status} color="#f07102" />
        {/* <Pressable onPress={() => info(name)}>
          <Text>vishal</Text>
        </Pressable> */}
      </View>
    </View>
  );
};

export default Atmcard;

const styles = StyleSheet.create({
  atm: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
