import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const TaskList = ({
  title,
  handleEditText,
  handleStatusText,
  handleDeleteText,
  editIconName,
  checkIconName,
  width
}) => {
  return (
    <TouchableHighlight
    onLongPress={handleDeleteText}
      activeOpacity={2}
      underlayColor="#DDDDDD"
    >
      <View style={style.mainContainer}>
        <View style={{ width: width }}>
          <Text style={style.text}>{title}</Text>
        </View>
        <View style={style.iconContainer}>
          <Icon
            name={editIconName}
            style={{ marginRight: 10 }}
            onPress={handleEditText}
            size={20}
          />
          <Icon name={checkIconName} onPress={handleStatusText} size={20} />
        </View>
      </View>
    </TouchableHighlight>
  );
};

style = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    marginBottom : 10,
    borderRadius : 10
  },

  text: {
    fontSize: 15,
  },

  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginLeft: 5,
  },
});

export default TaskList;
