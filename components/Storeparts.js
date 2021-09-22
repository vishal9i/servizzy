import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  Searchbar,
  Title,
  Subheading,
  Caption,
  Button,
} from 'react-native-paper';
import {
  widthPercentageToDP as wt,
  heightPercentageToDP as ht,
} from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';

const Storeparts = ({ data, display, navigation }) => {
  //   const [mark, setmark] = useState([]);
  //   console.log(mark);

  //   const selectdata = (prop) => {
  //     // console.log(prop);
  //     const newdata = [...mark, prop];
  //     setmark(newdata);
  //   };
  //   const removeitem = (index) => {
  //     const newdata = [...mark];
  //     newdata.splice(index, 1);
  //     setmark(newdata);
  //   };

  return (
    <View style={{ display: display }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Title>Air conditioning</Title>
          <View style={{ flexDirection: 'row' }}>
            {data.air.map((item, index) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.itembox,
                    // {
                    //   backgroundColor: mark.find((i) => i == item.name)
                    //     ? 'rgba(255, 141, 0, 1)'
                    //     : null,
                    // },
                  ]}
                  key={index}
                  onPress={() =>
                    // mark.find((i) => i == item.name)
                    //   ? removeitem(mark.indexOf(item.name))
                    //   : selectdata(item.name)
                    navigation.navigate('App', { screen: 'store' })
                  }
                >
                  <View style={{ alignItems: 'flex-end', width: '100%' }}>
                    <Ionicons
                      name="add-outline"
                      size={20}
                      color="#f07102"
                      style={{ padding: 5 }}
                    />
                  </View>
                  <Image source={item.image} style={styles.img} />
                  <Caption style={{ fontSize: wt(2.4) }}>{item.name}</Caption>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View>
          <Title>Filters</Title>
          <View style={{ flexDirection: 'row' }}>
            {data.filters.map((item, index) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.itembox,
                    // {
                    //   backgroundColor: mark.find((i) => i == item.name)
                    //     ? 'rgba(255, 141, 0, 1)'
                    //     : null,
                    // },
                  ]}
                  key={index}
                  onPress={() =>
                    // mark.find((i) => i == item.name)
                    //   ? removeitem(mark.indexOf(item.name))
                    //   : selectdata(item.name)
                    navigation.navigate('App', { screen: 'store' })
                  }
                >
                  <View style={{ alignItems: 'flex-end', width: '100%' }}>
                    <Ionicons
                      name="add-outline"
                      size={20}
                      color="#f07102"
                      style={{ padding: 5 }}
                    />
                  </View>
                  <Image source={item.image} style={styles.img} />
                  <Caption>{item.name}</Caption>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View>
          <Title>Lights</Title>
          <View style={{ flexDirection: 'row' }}>
            {data.lighting.map((item, index) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.itembox,
                    // {
                    //   backgroundColor: mark.find((i) => i == item.name)
                    //     ? 'rgba(255, 141, 0, 1)'
                    //     : null,
                    // },
                  ]}
                  key={index}
                  onPress={() =>
                    // mark.find((i) => i == item.name)
                    //   ? removeitem(mark.indexOf(item.name))
                    //   : selectdata(item.name)
                    navigation.navigate('App', { screen: 'store' })
                  }
                >
                  <View style={{ alignItems: 'flex-end', width: '100%' }}>
                    <Ionicons
                      name="add-outline"
                      size={20}
                      color="#f07102"
                      style={{ padding: 5 }}
                    />
                  </View>
                  <Image source={item.image} style={styles.img} />
                  <Caption>{item.name}</Caption>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            margin: wt(5),
            justifyContent: 'space-around',
          }}
        >
          {/* <Button
            mode="contained"
            color="rgba(255, 141, 0, 1)"
            labelStyle={{ color: 'white' }}
            onPress={() =>
              mark.length == 0
                ? console.log('plz select something')
                : navigation.navigate('App', {
                    screen: 'Service Type',
                    params: { features, mark },
                  })
            }
          >
            CONTINUE
          </Button> */}

          {/* <Button
              mode="outlined"
              color="rgba(255, 141, 0, 1)"
              style={{ width: wt(30) }}
              onPress={() =>
                navigation.navigate('App', {
                  screen: 'Service Type',
                  params: { features },
                })
              }
            >
              SKIP
            </Button> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Storeparts;

const styles = StyleSheet.create({
  img: {
    width: wt(15),
    height: ht(7),
  },
  itembox: {
    borderWidth: 1,
    margin: wt(2),
    alignItems: 'center',
    width: wt(25),
    borderRadius: 7,
    borderColor: 'gray',
  },
});
