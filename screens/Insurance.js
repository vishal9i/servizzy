import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native';
import InsuranceCard from '../components/InsuranceCard';
import moment from 'moment';
import Carinfo from "../components/Carinfo";

const Insurance = ({ navigation }) => {
  const [insurancedata, setinsurancedata] = useState([]);
  const getinsurance = async () => {
    const token = await AsyncStorage.getItem('token');
    fetch('https://digi-servizzy-backend.herokuapp.com/api/get-insurance-alert', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        userid: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setinsurancedata(data.data);
      });
  };
  getinsurance();
  return (
    <View style={{marginBottom:59}}>
      <Carinfo navigation={navigation}/>
      <ScrollView style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            marginHorizontal: 20,
            marginTop: 20,
            fontWeight: 'bold',
          }}
        >
          Reminders and Alerts
        </Text>
        <Text style={{ color: 'gray', marginHorizontal: 20 }}>
          Get timely notification on Insurance. Set alerts to save fines and
          penalties
        </Text>
        {insurancedata.map((data, index) => {
          return (
            <InsuranceCard
              exdate={data.insurerExpiryDate}
              nalert={data.alertMe}
              id={data.vehicalNumber}
              alrt={data.alertAt}
              status={true}
              key={index}
            />
          );
        })}

        <TouchableOpacity
          style={styles.addbox}
          onPress={() => navigation.navigate('Insurance Alert')}
        >
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.text}>+</Text>
            <Text style={styles.text}>Add new alerts</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Insurance;

const styles = StyleSheet.create({
  addbox: {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#f07102',
    margin: 10,
    padding: 50,
    marginBottom:80,
    alignItems: 'center',
    backgroundColor: '#ebebeb',
  },
  text: {
    fontSize: 25,
    color: 'gray',
  },
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
});
