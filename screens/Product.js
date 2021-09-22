import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import {
  widthPercentageToDP as wt,
  heightPercentageToDP as ht,
} from 'react-native-responsive-screen';

const Product = () => {
  const [image, setimage] = useState(
    require('../images/storeitems/freeconvert/3.png')
  );
  const [counter, setCounter] = useState(0);
  const handleClick1 = () => {
    setCounter(counter + 1);
  };
  const handleClick2 = () => {
    setCounter(counter - 1);
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: ht(2),
          marginHorizontal: wt(5),
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image style={{ width: wt(60), height: ht(30) }} source={image} />

          <View style={styles.images}>
            <TouchableOpacity
              onPress={() =>
                setimage(require('../images/storeitems/freeconvert/3.png'))
              }
            >
              <Image
                style={styles.img}
                source={require('../images/storeitems/freeconvert/3.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                setimage(require('../images/storeitems/freeconvert/4.png'))
              }
            >
              <Image
                style={styles.img}
                source={require('../images/storeitems/freeconvert/4.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                setimage(require('../images/storeitems/freeconvert/5.png'))
              }
            >
              <Image
                style={styles.img}
                source={require('../images/storeitems/freeconvert/5.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                setimage(require('../images/storeitems/freeconvert/2.png'))
              }
            >
              <Image
                style={styles.img}
                source={require('../images/storeitems/freeconvert/2.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                setimage(require('../images/storeitems/freeconvert/1.png'))
              }
            >
              <Image
                style={styles.img}
                source={require('../images/storeitems/freeconvert/1.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginHorizontal: wt(6) }}>
          <Text style={{ fontSize: 25 }}>Rs. 350</Text>
          <Text
            style={{
              marginTop: 10,
              textDecorationLine: 'line-through',
              color: 'red',
              marginLeft: 10,
            }}
          >
            {' '}
            (Rs.599)
          </Text>
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.boxcontainers}>
          <Text
            style={{
              color: 'black',
              fontSize: 19,
              fontWeight: 'bold',
            }}
          >
            Godrej Aer Twist
          </Text>
          <Text style={{ color: 'grey', fontSize: 15 }}>
            Godrej aer twist, Car Air Freshner Fresh Lush Green(45g)
          </Text>
        </View>
        <View style={styles.boxcontainers}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '600',
            }}
          >
            About this item
          </Text>
          <Text style={{ color: 'grey', fontSize: 15 }}>
            Contains 1 unit of Godrej aer twist car freshner - Freshb Lush Green
            Easy to use twist t0 turn on/shadowOffset mechanism to control
            fragrance intensity
          </Text>
        </View>
      </View>
      <View style={styles.box}>
        <View
          style={{
            flexDirection: 'row',
            bordercolor: 'grey',
            alignItems: 'center',
            borderRadius: 7,
            justifyContent: 'space-between',
            overflow: 'hidden',
          }}
        >
          <TouchableOpacity onPress={handleClick2}>
            <Text
              style={{
                backgroundColor: 'gray',
                color: 'black',
                fontSize: 25,
                paddingHorizontal: wt(2),
              }}
            >
              -
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              color: 'gray',
              fontSize: 20,
              paddingHorizontal: wt(3),
            }}
          >
            {counter}
          </Text>
          <TouchableOpacity onPress={handleClick1}>
            <Text
              style={{
                backgroundColor: 'gray',
                color: 'black',
                fontSize: 25,
                paddingHorizontal: wt(2),
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#f07102',
            marginLeft: 30,
            width: '55%',
            borderRadius: 10,
            alignItems: 'center',
          }}
        >
          <TouchableOpacity>
            <Text
              style={{ color: 'white', marginVertical: ht(1), fontSize: 20 }}
            >
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default Product;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    paddingBottom: ht(2),
  },
  images: {
    marginTop: 10,
    alignItems: 'flex-end',
    marginLeft: 30,
  },
  img: {
    width: 35,
    height: 35,
    marginTop: 6,
    borderColor: 'grey',
    borderWidth: 1,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: '#800000',
    margin: 10,
    width: wt(100),
    marginLeft: 25,
  },
  boxcontainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 1.36,
    shadowRadius: 4.22,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 5,
    width: '75%',
    height: 80,
    marginLeft: 25,
  },
  boxcontainers: {
    backgroundColor: '#fff',
    borderRadius: 7,
    justifyContent: 'center',
    shadowColor: 'black',
    elevation: 8,
    marginTop: ht(2),
    padding: wt(5),
    paddingVertical: ht(1),
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wt(5),
    borderRadius: 7,
    overflow: 'hidden',
  },
});
