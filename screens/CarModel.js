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
import {
  widthPercentageToDP as wt,
  heightPercentageToDP as ht,
} from "react-native-responsive-screen";
import Carinfo from "../components/Carinfo";

const CarModel = ({ route, navigation }) => {
  // const models = navigation.getParam('models');
  // const name = navigation.getParam('name');
  const { models, name, token, petrol, diesel } = route.params;
  console.log(petrol, diesel);
  const [car, setCar] = React.useState("");
  const [searchresult, setSearchresult] = React.useState();

  const searchHandler = (prop) => {
    setCar(prop);
    if (car !== "") {
      const newBrandList = models.filter((bname) => {
        return Object.values(bname)
          .join(" ")
          .toLocaleLowerCase()
          .includes(car.toLocaleLowerCase());
      });
      setSearchresult(newBrandList);
    } else {
      setSearchresult(models);
    }
  };
  console.log(searchresult);

  return (
    <View>
      {/* <Carinfo navigation={navigation}/> */}
      <View style={{ backgroundColor: "white", height: "100%" }}>
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
        <ScrollView>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {car.length < 1
              ? models.map((item, index) => {
                  // console.log(item.petrol);
                  return (
                    <TouchableOpacity
                      style={styles.imgbox}
                      onPress={() => {
                        token == ""
                          ? navigation.navigate("Fuel Type", {
                              carmodel: item.modelName,
                              carbrand: name,
                              carimage: item.modelImage,
                              petrol: item.petrol,
                              diesel: item.diesel,
                              token: "",
                            })
                          : navigation.navigate("App", {
                              screen: "Fuel",
                              params: {
                                carmodel: item.modelName,
                                carbrand: name,
                                carimage: item.modelImage,
                                petrol: item.petrol,
                                diesel: item.diesel,
                                token: token,
                              },
                            });
                      }}
                      key={index}
                    >
                      <Image source={item.modelImage} style={styles.image} />
                      <Text style={{ textAlign: "center" }}>
                        {item.modelName}
                      </Text>
                    </TouchableOpacity>
                  );
                })
              : searchresult.map((item, index) => {
                  return (
                    <TouchableOpacity
                      style={styles.imgbox}
                      onPress={() => {
                        token == ""
                          ? navigation.navigate("Fuel Type", {
                              carmodel: item.modelName,
                              carbrand: name,
                              carimage: item.modelImage,
                              petrol: item.petrol,
                              diesel: item.diesel,
                              token: "",
                            })
                          : navigation.navigate("App", {
                              screen: "Fuel",
                              params: {
                                carmodel: item.modelName,
                                carbrand: name,
                                carimage: item.modelImage,
                                petrol: item.petrol,
                                diesel: item.diesel,
                                token: token,
                              },
                            });
                      }}
                      key={index}
                    >
                      <Image source={item.modelImage} style={styles.image} />
                      <Text>
                        {name} {item.modelName}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default CarModel;

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
    width: wt(18),
    height: ht(4.5),
  },
  imgbox: {
    margin: wt(2),
    alignItems: "center",
    width: wt(20),
    marginHorizontal: wt(6),
  },
});
