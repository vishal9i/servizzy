import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Carinfo from "../components/Carinfo";

const Help = ({navigation}) => {
//   return (
//     <View style={styles.container}>
//       <View>
//         <Image source={require('../images/help.png')} style={styles.img} />
//         <View style={{ margin: 20 }}>
//           <Text style={{ fontSize: 25, marginVertical: 5 }}>
//             Chat With Support
//           </Text>
//           <Text style={{ color: 'gray' }}>Available 10AM - 7PM</Text>
//         </View>
//       </View>
//       <View style={{ flexDirection: 'row-reverse' }}>
//         <TouchableOpacity style={styles.chat}>
//           <MaterialCommunityIcons
//             name="message-processing"
//             size={50}
//             color="white"
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default Help;

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//     margin: 10,
//     backgroundColor: 'white',
//     borderRadius: 7,
//     elevation: 5,
//     height: '100%',
//     justifyContent: 'space-between',
//   },
//   img: {
//     width: 250,
//     height: 250,
//     alignSelf: 'center',
//     marginVertical: 10,
//   },
//   chat: {
//     padding: 20,
//     margin: 10,
//     backgroundColor: '#f07102',
//     borderRadius: 50,
//     marginVertical: 20,
//   },
// });

return (
  <View style={styles.View}>
    <Carinfo navigation={navigation}/>
  {/* <Text style={styles.heading}>{" Help & Support "}</Text> */}
  <ScrollView style={styles.card}>
  <Image style={styles.img} source={require("../images/help.png") } />
  <Text style={styles.heading}>{" For any Assistance "}</Text>
  <View style={styles.contact}>
  <Text style={styles.subheading}>{" Email  : support@servizzy.store "}</Text>
  <Text style={styles.subheading}>{" Hotline 1: +91-8286777555 "}</Text>
  <Text style={styles.subheading}>{" Hotline 2: +91-8286555333 "}</Text>
  </View>
  <Text style={styles.chatheading}>{" Chat With Servizzy Bot "}</Text>
  <Text style={styles.chatsub}>{" Available 10AM - 7PM "}</Text>
  <View style={{ flexDirection: 'row-reverse' }}>
  <TouchableOpacity style={styles.chat}>
    <MaterialCommunityIcons
      name="message-processing"
      size={30}
      color="white"
    />
  </TouchableOpacity>
</View>
  </ScrollView>
  </View>
)
};

const styles = StyleSheet.create({
heading: {
  fontSize:20,
  fontWeight:"600",
  alignSelf:"flex-start",
  marginTop:40
},
subheading: {
  fontSize:20,
  fontWeight:"600",
},
chatheading: {
  fontSize:20,
  fontWeight:"700",
},
View: {
  backgroundColor:"#EAEDED",
  flex:1
},
chatsub:{
  fontSize:15,
  fontWeight:"400",
  color:"#B2BABB",
  marginTop:25,
},
card:{
  marginTop:10,
  marginHorizontal:10,
  overflow:"hidden",
  backgroundColor:"#fff",
  flex:1,
  borderTopRightRadius:8,
  borderTopLeftRadius:8,
},
img:{
  alignSelf:"center",
  justifyContent:"center",
  width:250,
  height:250,        
  marginTop:19,
},
contact:{
  marginVertical:35
},
chat: {
  padding: 20,
  margin: 10,
  backgroundColor: '#f07102',
  borderRadius: 50,
  marginVertical: 20,
},
});

export default Help;