import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./StackNavigator";
import { Icon } from "react-native-elements";
import { colors } from "../global/styles";
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          drawerIcon: ({ focus, size }) => (
            <Icon
              name="home"
              type="material-community"
              color={focus ? "#7cc" : colors.grey}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
