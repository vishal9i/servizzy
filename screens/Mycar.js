import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  Switch,
  Alert,
  Modal,
  ImageBackground,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import DatePicker from "react-native-datepicker";
import { Cars } from "../data/carsdata";
import Mycarcard from "../components/Mycarcard";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useIsFocused } from "@react-navigation/native";

const Mycar = ({ navigation }) => {
  const [name, setName] = useState();
  const [brand, setBrand] = useState();
  const [fuel, setFuel] = useState();
  const [img, setImg] = useState();
  const [carid, setCarid] = useState();
  const [date, setdate] = useState(null);
  const [ralert, setalert] = useState();
  const [registrationno, setregistrationno] = useState(null);
  const [manufactureyear, setmanufactureyear] = useState(null);
  const [chessisno, setchessisno] = useState(null);
  const [insurancename, setinsurancename] = useState(null);
  const [policyname, setpolicyname] = useState(null);
  const [engineno, setengineno] = useState(null);
  const [addcar, setaddcar] = useState([]);
  const [images, setimages] = useState([]);
  const [userimage, setUserImage] = useState([]);
  const [Popup1, setPopup1] = useState(false);
  const [Popup2, setPopup2] = useState(false);
  const [Popup3, setPopup3] = useState(false);
  // const [Temp, setTemp] = useState(-1)
  let isFocused = useIsFocused();
  const getcardata = async () => {
    const token = await AsyncStorage.getItem("token");
    // console.log(token);
    fetch("https://digi-servizzy-backend.herokuapp.com/api/get-car-details", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        userid: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // setaddcar(data.data);
        // setCarid(data.data._id);
      });
  };
  React.useEffect(() => {
    getcardata();
  }, []);

  const getdata = async () => {
    const token = await AsyncStorage.getItem("token");
    // console.log(token);
    fetch("https://digi-servizzy-backend.herokuapp.com/api/get-car-details", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        userid: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("we need this = ", data.data[0].fuelType);
        // console.log(data);
        setaddcar(data.data);
        setCarid(data.data[0]._id);
        setBrand(data.data[0].brandName);
        setName(data.data[0].modelName);
        setFuel(data.data[0].fuelType);
        const img = data.data[0].images.map((x) => x.imageUrl);
        // console.log("Require",img)

        setimages(img);
        // setImage(data.data[0].images)
        // setaddcar(data.data);
        getcardetails({ token: data.data[0].userId });

        const brandindex = Cars.data.filter((i) =>
          Object.values(i).includes(data.data[0].brandName)
        );
        // const dataindex = Cars.data.indexOf(brandindex);

        const modelindex = brandindex[0].models.filter((i) =>
          Object.values(i).includes(data.data[0].modelName)
        );

        setImg(modelindex[0].modelImage);
      });
  };
  React.useEffect(() => {
    getdata();
  }, []);
  const addcardetails = () => {
    
    const data = {
      registrationNumber: registrationno,
      manufacYear: manufactureyear,
      chassisNumber: chessisno,
      engineNumber: engineno,
      insuranceNumber: insurancename,
      insurerExpiryDate: date,
      policyName: policyname,
      reminder: ralert == 30 ? true : false,
    };
    const imagedata = new FormData();
    if (registrationno) {
      imagedata.append("registrationNumber", registrationno);
    }
    if (manufactureyear) {
      imagedata.append("manufacYear", manufactureyear);
    }
    if (chessisno) {
      imagedata.append("chassisNumber", chessisno);
    }
    if (engineno) {
      imagedata.append("engineNumber", engineno);
    }
    if (insurancename) {
      imagedata.append("insuranceNumber", insurancename);
    }
    if (date) {
      imagedata.append("insurerExpiryDate", date);
    }
    if (policyname) {
      imagedata.append("policyName", policyname);
    }

    imagedata.append("reminder", ralert == 30 ? true : false);
    userimage.map((item, index) => {
      imagedata.append("image", {
        type: "image/jpg",
        uri: item,
        name: `temp_image_${index}.jpg`,
      });
    });

    fetch(
      "https://digi-servizzy-backend.herokuapp.com/api/complete-car-details",
      {
        method: "PUT",
        headers: {
          // "Content-Type": "application/json",
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          carid: carid,
        },
        // body: JSON.stringify({
        //   registrationNumber: registrationno,
        //   manufacYear: manufactureyear,
        //   chassisNumber: chessisno,
        //   engineNumber: engineno,
        //   insuranceNumber: insurancename,
        //   insurerExpiryDate: date,
        //   policyName: policyname,
        //   image:images,
        //   reminder: ralert == 30 ? true : false,
        // }),
        body: imagedata,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log("this is carid  =  ", carid);
        // console.log(data);
        data.success == true
          ? Alert.alert("Details Updated Successfully !")
          : Alert.alert("Details not Updated Try again !");
      });
  };
  // let carimage = name ? `../images/modelsimage/${brand}/${name}.png` : null;
  const getcardetails = ({ token }) => {
    fetch("https://digi-servizzy-backend.herokuapp.com/api/get-car-details", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        userId: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setchessisno(data.data[0].chassisNumber);
        setengineno(data.data[0].engineNumber);
        setinsurancename(data.data[0].insuranceNumber);
        setdate(data.data[0].insurerExpiryDate);
        setmanufactureyear(data.data[0].manufacYear);
        setpolicyname(data.data[0].policyName);
        setregistrationno(data.data[0].registrationNumber);
        setalert(data.data[0].reminder);
        // setaddcar(data.data);
      });
  };
  const [model, setmodel] = useState(false);

  const SelectCar = (nid, oid) => {
    // console.log(nid, oid);
    fetch(
      "https://digi-servizzy-backend.herokuapp.com/api/current-car-details",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ocarid: oid,
          ncarid: nid,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.success == true) {
          getdata();
          setmodel(false);
        } else {
          alert(data.message);
        }
      });
  };

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
      const imgs = [...userimage, result.uri];
      setUserImage(imgs);
    }
  };

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

  useEffect(() => {
    if (isFocused) {
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Modal animationType={"slide"} visible={Popup1} transparent={true}>
        <ScrollView 
        style={{
              alignSelf: "center",
              marginVertical: "10%",
              borderRadius: 10,
              paddingTop: 10,
              paddingRight: 5,
              backgroundColor: "#fff",
              paddingBottom: "15%",
              width: "100%",
              // height: "90%",
              // justifyContent: "center",
              flex:1
            }}
        >
          <View
            // style={{
            //   alignSelf: "center",
            //   marginVertical: "10%",
            //   borderRadius: 10,
            //   paddingTop: 10,
            //   paddingRight: 5,
            //   backgroundColor: "#fff",
            //   paddingBottom: "15%",
            //   width: "100%",
            //   // height: "90%",
            //   justifyContent: "center",
            //   flex:1
            // }}
          >
            <TouchableOpacity onPress={() => setPopup1(false)}>
              <Image
                source={require("../images/Problem/x.png")}
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 15,
                  alignSelf: "flex-end",
                }}
              />
            </TouchableOpacity>

            <Image
              style={{
                height: 260,
                width: 320,
                alignSelf: "center",
                overflow: "hidden",
              }}
              source={{ uri: images[0] }}
            />
          </View>
        </ScrollView>
      </Modal>

      <Modal animationType={"slide"} visible={Popup2} transparent={true}>
        <ScrollView
          style={{
            width: "90%",
            backgroundColor: "#fff",
            height: "70%",
            alignSelf: "center",
            marginVertical: "10%",
            borderRadius: 10,
            paddingTop: 10,
            paddingRight: 5,
            paddingBottom: "15%",
          }}
        >
          <View>
            <TouchableOpacity onPress={() => setPopup2(false)}>
              <Image
                source={require("../images/Problem/x.png")}
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 15,
                  alignSelf: "flex-end",
                }}
              />
            </TouchableOpacity>
          </View>
          <Image
            style={{ height: 260, width: 320, overflow: "hidden" }}
            source={{ uri: images[1] }}
          />
        </ScrollView>
      </Modal>

      <Modal animationType={"slide"} visible={Popup3} transparent={true}>
        <ScrollView
          style={{
            width: "90%",
            backgroundColor: "#fff",
            height: "70%",
            alignSelf: "center",
            marginVertical: "10%",
            borderRadius: 10,
            paddingTop: 10,
            paddingRight: 5,

            paddingBottom: "15%",
          }}
        >
          <View>
            <TouchableOpacity onPress={() => setPopup3(false)}>
              <Image
                source={require("../images/Problem/x.png")}
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 15,
                  alignSelf: "flex-end",
                }}
              />
            </TouchableOpacity>
          </View>
          <Image
            style={{ height: 260, width: 320, overflow: "hidden" }}
            source={{ uri: images[2] }}
          />
        </ScrollView>
      </Modal>

      <Modal animationType={"slide"} visible={model} transparent={true}>
        <ScrollView
          style={{
            width: "90%",
            backgroundColor: "#fff",
            height: "70%",
            alignSelf: "center",
            marginVertical: "10%",
            borderRadius: 10,
            paddingTop: 10,
            paddingRight: 5,

            paddingBottom: "15%",
          }}
        >
          <View>
            <TouchableOpacity onPress={() => setmodel(!model)}>
              <Image
                source={require("../images/Problem/x.png")}
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 15,
                  alignSelf: "flex-end",
                }}
              />
            </TouchableOpacity>
          </View>

          {addcar.length > 0
            ? addcar.map((data, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => SelectCar(data._id, carid)}
                  >
                    <Mycarcard
                      img={data.images}
                      name={data.modelName}
                      fuelType={data.fuelType}
                      brand={data.brandName}
                    />
                  </TouchableOpacity>
                );
              })
            : null}
          <TouchableOpacity
            style={styles.addbox}
            onPress={() =>
              navigation.navigate("App", {
                screen: "Select your car brand",
                params: { token: carid },
              })
            }
          >
            <View
              style={{
                flexDirection: "row",
                width: 280,
                justifyContent: "space-around",
              }}
            >
              <Text style={styles.text}>{"+Own Another Car"}</Text>
            </View>
          </TouchableOpacity>
          {/* {addcar.map((data, index) => {
          return (
        <Mycarcard
        name={data.model}
        fuletype={data.fuel}
        brand={data.brand}
        status={true}
        key={index}
        />
        );
        })} */}
        </ScrollView>
        {/* {addcar.map((item, index) => {
          return (
        <Mycarcard
        name={item.name}
        fueltype={item.fuelType}
        brand={item.brand}
        // status={true}
        // key={index}
        />
        );
        })} */}
      </Modal>
      <View style={styles.top}>
        <Text style={styles.topText}>My Fleet </Text>
        <TouchableOpacity
          // onPress={() =>
          //   navigation.navigate("App", {
          //     screen: "Select your car brand",
          //     params: { token: carid },

          //   })
          // }
          onPress={() => setmodel(true)}
        >
          <Text style={[styles.topText, { color: "#f07102" }]}>Change car</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ paddingBottom: "7%" }}>
            <View style={styles.carname}>
              <Text style={{ fontSize: 28, color: "gray" }}>{brand}</Text>
              <Text style={{ fontSize: 28, color: "gray" }}>{name}</Text>
              <Text style={{ fontSize: 19, color: "gray" }}>{fuel}</Text>
            </View>
            <Image
              source={img}
              style={{ width: 250, height: 150, alignSelf: "center" }}
            />
            <View>
              {/* <Text style={{ fontSize: 20, marginLeft: 16 }}>
                Verify your car
              </Text> */}
              <View style={styles.inputcode}>
                <TextInput
                  autoCapitalize="characters"
                  placeholder="Registration Number Ex-HR 36 SU 4318"
                  style={{ width: "80%", height: 40 }}
                  value={registrationno}
                  onChangeText={(text) => setregistrationno(text)}
                />
              </View>
              <View style={styles.inputcode}>
                <TextInput
                  keyboardType="numeric"
                  placeholder="Manufacturing Year Ex-2020"
                  style={{ width: "80%" }}
                  value={manufactureyear}
                  onChangeText={(text) => setmanufactureyear(text)}
                />
              </View>
              <View style={styles.inputcode}>
                <TextInput
                  autoCapitalize="characters"
                  placeholder="Chassis number (Optional)"
                  style={{ width: "80%" }}
                  value={chessisno}
                  onChangeText={(text) => setchessisno(text)}
                />
              </View>
              <View style={styles.inputcode}>
                <TextInput
                  autoCapitalize="characters"
                  placeholder="Engine Number (Optional)"
                  style={{ width: "80%" }}
                  value={engineno}
                  onChangeText={(text) => setengineno(text)}
                />
              </View>
              <View style={styles.inputcode}>
                <TextInput
                  autoCapitalize="characters"
                  placeholder="Insurance Name (Optional)"
                  style={{ width: "80%" }}
                  value={insurancename}
                  onChangeText={(text) => setinsurancename(text)}
                />
                <TouchableOpacity>
                  <Image
                    source={require("../images/mycar/triangle.png")}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.inputcode}>
                <DatePicker
                  showIcon={false}
                  androidMode="spinner"
                  style={{ width: 300 }}
                  date={date}
                  mode="date"
                  placeholder="Insurance Expiry Date (optional)"
                  format="DD/MM/YYYY"
                  // maxDate={new Date()}
                  confirmBtnText="Chọn"
                  cancelBtnText="Hủy"
                  customStyles={{
                    dateInput: {
                      backgroundColor: "white",
                      alignItems: "flex-start",
                      borderColor: "white",
                      width: "10%",
                    },
                  }}
                  style={{ width: "50%" }}
                  // style={styles.inputs}
                  onDateChange={(date) => {
                    setdate(date);
                  }}
                />
                <TouchableOpacity>
                  <Image
                    source={require("../images/mycar/calendar.png")}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.inputcode}>
                <TextInput
                  autoCapitalize="characters"
                  placeholder="Policy Name (Optional)"
                  style={{ width: "80%" }}
                  value={policyname}
                  onChangeText={(text) => setpolicyname(text)}
                />
                <TouchableOpacity>
                  <Image
                    source={require("../images/mycar/triangle.png")}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>

              {/* <Text
                style={{ color: 'gray', fontSize: 17, marginHorizontal: 10 }}
              >
                Why get verified?
              </Text>
              <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                <View style={styles.point}>
                  <AntDesign name="checkcircle" size={14} color="#f07102" />
                  <Text style={{ color: 'gray', marginLeft: 10 }}>
                    Get best price for your car service
                  </Text>
                </View>
                <View style={styles.point}>
                  <AntDesign name="checkcircle" size={14} color="#f07102" />
                  <Text style={{ color: 'gray', marginLeft: 10 }}>
                    Easy check active/pending challans
                  </Text>
                </View>
                <View style={styles.point}>
                  <AntDesign name="checkcircle" size={14} color="#f07102" />
                  <Text style={{ color: 'gray', marginLeft: 10 }}>
                    Scan and notify feature enabled
                  </Text>
                </View>
              </View> */}
              <View style={styles.imglst}>
                {/* <ImageInput /> */}
                {/* {console.log(images[0] ||( image.length>=1 && image[0].imageUrl))} */}
                <View style={{ alignItems: "center" }}>
                  <TouchableOpacity
                    style={styles.imageinput}
                    onPress={pickImage}
                  >
                    {images[0] == null ? (
                      <Ionicons name="image-outline" size={45} color="black" />
                    ) : (
                      <ImageBackground
                        source={{ uri: images[0] }}
                        style={{ height: 50, width: 50, alignSelf: "center" }}
                      >
                        <Ionicons
                          onPress={() => setPopup1(true)}
                          name="md-eye-sharp"
                          size={24}
                          color="#f07102"
                          style={{ marginTop: "30%", marginLeft: "30%" }}
                        />
                      </ImageBackground>
                    )}
                  </TouchableOpacity>
                  <Text style={{ fontSize: 10 }}>Upload/View RC</Text>
                </View>
                <View style={{ marginTop: 10, alignItems: "center" }}>
                  <TouchableOpacity
                    style={styles.imageinput}
                    onPress={pickImage}
                  >
                    {images[1] == null ? (
                      <Ionicons name="image-outline" size={45} color="black" />
                    ) : (
                      <ImageBackground
                        source={{ uri: images[1] }}
                        style={{ height: 50, width: 50, alignSelf: "center" }}
                      >
                        <Ionicons
                          onPress={() => setPopup2(true)}
                          name="md-eye-sharp"
                          size={24}
                          color="#f07102"
                          style={{ marginTop: "30%", marginLeft: "30%" }}
                        />
                      </ImageBackground>
                    )}
                  </TouchableOpacity>
                  <Text style={{ fontSize: 10 }}>Upload/View</Text>
                  <Text style={{ fontSize: 10 }}>Insurance</Text>
                </View>
                <View style={{ marginTop: 10, alignItems: "center" }}>
                  <TouchableOpacity
                    style={styles.imageinput}
                    onPress={pickImage}
                  >
                    {images[2] == null ? (
                      <Ionicons name="image-outline" size={45} color="black" />
                    ) : (
                      <ImageBackground
                        source={{ uri: images[2] }}
                        style={{ height: 50, width: 50, alignSelf: "center" }}
                      >
                        <Ionicons
                          onPress={() => setPopup3(true)}
                          name="md-eye-sharp"
                          size={24}
                          color="#f07102"
                          style={{ marginTop: "30%", marginLeft: "30%" }}
                        />
                      </ImageBackground>
                    )}
                  </TouchableOpacity>
                  <Text style={{ fontSize: 10 }}>Upload/View </Text>
                  <Text style={{ fontSize: 10 }}>Pollution Certificate</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View>
                  <Text style={{ fontWeight: "bold" }}>Receive Reminders</Text>
                  <Text style={{ fontWeight: "bold" }}> {"&"} Alerts</Text>
                </View>
                <Switch
                  trackColor={{ false: "#767577", true: "#f07102" }}
                  thumbColor={"#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => setalert(!ralert)}
                  value={ralert}
                />
                <Text style={{ color: "gray" }}>30 days before</Text>
              </View>
              <TouchableOpacity
                style={styles.save}
                onPress={() => addcardetails()}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
                >
                  SAVE
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Mycar;

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    padding: 10,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topText: {
    fontSize: 20,
    marginHorizontal: 20,
  },
  container2: {
    marginTop: "10%",
    backgroundColor: "white",
    marginHorizontal: 8,
    height: "93%",
    elevation: 5,
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  carname: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  inputcode: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    borderColor: "#f07102",

    overflow: "hidden",
  },
  point: {
    flexDirection: "row",
    alignItems: "center",
  },
  save: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f07102",
    borderRadius: 7,
    marginTop: "10%",
  },
  icon: {
    height: 20,
    width: 20,
    marginHorizontal: 10,
  },
  addbox: {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "#f07102",
    margin: 10,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#ebebeb",
    alignSelf: "center",
    // marginBottom:10
  },
  text: {
    fontSize: 25,
    color: "gray",
  },
  // container: {
  //   backgroundColor: 'white',
  //   height: '100%',
  // },
  Mheader: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
    // marginTop:20
    // color:"#fff",
  },
  btn: {
    // alignSelf:"center",
    marginTop: 50,
    borderColor: "#f07102",
    backgroundColor: "orange",
  },
  btntxt: {
    alignSelf: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  imglst: {
    height: 100,
    // flex:1,
    flexDirection: "row",
    width: "92%",
    borderWidth: 1,
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",
    borderColor: "#f07102",
    borderRadius: 15,
  },
  imageinput: {
    overflow: "hidden",
    alignSelf: "center",
  },
  popupimg: {
    width: "100%",
    height: "100%",
  },
});
