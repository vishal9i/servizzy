import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Carinfo from "../components/Carinfo";

const Challan = ({navigation}) => {
  const [challanno, setchallanno] = useState('');
  const getchallan = () => {
    setchallanno('');
  };
  const data = [
    {
      vehicleName: 'Audi TT',
      challanNo: 'DL06AA111',
      lastUpdated: '7 month ago',
      NoOfChallans: '5',
    },
    {
      vehicleName: 'Maruti',
      challanNo: 'DL06AA111',
      lastUpdated: '7 month ago',
      NoOfChallans: '5',
    },
    {
      vehicleName: 'Suzuki',
      challanNo: 'DL06AA111',
      lastUpdated: '7 month ago',
      NoOfChallans: '5',
    },
    {
      vehicleName: 'Scorpio',
      challanNo: 'DL06AA111',
      lastUpdated: '7 month ago',
      NoOfChallans: '5',
    },
  ];
  //   console.log(data.map((i) => i));
  return (
    <View  style={{marginBottom:59}}>
      <Carinfo navigation={navigation}/>
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.head}>
          Enter valid number to get challan details
        </Text>
        <View style={styles.containerDetail}>
          <Ionicons name="search-outline" size={24} color="gray" />
          <TextInput
            style={{ paddingHorizontal: 5, fontSize: 18, width: '80%' }}
            placeholder="DL06AA111"
            value={challanno}
            onChangeText={(text) => setchallanno(text)}
          />
        </View>
        <TouchableOpacity style={styles.contain} onPress={() => getchallan()}>
          <Text style={styles.textbutton}>Get Challan details</Text>
        </TouchableOpacity>
        <Text
          style={{ fontSize: 18, paddingVertical: 15, marginHorizontal: 10 }}
        >
          My Vehicle (s)
        </Text>

        <View style={{ padding: 5, height: 120 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.boxdesign}>
              {data.map((i) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingVertical: 10,
                      marginHorizontal: 8,
                      borderRadius: 7,
                      elevation: 5,
                      overflow: 'hidden',
                      paddingHorizontal: 10,
                    }}
                  >
                    <View>
                      <Text style={{ color: 'grey' }}>{i.vehicleName}</Text>
                      <Text style={{ color: 'grey', marginVertical: 5 }}>
                        {i.challanNo}
                      </Text>
                      <Text style={{ color: 'grey', marginVertical: 5 }}>
                        {i.lastUpdated}
                      </Text>
                    </View>
                    <View
                      style={{ paddingHorizontal: 30, marginHorizontal: 30 }}
                    >
                      <Text style={{ fontSize: 15, marginHorizontal: 35 }}>
                        {i.NoOfChallans}
                      </Text>
                      <TouchableOpacity
                        style={styles.contains}
                        onPress={() => navigation.navigate()}
                      >
                        <Text style={styles.textbuttons}>Update Now</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>

        {/* <Text style={{ color: 'black', fontSize: 20, padding: 15 }}>
          How to make challan payment through Park+ ?
        </Text>
        <Text style={{ color: 'grey', padding: 10, fontSize: 15 }}>
          Using the Park+ web app,you can complete your online challan payment.
          We will show you the quick steps that let you clear your challan dues
          in just a few clicks:
        </Text>
        <View style={{ padding: 10 }}>
          <Text style={styles.lasttext}>
            Step 1: Click on 'Challan' on the main page
          </Text>
          <Text style={styles.lasttext}>
            Step 2: Enter your vehicle registration number
          </Text>
          <Text style={styles.lasttext}>
            Step 3: Click on 'Update' at the top of the page
          </Text>
          <Text style={styles.lasttext}>
            Step 4: You will be prompted to 'Update now' , which then you then
            have to press
          </Text>
          <Text style={styles.lasttext}>
            Step 5: Hereafter, You will get the updated challan
          </Text>
        </View> */}
      </ScrollView>
      <Text
       style={{ fontSize: 18, paddingVertical: 45, marginHorizontal: 20 }} 
       >
         This service is currently under works and will be launched soon !
         </Text>
    </View>
    </View>
  );
};
export default Challan;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  head: {
    fontSize: 25,
  },
  containerDetail: {
    flexDirection: 'row',
    borderBottomColor: 'orange',
    borderBottomWidth: 2,
    paddingVertical: 10,
  },
  contain: {
    backgroundColor: '#f07102',
    padding: 15,
    marginVertical: 20,
    borderRadius: 9,
    elevation: 3,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textbutton: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  boxdesign: {
    flexDirection: 'row',
  },
  contains: {
    marginVertical: 35,
    height: 20,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 4,
  },
  textbuttons: {
    fontSize: 12,
    color: 'red',
    textAlign: 'center',
  },
  lasttext: { color: 'grey', fontSize: 15, padding: 10 },
});
