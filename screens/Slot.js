import AsyncStorage from "@react-native-async-storage/async-storage";
import { invalid } from "moment";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Calendar } from "react-native-calendars";
// import { Calendar } from "@ui-kitten/components";

export default function Slot({ route, navigation }) {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [markeddate, setmarkeddate] = useState({});
  const [time, setTime] = useState();
  const { amount, cartitems, userId, phone } = route.params;
  // console.log(date);

  const Slot = () => {
    if (!date || !time) {
      alert("Please select date and time slot to continue.");
    } else {
      // console.log(time);
      navigation.navigate("App", {
        screen: "Checkout",
        params: { date: date, time: time, amount, cartitems, userId, phone },
      });
    }
  };
  // console.log(time);
  // console.log(date.toString());

  const temp = (time) => {
    // let sdates=date.split
    if (
      new Date().toISOString().slice(0, 10) == date &&
      new Date() - new Date().setHours(time) > 0
    )
      return false;
    return true;
  };

  return (
    <View
      style={{
        marginTop: 5,
        // width:"85%",
        alignSelf: "center",
        paddingBottom: 10,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.subheading}>Date Slot</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.subheading}>Selected Date : </Text>
            <Text style={{ marginVertical: 10 }}>{date.toString()}</Text>
          </View>
        </View>
        <Calendar
          style={{
            marginTop: 12,
            borderWidth: 2,
            borderColor: "orange",
            height: 400,
            width: 300,
            alignSelf: "center",
            borderRadius: 10,
          }}
          //   onMonthChange={(month) => {console.log('month changed', month)}}
          // minDate={}
          onDayPress={(day) => {
            const markedDates = {};
            setDate(day.dateString);
            setmarkeddate(
              (markedDates[date] = {
                selected: true,
                marked: true,
                selectedColor: "red",
              })
            );
          }}
          hideExtraDays={true}
          current={date}
          minDate={new Date()}
          //   markingType={'cust}
          enableSwipeMonths={true}
          markedDates={markeddate}
          // Specify theme properties to override specific styles for calendar parts. Default = {}
          theme={{
            backgroundColor: "#ffffff",
            // calendarBackground: '#ffffff',
            textSectionTitleColor: "orange",
            textSectionTitleDisabledColor: "#d9e1e8",
            selectedDayBackgroundColor: "orange",
            selectedDayTextColor: "white",
            todayTextColor: "orange",
            dayTextColor: "#2d4150",
            textDisabledColor: "#d9e1e8",
            // dotColor: '#00adf5',
            // selectedDotColor: '#d9e1e8',
            arrowColor: "orange",
            disabledArrowColor: "#d9e1e8",
            monthTextColor: "orange",
            // indicatorColor: 'orange',
            textDayFontFamily: "monospace",
            textMonthFontFamily: "monospace",
            textDayHeaderFontFamily: "monospace",
            textDayFontWeight: "300",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "300",
            textDayFontSize: 14,
            textMonthFontSize: 14,
            textDayHeaderFontSize: 14,
          }}
        />
        {/* <Calendar date={date} /> */}
        {/* <Text category='h6'>
        Selected date: {date.toLocaleDateString()}
      </Text>
<Calendar date={date}
        onSelect={nextDate => setDate(nextDate)}
        /> */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.subheading}>Selected Time Slot : </Text>
            <Text> {time} </Text>
          </View>
        </View>
        <View style={{ justifyContent: "space-around", flexDirection: "row" }}>
          <TouchableOpacity
            // style={styles.btn}
            // display={new Date().getHours()<11?"none":" "}
            // style={time == "09:00AM-11:00AM"?styles.btntch:styles.btn}
            style={[
              styles.btn,
              {
                display: temp(9) ? null : "none",
                borderColor: time == "09:00AM-11:00AM" ? "#f07102" : "#000",
              },
            ]}
            onPress={() => setTime("09:00AM-11:00AM")}
          >
            <Text style={styles.btntxt}>09:00 AM-11:00 AM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // style={styles.btn}
            // style={time == "11:00AM-01:00PM"?styles.btntch:styles.btn}
            style={[
              styles.btn,
              {
                display: temp(11) ? null : "none",
                borderColor: time == "11:00AM-01:00PM" ? "#f07102" : "#000",
              },
            ]}
            onPress={() => setTime("11:00AM-01:00PM")}
          >
            <Text style={styles.btntxt}>11:00 AM-01:00 PM</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: "space-evenly", flexDirection: "row" }}>
          <TouchableOpacity
            // style={styles.btn}
            // style={time == "01:00PM-03:00PM"?styles.btntch:styles.btn}
            style={[
              styles.btn,
              {
                display: temp(13) ? null : "none",
                borderColor: time == "01:00PM-03:00PM" ? "#f07102" : "#000",
              },
            ]}
            onPress={() => setTime("01:00PM-03:00PM")}
          >
            <Text style={styles.btntxt}>01:00 PM-03:00 PM</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // style={styles.btn}
            // style={time == "03:00PM-05:00PM"?styles.btntch:styles.btn}
            style={[
              styles.btn,
              {
                display: temp(15) ? null : "none",
                borderColor: time == "03:00PM-05:00PM" ? "#f07102" : "#000",
              },
            ]}
            // style={[styles.btn,{display:new Date().getHours()<15?null:"none",borderColor:time=="03:00PM-05:00PM"? "#f07102": "#000"}]}
            onPress={() => setTime("03:00PM-05:00PM")}
          >
            <Text style={styles.btntxt}>03:00 PM-05:00 PM</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          // style={styles.btn}
          // style={time == "05:00PM-07:00PM"?styles.btntch:styles.btn}
          style={[
            styles.btn,
            {
              display: temp(17) ? null : "none",
              borderColor: time == "05:00PM-07:00PM" ? "#f07102" : "#000",
            },
          ]}
          // style={[styles.btn,{display:new Date().getHours()<15?null:"none",borderColor:time=="03:00PM-05:00PM"? "#f07102": "#000"}]}
          onPress={() => setTime("05:00PM-07:00PM")}
        >
          <Text style={styles.btntxt}>05:00 PM-07:00 PM</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn1}
          // onPress={() =>
          // navigation.navigate("App", {
          //   screen: "Checkout",
          // })}
          onPress={() => Slot()}
        >
          <Text style={styles.btntxt1}>PROCEED</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    alignSelf: "center",
    justifyContent: "center",
    // backgroundColor:"#FE7203",
    borderColor: "#000",
    // color:"#f07102",
    borderWidth: 1,
    width: 140,
    height: 50,
    padding: 5,
    borderRadius: 8,
    marginTop: 8,
  },
  btntch: {
    alignSelf: "center",
    justifyContent: "center",
    // backgroundColor:"#FE7203",
    borderColor: "#f07102",
    // color:"#f07102",
    borderWidth: 1,
    width: 140,
    height: 50,
    padding: 5,
    borderRadius: 8,
    marginTop: 8,
  },
  btntxt: {
    alignSelf: "center",
    color: "#000",
    fontWeight: "bold",
  },
  btn1: {
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#FE7203",
    width: 180,
    height: 50,
    padding: 5,
    borderRadius: 8,
    marginTop: 10,
  },
  btntxt1: {
    alignSelf: "center",
    color: "#fff",
    // fontWeight:"bold",
    fontSize: 20,
  },
  subheading: {
    marginVertical: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
});
