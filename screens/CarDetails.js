import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Carinfo from "../components/Carinfo";

const CarDetails = () => {
  let [name, setName] = React.useState('Maruti Suzuki Swift');
  let [city, setCity] = React.useState('Hydrabad');
  let [location, setLocation] = React.useState('Hydrabad,street 1');
  let [year, setYear] = React.useState('2020');
  let [Owner, setOwner] = React.useState('Frist Hand');
  let [kms, setKms] = React.useState('15,000');
  let [price, setPrice] = React.useState('1 Lakh');
  return (
    <View>
      <Carinfo navigation={navigation}/>
    <View style={styles.container}>
      <Image source={require('../images/cars/swift2.png')} style={styles.img} />
      <View style={styles.form}>
        <View>
          <Text style={styles.label}>Car Name</Text>
          <TextInput value={name} style={styles.input} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <Text style={styles.label}>city</Text>
            <TextInput value={city} style={styles.input} />
          </View>
          <View>
            <Text style={styles.label}>Location</Text>
            <TextInput value={location} style={styles.input} />
          </View>
        </View>
        <View>
          <Text style={styles.label}>Model Year</Text>
          <TextInput value={year} style={styles.input} />
        </View>
        <View>
          <Text style={styles.label}>Ownership</Text>
          <TextInput value={Owner} style={styles.input} />
        </View>
        <View>
          <Text style={styles.label}>KMs Driven</Text>
          <TextInput value={kms} style={styles.input} />
        </View>
        <View>
          <Text style={styles.label}>Expected Price</Text>
          <TextInput value={price} style={styles.input} />
        </View>
      </View>
      <TouchableOpacity style={styles.save}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
          Proceed to buy
        </Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default CarDetails;

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 150,
    alignSelf: 'center',
  },
  container: {
    backgroundColor: 'white',
    height: '100%',
    padding: 15,
    justifyContent: 'space-evenly',
  },
  label: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  input: {
    fontSize: 16,
    color: 'gray',
    borderBottomWidth: 1,
    marginHorizontal: 10,
    borderBottomColor: 'gray',
  },
  save: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f07102',
    borderRadius: 7,
  },
});
