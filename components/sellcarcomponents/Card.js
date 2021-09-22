import React from "react";
import { View, StyleSheet, Image, Button,Modal } from "react-native";
import AppButton from "./AppButton";
import AppButton2 from "./AppButton2";

import AppText from "./AppText";

function Card({
  title,
  subTitle,
  image,
  km,
  type,
  location,
  navigation,
  images,
}) {
  return (
    <View>
      {/* <Modal animationType={"slide"} visible={Model} transparent={true}>
        <View
          style={{
            width: "80%",
            backgroundColor: "#FD6902",
            height: "35%",
            alignSelf: "center",
            marginVertical: "68%",
            borderRadius: 10,
            paddingTop: 10,
            paddingRight: 5,
            alignSelf:"center",
            paddingBottom: "15%",
            // alignItems:"center",
          }}
        >
          <View>
            <TouchableOpacity onPress={() => setModel(false)}>
              <Image
                source={require("../")}
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 15,
                  alignSelf: "flex-end",
                }}
              />
            </TouchableOpacity>
          </View>
         <Text style={styles.text}> Are You Sure </Text>
         <Text style={styles.text}> You Want To Delete This</Text>
         <Text style={styles.text}> Address ?</Text>
         <View style={{alignItems:"center",flexDirection:"row",justifyContent:"space-around",elevation:5}}>
         <TouchableOpacity style={styles.save} onPress={() =>del()}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              YES
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.save} onPress={() => setModel(false) }>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              NO
            </Text>
          </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{
          uri: `https://servizzy-server.herokuapp.com/${image}`,
        }}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>
          {`${km} kms`} {type} {location}
        </AppText>
        <AppText style={styles.price}>{subTitle}</AppText>
        {/* <View style={styles.detailsContainer2}>
        <Button color="#FC4805" borderRadius="100" title='View Car Details' />
        <Button type="outline" title='Contact Seller' />
        </View> */}
        <View style={styles.detailsContainer2}>
          <AppButton
            title="View Car Details"
            onPress={() =>
              navigation.navigate("App", {
                screen: "Car Detail",
                params: {
                  images: images,
                  title,
                  image,
                  km,
                  type,
                  location,
                  subTitle,
                },
              })
            }
          />
          <AppButton2
            title="Contact Owner"
            onPress={() => setModel(true)}
          />
        </View>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 2,
    overflow: "hidden",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  detailsContainer: {
    padding: 20,
    flex: 1,
  },
  detailsContainer2: {
    maxWidth: "100%",
    flex: 1,
    paddingTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: "31%",
    height: 90,
    borderRadius: 10,
  },
  title: {
    marginTop: -20,
  },
  subTitle: {
    color: "#99A3A4",
  },
  price: {
    color: "#000",
    fontWeight: "bold",
  },
  save: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 7,
    width:"40%",
    marginTop:"12%",
  },
  text:{
    alignSelf:"center",
    color:"#fff",
    fontSize:20,
    // alignSelf:"center",
    // marginTop:"3%",
    marginLeft:10
  }
});

export default Card;
