import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const Store = ({ navigation }) => {
  return (
    <View style={{ marginTop: '20%' }}>
      <View style={styles.card}>
        <View>
          <Text style={styles.text}>Select Car Model</Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              elevation: 5,
            }}
          >
            <Text>Select Car</Text>
            <Entypo name="chevron-small-right" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.text}>Select Model Year</Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              elevation: 5,
            }}
          >
            <Text>Select Car</Text>
            <Entypo name="chevron-small-right" size={24} color="black" />
            {/* <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="year"
              is24Hour={true}
              display="default"
              onChange={onChange}
            /> */}
            {/* <RNDateTimePicker
              mode="year"
              value={date}
              display="spinner"
              onChange={() => setDate()}
            /> */}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.model}>
        <Image source={require('../images/cars/swift.png')} />
        <Text>Maruti Swift</Text>
        <Text style={{ color: 'gray', fontSize: 12 }}>2020</Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#f07102',
            paddingVertical: 2,
            marginHorizontal: 4,
            borderRadius: 3,
            marginVertical: 3,
          }}
          onPress={() => navigation.navigate('App', { screen: 'Car Details' })}
        >
          <Text style={{ alignSelf: 'center', fontSize: 10, color: 'white' }}>
            View Details
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Store;

const styles = StyleSheet.create({
  card: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  },
  text: {
    color: 'gray',
  },
  model: {
    margin: 10,
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 7,
    elevation: 5,
    width: 110,
  },
});
