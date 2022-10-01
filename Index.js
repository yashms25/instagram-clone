import { useEffect } from "react";

import { StyleSheet, Text, View, StatusBar } from "react-native";
import colors from "./colors";
import SignupScreen from "./screens/SignupScreen";
import Splash from "./screens/Splash";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import SignupManualScreen from "./screens/SignupManualScreen";
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
