import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView , Alert } from "react-native";
import TaskList from "../../componets/TaskList";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/slice";

const CompleteTask = () => {
  const todoList = useSelector((state) => state.slice.value);
  const dispatch = useDispatch();

  const handleDeleteText = (item) => {
    Alert.alert("Confirm", "Do you want to delete a task", [
      {
        text: "ok",
        onPress: () => {
          dispatch(deleteTask({ id: item.id }));
        },
      },
      {
        text: "cancel",
      },
    ]);
  };

  return (
    <SafeAreaView style={style.safeContainer}>
      <View style={style.container}>
        <Text style={style.text}>Completed Task</Text>
        <ScrollView>
          <View style={style.taskContainer}>
          {todoList.map(
            (item) =>
              !item.status && (
                <TaskList
                  title={item.task}
                  handleDeleteText={() => handleDeleteText(item)}
                  key={item.id}
                />
              )
          )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor : "#B8D8D8"
  },
  container: {
    margin : 10
  },


  text: {
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
  },

  taskContainer: {
    margin: 5,
  }
});
export default CompleteTask;
