import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Share,
  Linking,
  ScrollView,
} from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from "react-native-paper";

const shareToWhatsApp = (text) => {
  Linking.openURL(`whatsapp://send?text=${text}`);
};

const Refer = () => {
  const [refercode, setrefercode] = useState();
  const [refertext, setrefertext] = useState();
  const [credit, setcredit] = useState();
  const [use, setuse] = useState();
  const [loading, setloading] = useState(false);

  const getrefercode = async () => {
    const token = await AsyncStorage.getItem("token");

    fetch("https://digi-servizzy-backend.herokuapp.com/api/get-refer-code", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        userid: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("we need",data.data);
        setrefercode(data.data.referCode);
        setcredit(data.data.redemption_credits)
        setuse(data.data.redem_used)
      });
  };
  getrefercode();

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: refercode,
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
  const submitreferel = async () => {
    setloading(true);
    const token = await AsyncStorage.getItem("token");
    // alert(refertext);
    // setrefertext();
    fetch("https://digi-servizzy-backend.herokuapp.com/api/apply-refer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        userid: token,
      },
      body: JSON.stringify({
        code: refertext,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data.success == true
          ? alert("Refer code applied successfully!")
          : alert("Invalid Code");
        setrefercode();
        setloading(false);
      });
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={{ fontSize: 25, color: "#eb8d00" }}>Your Earnings</Text>
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "black" }}>
            {credit?"₹"+credit:"₹0"}
          </Text>
        </View>
        <View>
          <Image source={require("../images/refer2.jpg")} style={styles.img} />
        </View>
        <Text style={{ marginHorizontal: 20, fontSize: 15 }}>
          AVAIL REFERRAL DISCOUNT
        </Text>
        
        {use?<Text style={{ marginHorizontal: 20, fontSize: 17,marginVertical:10 }}>
          Redeem code can be used only once.
          </Text>
        :
        <View style={styles.inputcode}>
          <TextInput
            placeholder="Referral code"
            style={{ width: "70%" }}
            onChangeText={(text) => setrefertext(text)}
            value={refertext}
          />
          <Button
            mode="text"
            onPress={() => submitreferel()}
            contentStyle={{ marginRight: 5 }}
            loading={loading}
            color={"#eb8d00"}
          >
            {loading == true ? null : "APPLY"}
          </Button>
        </View>}
        <Text style={styles.text}>Earn ₹500 for every friend you refer</Text>
        <Text style={{ marginVertical: 10, color: "gray" }}>
          Get your car Enthusiasts friend to start using Servizzy today and earn
          ₹500 when they complete their first order.
        </Text>
        <Text style={{ marginVertical: 10, fontSize: 17 }}>
          Share your referral code
        </Text>
        <View style={styles.shareBox}>
          <Text style={{ color: "#a8a8a8", fontSize: 17, marginLeft: 10 }}>
            {refercode}
          </Text>
          <TouchableOpacity onPress={() => onShare()}>
            <MaterialIcons
              name="share"
              size={28}
              color="#eb8d00"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.whatsapp}
          onPress={() =>
            shareToWhatsApp(
              `${refercode} is my servizzy app refer code for best offers and discounts.`
            )
          }
        >
          <FontAwesome name="whatsapp" size={24} color="white" />
          <Text
            style={{
              fontSize: 16,
              color: "white",
              marginHorizontal: 10,
              fontWeight: "bold",
            }}
          >
            Share via whatsapp
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Refer;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
    marginHorizontal: 15,
    marginTop: 10,
    elevation: 5,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  img: {
    paddingVertical: 10,
  },
  inputcode: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    borderColor: "#eb8d00",
  },
  text: {
    fontSize: 25,
    marginTop: 30,
  },
  shareBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 10,
    borderRadius: 7,
  },
  whatsapp: {
    flexDirection: "row",
    backgroundColor: "#00910a",
    margin: 10,
    padding: 10,
    borderRadius: 7,
    paddingHorizontal: "15%",
  },
});
