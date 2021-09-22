import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ActivityIndicator, Colors } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Cars } from "../data/carsdata";
import {
  widthPercentageToDP as wt,
  heightPercentageToDP as ht,
} from "react-native-responsive-screen";
import Carinfo from "../components/Carinfo";

const SelectCarBrand = ({ route, navigation }) => {
  // const [isloading, setIsloading] = React.useState(true);
  const [brand, setBrand] = React.useState("");
  const [data, setData] = React.useState([]);
  const [searchresult, setSearchresult] = React.useState();
  // const [token, setToken] = React.useState();
  const { token } = route.params ? route.params : { token: "" };
  // console.log(Cars);

  const searchHandler = (prop) => {
    setBrand(prop);
    if (brand !== "") {
      const newBrandList = Cars.data.filter((bname) => {
        return Object.values(bname)
          .join(" ")
          .toLocaleLowerCase()
          .includes(brand.toLocaleLowerCase());
      });
      setSearchresult(newBrandList);
    } else {
      setSearchresult(data);
    }
  };
  // console.log(data);

  // setIsloading(data.length == 0 ? false : true);
  // console.log(Cars.data.map((i) => i.brandName));

  // React.useEffect(() => {
  //   const getdata = async () => {
  //     // const item = await AsyncStorage.getItem('token');
  //     // setToken(item);
  //     fetch('https://digi-servizzy-backend.herokuapp.com/api/car-brands')
  //       .then((res) => res.json())
  //       .then((results) => setData(results.data))
  //       .catch((error) => console.log(error));
  //   };

  //   getdata();
  // }, [brand]);
  // console.log(
  //   data.data.map((i) => {
  //     return i.brandName;
  //   })
  // );
  // setIsloading(data ? false : true);
  // data != null ? setIsloading(false) : setIsloading(true);
  // console.log(
  //   Cars.data.map((i) => {
  //     return i.brandName;
  //   })
  // );

  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      {/* <Carinfo navigation={navigation} /> */}
      <View style={styles.searchBox}>
        <AntDesign
          name="search1"
          size={24}
          color="#858585"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Search by brand or model"
          onChangeText={(text) => searchHandler(text)}
          //   value={text}
        />
        <AntDesign
          name="down"
          size={18}
          color="#eb8d00"
          style={[styles.icon]}
        />
      </View>
      {
        <ScrollView>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {brand.length < 1
              ? Cars.data.map((item, index) => {
                  // console.log("new", item.models.petrol);
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        token == ""
                          ? navigation.navigate("Select Car Model", {
                              models: item.models,
                              name: item.brandName,
                              petrol: item.petrol,
                              diesel: item.diesel,
                              token: "",
                            })
                          : navigation.navigate("App", {
                              screen: "Car Model",
                              params: {
                                models: item.models,
                                name: item.brandName,
                                petrol: item.petrol,
                                diesel: item.diesel,
                                token: token,
                              },
                            });
                      }}
                      key={index}
                      style={styles.imgbox}
                    >
                      <Image source={item.brandImage} style={styles.image} />
                    </TouchableOpacity>
                  );
                })
              : searchresult.map((item, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        token == ""
                          ? navigation.navigate("Select Car Model", {
                              models: item.models,
                              name: item.brandName,
                              petrol: item.petrol,
                              diesel: item.diesel,
                              token: "",
                            })
                          : navigation.navigate("App", {
                              screen: "Car Model",
                              params: {
                                models: item.models,
                                name: item.brandName,
                                petrol: item.petrol,
                                diesel: item.diesel,
                                token: token,
                              },
                            });
                      }}
                      key={index}
                    >
                      <Image source={item.brandImage} style={styles.image} />
                    </TouchableOpacity>
                  );
                })}
          </View>
        </ScrollView>
      }
      {/* <Image
        source={{
          uri: `https://github.com/ksinghreact/brandImage/blob/main/car-brands/tata-logo.png?raw=true`,
        }}
        style={styles.image}
      /> */}
    </View>
  );
};

export default SelectCarBrand;

const styles = StyleSheet.create({
  searchBox: {
    backgroundColor: "white",
    marginHorizontal: 20,
    marginVertical: 20,
    height: 40,
    paddingHorizontal: 10,
    flexDirection: "row",
    borderRadius: 8,
    elevation: 5,
  },
  input: {
    height: "100%",
    width: "85%",
    paddingHorizontal: 5,
  },
  icon: {
    alignSelf: "center",
  },
  image: {
    width: wt(15),
    height: ht(6),
    margin: 10,
  },
  imgbox: {
    padding: wt(1),
    marginHorizontal: wt(5),
  },
});
