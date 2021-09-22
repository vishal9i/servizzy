import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Share,
  ScrollView,
  Image,
} from "react-native";
import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Zocial,
  Foundation,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  widthPercentageToDP as wt,
  heightPercentageToDP as ht,
} from "react-native-responsive-screen";
import Carinfo from "../components/Carinfo";

const Account = ({ navigation }) => {
  // console.log(prop);
  const logout = async () => {
    await AsyncStorage.removeItem("token");
    navigation.replace("Auth", {
      screen: "Send OTP",
      model: "1",
      image: "2",
      brand: "3",
    });
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
//   return (
//     <View style={{ marginTop: "10%" }}>
//       <View>
//         <Text style={styles.heading}>My Account</Text>
//       </View>
//       <View style={styles.card}>
//         <ScrollView>
//           <TouchableOpacity
//             style={styles.menu}
//             onPress={() => navigation.navigate("App", { screen: "Profile" })}
//           >
//             <FontAwesome
//               name="user"
//               size={30}
//               color="#f07102"
//               style={styles.icon}
//             />
//             <Text style={styles.text}>My Profile</Text>
//           </TouchableOpacity>
//           {/* <TouchableOpacity
//           style={styles.menu}
//           onPress={() =>
//             navigation.navigate('App', { screen: 'Select your car brand' })
//           }
//         >
//           <FontAwesome5
//             name="key"
//             size={21}
//             color="#f07102"
//             style={styles.icon}
//           />
//           <Text style={styles.text}>My Cars</Text>
//         </TouchableOpacity> */}
//           <TouchableOpacity
//             style={styles.menu}
//             onPress={() => navigation.navigate("App", { screen: "Sell car" })}
//           >
//             <Foundation
//               name="burst-sale"
//               size={28}
//               color="#f07102"
//               style={styles.icon}
//             />
//             <Text style={styles.text}>Sell Car</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.menu}
//             onPress={() => navigation.navigate("App", { screen: "Buy car" })}
//           >
//             <Ionicons
//               name="ios-car-sport"
//               size={28}
//               color="#f07102"
//               style={styles.icon}
//             />
//             <Text style={styles.text}>Buy Car</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.menu}
//             onPress={() => navigation.navigate("App", { screen: "Insurance" })}
//           >
//             <Ionicons
//               name="document-text-outline"
//               size={28}
//               color="#f07102"
//               style={styles.icon}
//             />
//             <Text style={styles.text}>Insurance</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.menu}
//             onPress={() =>
//               navigation.navigate("App", { screen: "Refer & Earn" })
//             }
//           >
//             <Ionicons
//               name="gift"
//               size={25}
//               color="#f07102"
//               style={styles.icon}
//             />
//             <Text style={styles.text}>Refer {"&"} Earn</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.menu}
//             onPress={() =>
//               navigation.navigate("App", { screen: "Order History" })
//             }
//           >
//             <FontAwesome
//               name="history"
//               size={30}
//               color="#f07102"
//               style={styles.icon}
//             />
//             <Text style={styles.text}>Order History</Text>
//           </TouchableOpacity>
//           {/* <TouchableOpacity
//             style={styles.menu}
//             onPress={() =>
//               navigation.navigate('App', {
//                 screen: 'Service Records & Service Status',
//               })
//             }
//           >
//             <Zocial
//               name="statusnet"
//               size={24}
//               color="#f07102"
//               style={styles.icon}
//             />
//             <Text style={[styles.text, { fontSize: 18 }]}>
//               Service Records {'&'} Service Status
//             </Text>
//           </TouchableOpacity> */}
//           {/* <TouchableOpacity style={styles.menu}>
//             <MaterialCommunityIcons
//               name="qrcode-scan"
//               size={27}
//               color="#f07102"
//               style={styles.icon}
//             />
//             <Text style={styles.text}>Scan OBD</Text>
//           </TouchableOpacity> */}
//           <TouchableOpacity
//             style={styles.menu}
//             onPress={() => navigation.navigate("App", { screen: "Help" })}
//           >
//             <MaterialCommunityIcons
//               name="comment-question"
//               size={24}
//               color="#f07102"
//               style={styles.icon}
//             />
//             <Text style={styles.text}>Help {"&"} Support</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.menu} onPress={onShare}>
//             <MaterialIcons
//               name="share"
//               size={28}
//               color="#f07102"
//               style={styles.icon}
//             />
//             <Text style={styles.text}>Share Servizzy</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.menu} onPress={() => logout()}>
//             <MaterialCommunityIcons
//               name="logout"
//               size={28}
//               color="#f07102"
//               style={styles.icon}
//             />
//             <Text style={styles.text}>Logout</Text>
//           </TouchableOpacity>
//         </ScrollView>
//       </View>
//     </View>
//   );
// };

// export default Account;

// const styles = StyleSheet.create({
//   menu: {
//     flexDirection: "row",
//     borderBottomWidth: 1,
//     borderBottomColor: "gray",
//     marginBottom: 10,
//   },
//   card: {
//     backgroundColor: "white",
//     marginVertical: 10,
//     paddingHorizontal: 10,
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.22,
//     shadowRadius: 2.22,
//     elevation: 5,
//     paddingBottom: ht(20),
//   },
//   icon: {
//     margin: 10,
//   },
//   text: {
//     margin: 10,
//     fontSize: 20,
//   },
//   heading: {
//     margin: 20,
//     fontSize: 25,
//     fontWeight: "bold",
//   },
// });

return (
  <View style={styles.View}>
    <Carinfo navigation={navigation}
  />
  <ScrollView >
      <Text style={styles.heading}>{" My Account "}</Text>
      <View style={styles.card}>
          <View style={styles.cardsingle}> 
              <Image 
          style={{ 
              width:110,
              height:100,
              alignSelf:"center", 
              backgroundColor:"#fff",
              }} 
              source={require("../images/account/1.png") } 
          />
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("App", { screen: "Profile" })} >
          <Text style={styles.btntxt}>
          My Profile
          </Text>
      </TouchableOpacity>
      </View>
      <View style={styles.cardsingle}>
      <Image style={{ 
              width:70,
              height:100,
              alignSelf:"center", 
              backgroundColor:"#fff",
              }} 
              source={require("../images/account/2.png") }
      />
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("App", { screen: "Service History" })} >
          <Text style={styles.btntxt}>
          Service History
          </Text>
      </TouchableOpacity>
      </View>
      </View>
      <View style={styles.card}>
          <View style={styles.cardsingle} >
      <Image style={{ 
              width:170,
              height:90,
              alignSelf:"center", 
              backgroundColor:"#fff",
              }}  source={require("../images/account/3.png") } />
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("App", { screen: "Buy a car" })} >
          <Text style={styles.btntxt}>
          Buy a Car
          </Text>
      </TouchableOpacity>
      </View>
      <View style={styles.cardsingle}>
      <Image style={{ 
              width:130,
              height:90,
              alignSelf:"center", 
              backgroundColor:"#fff",
              }} source={require("../images/account/4.png") } />
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("App", { screen: "Sell Your Car" })} >
          <Text style={styles.btntxt}>
          Sell Your Car
          </Text>
      </TouchableOpacity>
      </View>
      </View>
      <View style={styles.card}>
          <View style={styles.cardsingle}>
      <Image style={{ 
              width:130,
              height:90,
              alignSelf:"center", 
              backgroundColor:"#fff",
              }} source={require("../images/account/5.png") } />
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("App", { screen: "Insurance Alerts" })} >
          <Text style={styles.btntxt}>
          Insurance Alerts
          </Text>
      </TouchableOpacity>
      </View>
      <View style={styles.cardsingle}>
      <Image style={{ 
              width:130,
              height:90,
              alignSelf:"center", 
              backgroundColor:"#fff",
              }} source={require("../images/account/6.png") } />
      <TouchableOpacity style={styles.btn}  onPress={() => navigation.navigate("App", { screen: "Refer & Earn" })} >
          <Text style={styles.btntxt}>
          Servizzy Money
          </Text>
      </TouchableOpacity>
      </View>
      </View>
      <View style={styles.card}>
          <View style={styles.cardsingle}>
      <Image style={{ 
              width:130,
              height:90,
              alignSelf:"center", 
              backgroundColor:"#fff",
              }} source={require("../images/account/7.png") } />
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("App", { screen: "Help" })} >
          <Text style={styles.btntxt}>
          24/7 Assistance
          </Text>
      </TouchableOpacity>
      </View>
      <View style={styles.cardsingle}>
      <Image 
          style={{ 
              width:130,
              height:90,
              alignSelf:"center", 
              backgroundColor:"#fff",
              }} 
          source={require("../images/account/8.png") } 
      />
      <TouchableOpacity style={styles.btn} onPress={onShare} >
          <Text style={styles.btntxt}>
          Share Our App
          </Text>
      </TouchableOpacity>
      </View>
      </View>
      <View style={styles.sign}>
      <TouchableOpacity  onPress={() => logout()} >
          <Text style={styles.btntxt}>
          Sign Out
          </Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
      </View>
      )
};
const styles = StyleSheet.create({
heading: {
  fontSize:25,
  marginLeft: 25,
  fontWeight:"700",
  alignSelf:"center",
},
View: {
  marginTop:40,
  marginBottom:69,
},
card:{
  marginTop:24,
  marginHorizontal:10,
  justifyContent:"space-around",
  flexDirection:"row",
  borderRadius:8,
  overflow:"hidden",
},
btn:{
  // alignSelf:"center",
  justifyContent:"center",
  backgroundColor:"#000",
  width:"100%",
  height:50,
  padding:5,        
  borderRadius:8,
  // marginTop:5,
},
btntxt: {
  alignSelf:"center",
  color:"#fff",
  fontWeight:"bold",
  fontSize:15
},
sign:{
  alignSelf:"center",
  justifyContent:"center",
  backgroundColor:"#000",
  width:140,
  height:50,
  padding:5,        
  borderRadius:8,
  marginTop:19,
},
cardsingle:{
  width:"39%",
  backgroundColor:"#fff",
  borderRadius:8,
  borderWidth:2,
  borderColor:"#99A3A4",
  overflow:"hidden"
}
});

export default Account;