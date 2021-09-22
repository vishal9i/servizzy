import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import ImageInput from "../components/sellcarcomponents/ImageInput";
import ListButton from "../components/sellcarcomponents/ListButton";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Carinfo from "../components/Carinfo";


const SellCar = ({navigation}) => {
  const [images, setimages] = useState([]);
  const [carname, setcarname] = useState();
  const [city, setcity] = useState();
  const [location, setlocation] = useState();
  const [modelyear, setmodelyear] = useState();
  const [ownership, setownership] = useState();
  const [driven, setdriven] = useState();
  const [expectedprice, setexpectedprice] = useState();
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const newimg = [...images, result.uri];
      setimages(newimg);
    }
  };
  const deleteimg = (index) => {
    const newimg = [...images];
    newimg.splice(index, 1);
    setimages(newimg);
  };

  const sellcarapi = async () => {
    const token = await AsyncStorage.getItem("token");

    const data = {
      carName: carname,
      city: city,
      modelYear: modelyear,
      ownerShip: ownership,
      kmsDriven: driven,
      expectedPrice: expectedprice,
      location: location,
    };
    const imagedata = new FormData();
    imagedata.append("carName", carname);
    imagedata.append("city", city);
    imagedata.append("modelYear", modelyear);
    imagedata.append("location", location);
    imagedata.append("ownerShip", ownership);
    imagedata.append("kmsDriven", driven);
    imagedata.append("expectedPrice", expectedprice);
    // imagedata.append("data", JSON.stringify(data));
    images.map((item, index) => {
      imagedata.append("image", {
        type: "image/jpg",
        uri: item,
        name: `temp_image_${index}.jpg`,
      });
    });

    console.log(token, imagedata);
    fetch("https://digi-servizzy-backend.herokuapp.com/api/sell-car", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        // "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        userid: token,
      },
      body: imagedata,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <View style={{marginBottom:59}}>
      <Carinfo navigation={navigation}/>
    {/* <View style={styles.detailsContainer}>
      <Image style={styles.image} source={{ uri: images[0] }} />
      <Text style={styles.text}>{"Car Name"}</Text>
      <TextInput
        onChangeText={(text) => setcarname(text)}
        autoCapitalize="characters"
        style={styles.textinput}
        value={carname}
      ></TextInput>
      <View style={styles.detailsContainer2}>
        <View style={styles.inputCon}>
          <Text style={styles.text}>{"City"}</Text>
          <TextInput
            onChangeText={(text) => setcity(text)}
            autoCapitalize="characters"
            style={styles.textinput2}
            value={city}
          ></TextInput>
        </View>
        <View style={styles.inputCon}>
          <Text style={styles.text}>Fuel Type</Text>
          <TextInput
            onChangeText={(text) => setlocation(text)}
            autoCapitalize="characters"
            style={styles.textinput2}
            value={location}
          ></TextInput>
        </View>
      </View>
      <Text style={styles.text}>{"Model Year"}</Text>
      <TextInput
        onChangeText={(text) => setmodelyear(text)}
        style={styles.textinput}
        keyboardType="numeric"
        value={modelyear}
      ></TextInput>
      <Text style={styles.text}>{"Ownership"}</Text>
      <TextInput
        onChangeText={(text) => setownership(text)}
        autoCapitalize="characters"
        style={styles.textinput}
        value={ownership}
      ></TextInput>
      <Text style={styles.text}>{"KMs Driven"}</Text>
      <TextInput
        onChangeText={(text) => setdriven(text)}
        style={styles.textinput}
        value={driven}
        keyboardType="numeric"
      ></TextInput>
      <Text style={styles.text}>{"Expected Price"}</Text>
      <TextInput
        onChangeText={(text) => setexpectedprice(text)}
        style={styles.textinput}
        value={expectedprice}
        keyboardType="numeric"
      ></TextInput>
      <Text style={styles.upload}>{"Upload Photos"}</Text>
      <Text style={styles.subtext}>
        {"More photos give 5x more verified buyers"}
      </Text>
      <View style={styles.imglst}>
        <TouchableOpacity style={styles.imageinput} onPress={pickImage}>
          {images[0] == null ? (
            <Ionicons name="image-outline" size={45} color="black" />
          ) : (
            <Image
              source={{ uri: images[0] }}
              style={{ height: 50, width: 50 }}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageinput} onPress={pickImage}>
          {images[1] == null ? (
            <Ionicons name="image-outline" size={45} color="black" />
          ) : (
            <Image
              source={{ uri: images[1] }}
              style={{ height: 50, width: 50 }}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageinput} onPress={pickImage}>
          {images[2] == null ? (
            <Ionicons name="image-outline" size={45} color="black" />
          ) : (
            <Image
              source={{ uri: images[2] }}
              style={{ height: 50, width: 50 }}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageinput} onPress={pickImage}>
          {images[3] == null ? (
            <Ionicons name="image-outline" size={45} color="black" />
          ) : (
            <Image
              source={{ uri: images[3] }}
              style={{ height: 50, width: 50 }}
            />
          )}
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => sellcarapi()}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          List Your Vehicle
        </Text>
      </TouchableOpacity>
    </View> */}
    <Image style={styles.img} source={require("../images/Buysell/Launching_Soon.png") } />
    {/* <View style={{height:100,width:"100%",backgroundColor:"#fff",marginTop:15}}>
    <Image 
    source={require("../images/welcome/Logo.png")} 
    style={{height:100,width:150,alignSelf:"center"}}
    />
    </View> */}
    </View>
  );
};

export default SellCar;

const styles = StyleSheet.create({
  detailsContainer: {
    // paddingTop: 20,
    width: "100%",
    height: 100,
    alignItems: "center",
    //   borderWidth:1
  },
  detailsContainer2: {
    paddingLeft: 10,
    width: "100%",
    height: 80,
    // alignItems:"center",
    flexDirection: "row",
    justifyContent: "center",
    // borderWidth:1
  },
  inputCon: {
    width: "40%",
  },
  image: {
    width: "31%",
    height: 90,
    borderRadius: 10,
    alignItems: "center",
  },
  textinput2: {
    width: "90%",
    // flex:1,
    borderBottomColor: "#000",
    height: 30,
    borderBottomWidth: 1,
    // borderWidth:1
  },
  textinput: {
    width: "75%",
    borderBottomColor: "#000",
    height: 30,
    borderBottomWidth: 1,
    // borderWidth:1
  },
  text: {
    paddingTop: 5,
    paddingBottom: -8,
    width: "75%",
    // borderWidth:1
  },
  upload: {
    paddingTop: 5,
    width: "75%",
    fontWeight: "bold",
  },
  subtext: {
    paddingBottom: -8,
    width: "75%",
    fontSize: 12,
  },
  imglst: {
    height: 80,
    // flex:1,
    flexDirection: "row",
    width: "100%",
    // borderWidth:1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  btn: {
    width: "100%",
    borderWidth: 1,
    backgroundColor: "red",
  },
  imageinput: {
    backgroundColor: "gray",
    borderRadius: 10,
    overflow: "hidden",
  },
  button: {
    backgroundColor: "#FC4805",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "90%",
  },
  img:{
    width:"71%",
    height:"27%",         
    marginTop:15,
    alignSelf:"center",
    marginTop:"50%"
    
},
});
