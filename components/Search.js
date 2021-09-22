import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Search = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
        <TextInput
          placeholder="Search for services / parts /shop"
          style={styles.input}
          onChange={(text) => props.changeWord(text)}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            paddingHorizontal: 17,
            paddingVertical: 7,
            borderTopRightRadius: 7,
            borderBottomRightRadius: 7,
          }}
        >
          <Ionicons
            name="md-search-sharp"
            size={24}
            color="white"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f07102",
    padding: 10,
  },
  searchbar: {
    backgroundColor: "white",
    borderRadius: 7,
    marginHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    paddingLeft: 10,
  },
  icon: {
    alignSelf: "center",
  },
});
