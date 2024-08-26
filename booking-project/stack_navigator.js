import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const stack_navigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();
  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="name" />
      </Tab.Navigator>
    );
  }
  return (
    <View>
      <Text>stack_navigator</Text>
    </View>
  );
};

export default stack_navigator;

const styles = StyleSheet.create({});
