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
import Carinfo from "../components/Carinfo";

const data = {
  air: [
    { name: "COMPRESSOR", image: require("../images/services/1.png") },
    { name: "CONDENSER", image: require("../images/services/1.png") },
    { name: "EVAPORATORS", image: require("../images/services/1.png") },
  ],
  filters: [
    { name: "AIR FILTER", image: require("../images/services/1.png") },
    { name: "FUEL FILTER", image: require("../images/services/1.png") },
    { name: "OIL FILTER", image: require("../images/services/1.png") },
  ],
  lighting: [
    { name: "HEAD LIGHT", image: require("../images/services/1.png") },
    { name: "TAIL LIGHT", image: require("../images/services/1.png") },
    { name: "FOG LAMP", image: require("../images/services/1.png") },
  ],
};

const Addcomponents = ({ route, navigation }) => {
  const features = route.params;
  console.log(features);
  const [search, setsearch] = useState();
  const [mark, setmark] = useState([]);

  console.log(mark);

  const selectdata = (prop) => {
    // console.log(prop);
    const newdata = [...mark, prop];
    setmark(newdata);
  };
  const removeitem = (index) => {
    const newdata = [...mark];
    newdata.splice(index, 1);
    setmark(newdata);
  };

  const onChangeSearch = (query) => setsearch(query);

  return (
    <View style={styles.container}>
      <Carinfo navigation={navigation}/>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={search}
        />
      </View>
      <View style={styles.container2}>
        <ScrollView>
          <View>
            <Title>Air conditioning</Title>
            <View style={{ flexDirection: "row" }}>
              {data.air.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.itembox,
                      {
                        backgroundColor: mark.find((i) => i == item.name)
                          ? "rgba(255, 141, 0, 1)"
                          : null,
                      },
                    ]}
                    key={index}
                    onPress={() =>
                      mark.find((i) => i == item.name)
                        ? removeitem(mark.indexOf(item.name))
                        : selectdata(item.name)
                    }
                  >
                    <Image source={item.image} style={styles.img} />
                    <Caption style={{ fontSize: wt(2.4) }}>{item.name}</Caption>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View>
            <Title>Filters</Title>
            <View style={{ flexDirection: "row" }}>
              {data.filters.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.itembox,
                      {
                        backgroundColor: mark.find((i) => i == item.name)
                          ? "rgba(255, 141, 0, 1)"
                          : null,
                      },
                    ]}
                    key={index}
                    onPress={() =>
                      mark.find((i) => i == item.name)
                        ? removeitem(mark.indexOf(item.name))
                        : selectdata(item.name)
                    }
                  >
                    <Image source={item.image} style={styles.img} />
                    <Caption>{item.name}</Caption>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          <View>
            <Title>Lights</Title>
            <View style={{ flexDirection: "row" }}>
              {data.lighting.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={[
                      styles.itembox,
                      {
                        backgroundColor: mark.find((i) => i == item.name)
                          ? "rgba(255, 141, 0, 1)"
                          : null,
                      },
                    ]}
                    key={index}
                    onPress={() =>
                      mark.find((i) => i == item.name)
                        ? removeitem(mark.indexOf(item.name))
                        : selectdata(item.name)
                    }
                  >
                    <Image source={item.image} style={styles.img} />
                    <Caption>{item.name}</Caption>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              margin: wt(5),
              justifyContent: "space-around",
            }}
          >
            <Button
              mode="contained"
              color="rgba(255, 141, 0, 1)"
              labelStyle={{ color: "white" }}
              onPress={() =>
                mark.length == 0
                  ? alert("plz select something")
                  : navigation.navigate("App", {
                      screen: "Service Type",
                      params: { features, mark },
                    })
              }
            >
              CONTINUE
            </Button>

            <Button
              mode="outlined"
              color="rgba(255, 141, 0, 1)"
              style={{ width: wt(30) }}
              onPress={() =>
                navigation.navigate("App", {
                  screen: "Service Type",
                  params: { features },
                })
              }
            >
              SKIP
            </Button>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Addcomponents;

const styles = StyleSheet.create({
  search: {
    margin: 10,
  },
  container: {
    backgroundColor: "rgba(255, 141, 0, 1)",
    height: "100%",
  },
  container2: {
    backgroundColor: "white",
    height: "100%",
    marginTop: ht(6),
    borderTopLeftRadius: wt(15),
    borderTopRightRadius: wt(15),
    elevation: 5,
    paddingTop: ht(3),
    paddingHorizontal: wt(5),
    paddingBottom: ht(15),
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
});
