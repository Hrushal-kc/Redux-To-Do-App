import React, { useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  View,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import TaskList from "../../componets/TaskList";
import {
  addTask,
  deleteTask,
  updateStatus,
  updateTask,
} from "../../redux/slice";
import uuid from "react-native-uuid";
import EditTaskText from "../../componets/EditTaskText";

const HomePage = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [updateValue, setUpdateValue] = useState("");
  const [editFieldId, setEditFieldId] = useState(null);

  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.slice.value);

  const handleChangeText = (value) => {
    setInputValue(value);
  };

  const handleSubmit = () => {
    let test = {
      id: uuid.v4(),
      task: inputValue,
      status: "false",
    };
    if (inputValue !== "") {
      dispatch(addTask(test));
      alert("Task is added succesfully");
      setInputValue("");
    } else {
      alert("Enter the Text");
    }
  };

  const handleEditText = (item) => {
    setEditFieldId(item.id);
    setUpdateValue(item.task);
  };

  const onChangeText = (updatetext) => {
    setUpdateValue(updatetext);
  };

  const onPress = (id) => {
    console.log(updateValue);
    setUpdateValue(updateValue);
    if (updateValue !== "") {
      dispatch(updateTask({ id: id, task: updateValue }));
      alert("Task is update succesfully");
      setEditFieldId(null);
      setUpdateValue("");
    }
    else {
      alert("enter the update task");
    }
  };

  const handleStatusText = (item) => {
    Alert.alert("Confirm", "Do you want to move to complete task", [
      {
        text: "ok",
        onPress: () => {
          dispatch(updateStatus({ id: item.id, status: !item.status }));
        },
      },
      {
        text: "cancel",
      },
    ]);
  };

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
        <View style={style.inputContainer}>
          <TextInput
            placeholder="Enter your to do list"
            style={style.inputText}
            value={inputValue}
            onChangeText={(value) => handleChangeText(value)}
          />
          <Pressable style={style.button} onPress={handleSubmit}>
            <Text>Submit</Text>
          </Pressable>
        </View>
        <View style={style.taskContainer}>
          <Text style={style.taskText}>Pending Works</Text>
          <ScrollView>
            {todoList.map(
              (item) =>
                item.status &&
                (editFieldId === item.id ? (
                  <EditTaskText
                    key={item.id}
                    onChangeText={(item) => onChangeText(item)}
                    onPress={() => onPress(item.id)}
                    value={updateValue}
                  />
                ) : (
                  <TaskList
                    title={item.task}
                    handleEditText={() => handleEditText(item)}
                    handleStatusText={() => handleStatusText(item)}
                    handleDeleteText={() => handleDeleteText(item)}
                    key={item.id}
                    editIconName={"pencil-square-o"}
                    checkIconName={"check-square-o"}
                    width = {width = "70%"}
                  />
                ))
            )}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

style = StyleSheet.create({
  safeContainer: {
    flex: 1,
    margin: 2,
  },
  container: {
    flex: 1,
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  inputText: {
    width: "70%",
    borderWidth: 2,
    padding: 20,
    borderRadius : 10
  },

  button: {
    borderWidth: 2,
    padding: 20,
    borderRadius : 10
  },

  taskContainer: {
    margin : 7
  },

  taskText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle : "italic",
    marginBottom : 5
  },

  tasklist: {
    padding: 10,
  },

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
  },
});

export default HomePage;
