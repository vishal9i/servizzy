import React, {useState,useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Image, Text, ScrollView, TouchableOpacity, View,Modal } from "react-native";
import { Button } from 'react-native-paper';
import * as Location from 'expo-location'

function Loc( {navigation} ){
    const [city,setcity] = useState();
    const [Model, setModel] = useState(false);
    // const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);

//   const [displayCurrentAddress, setDisplayCurrentAddress] = useState();
const [location, setLocation] = useState(null);
      const [errorMsg, setErrorMsg] = useState(null);
    const getLocation = async ()=> {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        console.log(location);
        navigation.replace("Tab", { screen: "Home"})
      }
       const getcity = async ()=> {
        const token = await AsyncStorage.getItem("token");
            fetch(
              "https://digi-servizzy-backend.herokuapp.com/api/add-location",
              {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                  userid: token,
                },
                body: JSON.stringify({
                  city:city
                }),
              }
            )
        console.log(city);
        navigation.navigate("Tab", { screen: "Home"})
      }
//         const { granted } = await Location.requestPermissionsAsync();
//         if (!granted) return;
//         const { coords:{latitude , longitude} } = await Location.getLastKnownPositionAsync();
// setLocation({ latitude,longitude});
// console.log(location)
//     };





//     useEffect(() => {
//         getLocation();
//     }, []);
    //   const [location, setLocation] = useState(null);
    //   const [errorMsg, setErrorMsg] = useState(null);
    
    //   useEffect(() => {
    //     (async () => {
    //       let { status } = await Location.requestForegroundPermissionsAsync();
    //       if (status !== 'granted') {
    //         setErrorMsg('Permission to access location was denied');
    //         return;
    //       }
    
    //       let location = await Location.getCurrentPositionAsync({});
    //       setLocation(location);
    //     })();
    //   }, []);

    // useEffect(() => {
    //     GetCurrentLocation();
    //   }, []);

    // const getLocation = async ()=> {
    //     let enabled = await Location.hasServicesEnabledAsync();

    //         if (!enabled) {
    //           Alert.alert(
    //             'Location Service not enabled',
    //             'Please enable your location services to continue',
    //             [{ text: 'OK' }],
    //             { cancelable: false }
    //           );
    //         } else {
    //           setLocationServiceEnabled(enabled);
    //         }
    //       };
        
    //       const GetCurrentLocation = async () => {
    //         let { status } = await Location.requestPermissionsAsync();
        
    //         if (status !== 'granted') {
    //           Alert.alert(
    //             'Permission not granted',
    //             'Allow the app to use location service.',
    //             [{ text: 'OK' }],
    //             { cancelable: false }
    //           );
    //         }
        
    //         let { coords } = await Location.getCurrentPositionAsync();
        
    //         if (coords) {
    //           const { latitude, longitude } = coords;
    //           let response = await Location.reverseGeocodeAsync({
    //             latitude,
    //             longitude
    //           });
        
    //           for (let item of response) {
    //             // console.log(item)
    //             let address = `${item.name}, ${item.street}, ${item.postalCode}, ${item.city}`;
        
    //             setDisplayCurrentAddress(address);
    //             console.log(displayCurrentAddress)
    //                 navigation.navigate('Home');
                   
    //             }
    //           }
    // };

// const putLocation = async (Location) => {
//     const token = await AsyncStorage.getItem("token");
// fetch("https://digi-servizzy-backend.herokuapp.com/api/get-car-details", {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       userid: token,
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//     });
// };
// const putLocation = () => {
//     const token = await AsyncStorage.getItem("token");
//     fetch(
//       "https://digi-servizzy-backend.herokuapp.com/api/add-location",
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           userid: token,
//         },
//         body: JSON.stringify({
//           address:location
//         }),
//       }
//     ) <Text> Jaipur</Text>
//       .then((res) => res.json())
//       .then((data) => {
//         data.success == true
//           ? navigation.navigate("Tab", { screen: "Home"})
//           : Alert.alert("Data not Updated Try again !");
//       });
//   };
    return (
        <ScrollView style={styles.View}> 
        <Modal animationType={"slide"} visible={Model} transparent={true}>
          <View
            style={{
              width: "90%",
              backgroundColor: "#fff",
              height: "55%",
              alignSelf: "center",
              marginVertical: "38%",
              borderRadius: 10,
              paddingTop: 10,
              paddingRight: 5,
              alignSelf: "center",
              paddingBottom: "15%",
              elevation:10,
            //   alignItems:"center",
            }}
          >
            <View>
              <TouchableOpacity onPress={() => setModel(false)}>
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
            {/* <Text style={styles.text}> Are You Sure </Text>
            <Text style={styles.text}> You Want To Delete This</Text>
            <Text style={styles.text}> Address ?</Text> */}
            <Image 
            style={{alignSelf: "center", height:100,width:235}} 
            source={require("../images/Buysell/Launching_Soon.png") } />
            <Image
        source={require("../images/welcome/Logo.png")} 
        // style={{ width: 80, height: 50 }}
        style={{height:100,width:150,backgroundColor:"#fff",alignSelf:"center",marginTop:45}}
        />
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-around",
                elevation: 10,
              }}
            >
              <TouchableOpacity
                style={styles.save}
                onPress={() => setModel(false)}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", color: "white" }}
                >
                  BACK
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
            {/* <Image style={styles.image} source={require("../images/location/Location.png")} /> */}
            <View style={styles.headingback}>
            <Text style={styles.heading}>{"Select City"}</Text>
            </View>
            <View style={styles.location}>
            
            <TouchableOpacity style={styles.logo} onPress={() => setcity("Delhi")} >
            <Image style={[styles.imgbtn,{borderColor: city == "Delhi" ? "#f07102" : "#fff",}]} source={require("../images/location/Loc/Delhi.jpg")} />
            <Text> Delhi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logo} onPress={() => setcity("Gurugram")} >
            <Image style={[styles.imgbtn,{borderColor: city == "Gurugram" ? "#f07102" : "#fff",}]} source={require("../images/location/Loc/Gurugram.png")} />
            <Text> Gurugram</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logo} onPress={() => setcity("Noida")} >
            <Image style={[styles.imgbtn,{borderColor: city == "Noida" ? "#f07102" : "#fff",}]} source={require("../images/location/Loc/Noida.png")} />
            <Text> Noida</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logo} onPress={() => setcity("Ghaziabad")} >
            <Image style={[styles.imgbtn,{borderColor: city == "Ghaziabad" ? "#f07102" : "#fff",}]} source={require("../images/location/Loc/Ghaziabad.png")} />
            <Text> Ghaziabad</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.location}>
            <TouchableOpacity style={styles.logo} onPress={() => setcity("Faridabad")} >
            <Image style={[styles.imgbtn,{borderColor: city == "Faridabad" ? "#f07102" : "#fff",}]} source={require("../images/location/Loc/Faridabad.jpg")} />
            <Text> Faridabad</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logo} onPress={() => setModel(true)} >
            <Image style={[styles.imgbtn,{borderColor: city == "Agra" ? "#f07102" : "#fff",}]} source={require("../images/location/Loc/Agra.png")} />
            <Text> Agra</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logo} onPress={() => setModel(true)} >
            <Image style={[styles.imgbtn,{borderColor: city == "comming Soon" ? "#f07102" : "#fff",}]} source={require("../images/location/Loc/Chandigarh.jpg")} />
            <Text> Chandigarh</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.logo} onPress={() => setModel(true)} >
            <Image style={[styles.imgbtn,{borderColor: city == "Comming Soon" ? "#f07102" : "#fff",}]} source={require("../images/location/Loc/Jaipur.jpg")} />
            <Text> Jaipur</Text>
            </TouchableOpacity>
            </View>
                {/* <TouchableOpacity style={styles.btn} onPress={() => getLocation()} >
                   <Text style={styles.btntxt}>
                   Get Your Current Location
                   </Text>
                </TouchableOpacity> */}
            <TouchableOpacity style={styles.btn} onPress={() => getcity()} >
                <Text style={styles.btntxt}>
                PROCEED
                </Text>
            </TouchableOpacity>
            </ScrollView>
            )
};
const styles = StyleSheet.create({
    headingback:{
        width:"100%",
        backgroundColor:"#EAEDEE",
        marginTop:45,
        paddingVertical:6    
    },
    heading: {
        fontSize:25,
        fontWeight:"600",
        alignSelf:"center",
    },
    imgbtn:{
        height:110,
        width:"100%",
        borderWidth:1,
        // padding:10    
    },
    logo:{
        width:"25%",
        height:130,
        borderWidth:1,
        alignItems:"center",
        borderColor:"#EAEDEE",
    },
    image: {
        overflow:"hidden",
        marginTop:65,
        alignSelf:"center",
        height:220,
        width:180
    },
    location: {
        alignSelf:"center",
        flexDirection:"row",
        // width:"25%"
    },
    btn:{
        alignSelf:"center",
        justifyContent:"center",
        backgroundColor:"#FE7203",
        width:250,
        height:50,
        padding:5,        
        borderRadius:8,
        marginTop:50,
    },
    btntxt: {
        alignSelf:"center",
        color:"#fff",
        fontWeight:"bold",
        fontSize:20
    },
    save: {
        alignItems: "center",
        padding: 10,
        backgroundColor: "#000",
        borderRadius: 7,
        width: "40%",
        marginTop: "12%",
      },
  });

export default Loc;