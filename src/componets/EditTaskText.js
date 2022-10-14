import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const EditTaskText = ({ value, onChangeText, onPress }) => {
  return (
    <View style={style.mainContainer}>
      <View style={{ width: "70%" }}>
        <TextInput value={value} onChangeText={onChangeText} />
      </View>
      <View style={style.iconContainer}>
        <Icon
          name="check-circle"
          style={{ marginRight: 10 }}
          size={20}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

style = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },

  text: {
    fontWeight: "bold",
    fontSize: 20,
  },

  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: 5,
  },
});

export default EditTaskText;
