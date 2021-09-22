import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  Searchbar,
  Title,
  Subheading,
  Caption,
  Button,
} from "react-native-paper";

import {
  widthPercentageToDP as wt,
  heightPercentageToDP as ht,
} from "react-native-responsive-screen";
import Storeoil from "../components/Storeoil";
import Storeparts from "../components/Storeparts";
import Storetyre from "../components/Storetyre";

const data = {
  air: [
    {
      name: "COMPRESSOR",
      image: require("../images/storeitems/StoreIcons/Compressor.png"),
    },
    {
      name: "CONDENSER",
      image: require("../images/storeitems/StoreIcons/condensor.png"),
    },
    {
      name: "EVAPORATORS",
      image: require("../images/storeitems/StoreIcons/Evaporator.png"),
    },
  ],
  filters: [
    {
      name: "AIR FILTER",
      image: require("../images/storeitems/StoreIcons/AirFilter.png"),
    },
    {
      name: "FUEL FILTER",
      image: require("../images/storeitems/StoreIcons/FuelFilter.png"),
    },
    {
      name: "OIL FILTER",
      image: require("../images/storeitems/StoreIcons/OilFilter.png"),
    },
  ],
  lighting: [
    {
      name: "HEAD LIGHT",
      image: require("../images/storeitems/StoreIcons/Head1.png"),
    },
    {
      name: "TAIL LIGHT",
      image: require("../images/storeitems/StoreIcons/Tail.png"),
    },
    {
      name: "FOG LAMP",
      image: require("../images/storeitems/StoreIcons/FogLamp.png"),
    },
  ],
};

const Itemstore = ({ navigation }) => {
  //   const [search, setsearch] = useState();
  //   const [category, setcategory] = useState('parts');

  //   const onChangeSearch = (query) => setsearch(query);

  //   return (
  //     <View style={styles.container}>
  //       {/* <View style={styles.search}>
  //         <Searchbar
  //           placeholder="Search"
  //           onChangeText={onChangeSearch}
  //           value={search}
  //         />
  //       </View> */}
  //       <View
  //         style={{
  //           flexDirection: 'row',
  //           marginHorizontal: wt(3),
  //         }}
  //       >
  //         <TouchableOpacity
  //           style={{
  //             borderWidth: 1,
  //             paddingVertical: wt(1),
  //             borderRadius: wt(3),
  //             borderColor: category == 'parts' ? 'rgba(255, 141, 0, 1)' : 'white',
  //             alignItems: 'center',
  //           }}
  //           onPress={() => setcategory('parts')}
  //         >
  //           <Image
  //             source={require('../images/storeitems/parts.png')}
  //             style={{ width: wt(15), height: ht(7) }}
  //           />
  //           <View
  //             style={{
  //               width: wt(22),
  //             }}
  //           >
  //             <Caption style={{ textAlign: 'center' }}>
  //               Assesories and parts
  //             </Caption>
  //           </View>
  //         </TouchableOpacity>
  //         <TouchableOpacity
  //           style={{
  //             borderWidth: 1,
  //             paddingVertical: wt(1),
  //             borderRadius: wt(3),
  //             borderColor: category == 'oil' ? 'rgba(255, 141, 0, 1)' : 'white',
  //             alignItems: 'center',
  //           }}
  //           onPress={() => setcategory('oil')}
  //         >
  //           <Image
  //             source={require('../images/storeitems/oil.png')}
  //             style={{ width: wt(15), height: ht(7) }}
  //           />
  //           <View style={{ width: wt(22) }}>
  //             <Caption style={{ textAlign: 'center' }}>
  //               Hydraulics and Lubricants
  //             </Caption>
  //           </View>
  //         </TouchableOpacity>
  //         <TouchableOpacity
  //           style={{
  //             borderWidth: 1,
  //             paddingVertical: wt(1),
  //             borderRadius: wt(3),
  //             borderColor: category == 'tyres' ? 'rgba(255, 141, 0, 1)' : 'white',
  //             alignItems: 'center',
  //           }}
  //           onPress={() => setcategory('tyres')}
  //         >
  //           <Image
  //             source={require('../images/storeitems/tyre.png')}
  //             style={{ width: wt(15), height: ht(7) }}
  //           />
  //           <View style={{ width: wt(22) }}>
  //             <Caption style={{ textAlign: 'center' }}>TYRES</Caption>
  //           </View>
  //         </TouchableOpacity>
  //         <TouchableOpacity
  //           style={{
  //             borderWidth: 1,
  //             paddingVertical: wt(1),
  //             borderRadius: wt(3),
  //             borderColor:
  //               category == 'coustom' ? 'rgba(255, 141, 0, 1)' : 'white',
  //             alignItems: 'center',
  //           }}
  //           onPress={() => setcategory('coustom')}
  //         >
  //           <Image
  //             source={require('../images/services/1.png')}
  //             style={{ width: wt(15), height: ht(7) }}
  //           />
  //           <View style={{ width: wt(22) }}>
  //             <Caption style={{ textAlign: 'center' }}>Coustom Items</Caption>
  //           </View>
  //         </TouchableOpacity>
  //       </View>

  //       <View style={styles.container2}>
  //         <Storeparts
  //           data={data}
  //           display={category == 'parts' ? null : 'none'}
  //           navigation={navigation}
  //         />
  //         <Storeoil display={category == 'oil' ? null : 'none'} />
  //         <Storetyre display={category == 'tyres' ? null : 'none'} />
  //       </View>
  //     </View>
  //   );
  // };
  return (
    <View style={styles.container}>
      <Image
        source={require("../images/comming.png")}
        style={styles.commingsoon}
      />
    </View>
  );
};

export default Itemstore;

const styles = StyleSheet.create({
  search: {
    margin: 10,
  },
  container: {
    backgroundColor: "white",
    height: "100%",
    paddingTop: ht(5),
  },
  container2: {
    backgroundColor: "white",
    height: "100%",
    marginTop: ht(6),
    borderRadius: wt(4),
    elevation: 5,
    paddingTop: ht(3),
    paddingHorizontal: wt(5),
    paddingBottom: ht(20),
    marginHorizontal: wt(2),
  },
  img: {
    width: wt(15),
    height: ht(10),
  },
  itembox: {
    borderWidth: 1,
    margin: wt(2),
    alignItems: "center",
    width: wt(25),
    borderRadius: 7,
    borderColor: "rgba(255, 141, 0, 1)",
  },
  commingsoon: {
    width: wt(80),
    height: ht(45),
    marginVertical: ht(15),
    alignSelf:"center",
  },
});
