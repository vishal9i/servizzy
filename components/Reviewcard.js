import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
import Swiper from "react-native-swiper";

const Reviewcard = () => {
  return (
    <Swiper style={{ height: 350 }} autoplay={true} showsPagination={false}>
      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>Siddharth Nayak</Text>
        <AirbnbRating
          count={5}
          reviews={[
            "Terrible",
            "Good",
            "Very Good",
            "Amazing",
            "100% recommended",
          ]}
          defaultRating={4}
          size={14}
          isDisabled={true}
          reviewColor={"#f07102"}
        />

        <Text style={{ color: "gray", margin: 20 }}>
          Servizzy service center was my first time in a non-dealer service
          center and they proved their worth in the very first attempt. I am in
          love with how they take care of your car and make you aware of the
          functioning of the car. It's like I was a part of the process.
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>Atul Gokhale</Text>
        <AirbnbRating
          count={5}
          reviews={[
            "Terrible",
            "Good",
            "Very Good",
            "Amazing",
            "100% recommended",
          ]}
          defaultRating={5}
          size={14}
          isDisabled={true}
          reviewColor={"#f07102"}
        />
        <Text style={{ color: "gray", margin: 20 }}>
          Awesome service at an affordable price. Thanks team!
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>Abhinandan Tripathy</Text>
        <AirbnbRating
          count={5}
          reviews={[
            "Terrible",
            "Good",
            "Very Good",
            "Amazing",
            "100% recommended",
          ]}
          defaultRating={4}
          size={14}
          isDisabled={true}
          reviewColor={"#f07102"}
        />
        <Text style={{ color: "gray", margin: 20 }}>
          Transparent & cost-effective servicing. They are truly experts in
          their field.
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>Simrath Kaur</Text>
        <AirbnbRating
          count={5}
          reviews={["Terrible", "Bad", "Good", "Amazing", "100% recommended"]}
          defaultRating={5}
          size={14}
          isDisabled={true}
          reviewColor={"#f07102"}
        />
        <Text style={{ color: "gray", margin: 20 }}>
          Thank you guys for your excellent and affordable service Services:
          Brake service & repair, Transmission, Air conditioning !
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>Ishaan Mittal</Text>
        <AirbnbRating
          count={5}
          reviews={["Terrible", "Bad", "Good", "Amazing", "100% recommended"]}
          defaultRating={3}
          size={14}
          isDisabled={true}
          reviewColor={"#f07102"}
        />
        <Text style={{ color: "gray", margin: 20 }}>
          My experience at the center was very positive. I enjoyed learning so
          much about my car which was possible all because of servizzy service
          agents. Really like the way they make you a part of the servicing
          Services: Brakes, Air & Cabin Filter, Oil change
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>Rajkumar Yadav</Text>
        <AirbnbRating
          count={5}
          reviews={[
            "Terrible",
            "Good",
            "Very Good",
            "Amazing",
            "100% recommended",
          ]}
          defaultRating={4}
          size={14}
          isDisabled={true}
          reviewColor={"#f07102"}
        />
        <Text style={{ color: "gray", margin: 20 }}>
          The best car repair service center. Servizzy and their team rocks!!
          Great job guys!! Services: Brake service & repair, Tyres,
          Steering/Suspension
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>Vikram Jeet</Text>
        <AirbnbRating
          count={5}
          reviews={[
            "Terrible",
            "Good",
            "Very Good",
            "Amazing",
            "100% recommended",
          ]}
          defaultRating={5}
          size={14}
          isDisabled={true}
          reviewColor={"#f07102"}
        />
        <Text style={{ color: "gray", margin: 20 }}>
          Their servicing and service agents' attitude towards their customers
          is very polite and engaging. They provide you with all the necessary
          information about your car, which I really liked. Services: Air
          conditioning, Check engine light diagnostic, Electrical
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>Madhuri Phithania</Text>
        <AirbnbRating
          count={5}
          reviews={[
            "Terrible",
            "Good",
            "Very Good",
            "Amazing",
            "100% recommended",
          ]}
          defaultRating={4}
          size={14}
          isDisabled={true}
          reviewColor={"#f07102"}
        />
        <Text style={{ color: "gray", margin: 20 }}>
          Very professional work at a very affordable price. Good work guys.
          Thanks Service: Brake service & repair
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>Amit Gupta</Text>
        <AirbnbRating
          count={5}
          reviews={[
            "Terrible",
            "Good",
            "Very Good",
            "Amazing",
            "100% recommended",
          ]}
          defaultRating={4}
          size={14}
          isDisabled={true}
          reviewColor={"#f07102"}
        />
        <Text style={{ color: "gray", margin: 20 }}>
          Hi, I just wanna say thank you for looking after my car. Such
          wonderful work. Thank you so much for your expertise. Services:
          Brakes, Electrical repair, Oil change, Steering/Suspension
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>Anand Prakash</Text>
        <AirbnbRating
          count={5}
          reviews={[
            "Terrible",
            "Good",
            "Very Good",
            "Amazing",
            "100% recommended",
          ]}
          defaultRating={4}
          size={14}
          isDisabled={true}
          reviewColor={"#f07102"}
        />
        <Text style={{ color: "gray", margin: 20 }}>
          The service is very satisfactory. The staff, on the other hand, is
          extremely well behaved. The prices are very affordable. I would
          recommend this place to whoever is looking for a reliable and
          affordable service centre.
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>Aditya Sethi</Text>
        <AirbnbRating
          count={5}
          reviews={[
            "Terrible",
            "Good",
            "Very Good",
            "Amazing",
            "100% recommended",
          ]}
          defaultRating={5}
          size={14}
          isDisabled={true}
          reviewColor={"#f07102"}
        />
        <Text style={{ color: "gray", margin: 20 }}>
          My experience at servizzy was really good, the best part that I liked
          the most about them is that I didn't have to worry about spare parts
          and servicing separately. The service was also at its best and
          therefore I would 100% recommend it to anyone and everyone in need of
          an authentic and reliable service center.
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>Chetanya Kumar</Text>
        <AirbnbRating
          count={5}
          reviews={[
            "Terrible",
            "Good",
            "Very Good",
            "Amazing",
            "100% recommended",
          ]}
          defaultRating={5}
          size={14}
          isDisabled={true}
          reviewColor={"#f07102"}
        />
        <Text style={{ color: "gray", margin: 20 }}>
          A special thanks to servizzy for the excellent car service they
          provided me with. The way they diagnosed and repaired my car well in
          time and at a very less amount when compared to my regular dealers'
          cost.
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>Arpit Singh</Text>
        <AirbnbRating
          count={5}
          reviews={[
            "Terrible",
            "Good",
            "Very Good",
            "Amazing",
            "100% recommended",
          ]}
          defaultRating={4}
          size={14}
          isDisabled={true}
          reviewColor={"#f07102"}
        />
        <Text style={{ color: "gray", margin: 20 }}>
          Extremely professional and understanding service agents. I got the
          back brakes, and the Air and cabin filter of my car done. And the
          service they provided me with was far from my expectations.
        </Text>
      </View>
    </Swiper>
  );
};

export default Reviewcard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    borderRadius: 10,
    elevation: 7,
    paddingVertical: 20,
    marginVertical: 20,
    backgroundColor: "#fff",
    marginHorizontal: 10,
  },
  card: {},
});
