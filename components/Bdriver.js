import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Bdriver = () => {
  return (
    <View style={{ backgroundColor: 'white' }}>
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontSize: 23, marginLeft: 20 }}>Become a</Text>
        <Text style={{ fontSize: 23, marginLeft: 20 }}>driver</Text>
      </View>
      <View style={styles.driver}>
        <Image
          source={require('../images/services/backgrounds/1.png')}
          style={styles.img}
        />
        <View style={{ alignItems: 'center', padding: 15 }}>
          <Text style={{ color: '#f07102', fontSize: 20, fontWeight: 'bold' }}>
            PICK {'&'} DROP
          </Text>
          <Text>Service Cars</Text>
          <TouchableOpacity
            style={{
              padding: 5,
              backgroundColor: 'black',
              borderRadius: 7,
              marginTop: 10,
            }}
          >
            <Text style={{ color: 'white' }}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Bdriver;

const styles = StyleSheet.create({
  driver: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fffcb3',
    paddingVertical: 10,
    marginBottom: 40,
  },
  img: {
    width: 200,
    height: 100,
  },
});
