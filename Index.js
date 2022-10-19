import { useEffect } from "react";

import { StyleSheet, Text, View, StatusBar } from "react-native";
import colors from "./colors";
import SignupScreen from "./screens/LoginScreens/SignupScreen";
import Splash from "./screens/Splash";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens//LoginScreens/LoginScreen";
import SignupManualScreen from "./screens//LoginScreens/SignupManualScreen";
import OTPScreen from "./screens//LoginScreens/OTPScreen";
import NamePasswordScreen from "./screens/LoginScreens/NamePasswordScreen";
import DateOfBirth from "./screens/LoginScreens/DateOfBirth";
import AgeScreen from "./screens/LoginScreens/AgeScreen";
import CreateUsername from "./screens/LoginScreens/CreateUsername";
const Stack = createStackNavigator();

const Homestack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupManualScreen" component={SignupManualScreen} />
      <Stack.Screen name="OTPScreen" component={OTPScreen} />
      <Stack.Screen name="NamePasswordScreen" component={NamePasswordScreen} />
      <Stack.Screen name="DateOfBirth" component={DateOfBirth} />
      <Stack.Screen name="AgeScreen" component={AgeScreen} />
      <Stack.Screen name="CreateUsername" component={CreateUsername} />
    </Stack.Navigator>
  );
};

function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <NavigationContainer>
        <Homestack />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default Index;
