import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from "react-redux";


import Icon from "react-native-vector-icons/FontAwesome";
import HomePage from "./src/screens/HomePage/HomePage";
import CompleteTask from "./src/screens/CompleteTaskPage/CompleteTaskPage";
import  store  from "./src/redux/store";


const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <Provider store={store}>
   <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="HomePage" component={HomePage} options={{
          headerShown: false,

          tabBarActiveTintColor: '#EEF5D8',

          tabBarActiveBackgroundColor: '#FE5F55',

          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              size={30}
              color={focused ? '#EEF5D8' : '#2c3e50'}
              light
            />
          ),
        }}/>
      <Tab.Screen name="CompleteTaskPage" component={CompleteTask} options={{
          headerShown: false,

          tabBarActiveTintColor: '#EEF5D8',

          tabBarActiveBackgroundColor: '#FE5F55',

          tabBarIcon: ({focused}) => (
            <Icon
              name="check-square"
              size={30}
              color={focused ? '#EEF5D8' : '#2c3e50'}
              light
            />
          ),
        }}/>
      
    </Tab.Navigator>
   </NavigationContainer>
   </Provider>
  );
};

export default App;
