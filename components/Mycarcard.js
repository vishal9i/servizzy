import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Cars } from "../data/carsdata";

const Mycarcard = ({ brand, name, fuelType }) => {
  // const [img, setimg] = useState();
  // let img = null;
  // console.log(fuelType)
  const brandindex = Cars.data.filter((i) => Object.values(i).includes(brand));
  // const dataindex = Cars.data.indexOf(brandindex);
  // console.log(brandindex);

  const modelindex = brandindex[0].models.filter((i) =>
    Object.values(i).includes(name)
  );
  // console.log(modelindex);

  let img = modelindex.length > 0 ? modelindex[0].modelImage : null;

  // console.log(fuelType);

  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{ fontWeight: "bold", marginHorizontal: 15, fontSize: 17 }}
            >
              {brand}
            </Text>
            <Text style={{ marginHorizontal: 15, fontSize: 14 }}>{name}</Text>
            <Text
              style={{ marginHorizontal: 15, color: "black", fontSize: 10 }}
            >
              {fuelType}
            </Text>
          </View>
          <Image
            source={img}
            style={{ height: 40, width: 85, overflow: "hidden" }}
          />
        </View>
      </View>
    </View>
  );
};

export default Mycarcard;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 7,
    borderWidth: 1,
    padding: 10,
    borderColor: "#f07102",
  },
});
