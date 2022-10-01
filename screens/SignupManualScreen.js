import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import user from "../assets/icons/user.png";
import { w, h } from "../config/SizeConfig";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import colors from "../colors";

const Tab = createMaterialTopTabNavigator();

function SignupManualScreen() {
  const Phone = () => {
    return (
      <View>
        <Text>Phone</Text>
      </View>
    );
  };
  const Email = () => {
    return (
      <View>
        <Text>Email</Text>
      </View>
    );
  };
  return (
    <View>
      <Image style={styles.userlogo} source={user} />
      <Tab.Navigator
        animationEnabled
        screenOptions={{
          tabBarShowLabel,
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "bold",
            color: "#373737",
          },
          swipeEnabled: true,
          tabBarContentContainerStyle: {
            backgroundColor: colors.white,
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
          },
          tabBarIndicatorStyle: {
            borderBottomColor: colors.black,
            borderBottomWidth: 1,
          },
        }}
      >
        <Tab.Screen name="Phone" component={Phone} />
        <Tab.Screen name="Email" component={Email} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  userlogo: {
    width: h(150),
    height: h(150),
  },
});

export default SignupManualScreen;
