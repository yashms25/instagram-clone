import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
  Dimensions,
} from "react-native";
import user from "../assets/icons/user.png";
import { w, h } from "../config/SizeConfig";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import colors from "../colors";
import BlueButton from "../components/BlueButton";
import { MaterialIcons } from "@expo/vector-icons";
const { screen_width, screen_height } = Dimensions.get("window");

const Tab = createMaterialTopTabNavigator();

function SignupManualScreen({ navigation }) {
  const Phone = () => {
    const [phone, setPhone] = useState("");

    return (
      <View style={styles.tabcontainer}>
        <Text
          style={{
            color: colors.grey,
            fontWeight: "bold",
            position: "absolute",
            zIndex: 10,
            top: h(33),
            borderRightWidth: 1,
            paddingRight: 10,
            borderColor: colors.grey,
            left: w(15),
          }}
        >
          IN +91
        </Text>
        <TextInput
          textContentType="telephoneNumber"
          keyboardType="phone-pad"
          style={[styles.textInput, { paddingLeft: w(80) }]}
          placeholder={"Phone"}
          cursorColor={colors.black}
          value={phone}
          onChangeText={setPhone}
        />
        {phone && (
          <TouchableWithoutFeedback
            onPress={() => {
              setPhone("");
            }}
          >
            <MaterialIcons
              size={25}
              color={colors.grey}
              style={{ position: "absolute", top: 30, right: 15 }}
              name="close"
            />
          </TouchableWithoutFeedback>
        )}
        <Text
          style={{
            color: colors.grey,
            fontSize: 12,
            textAlign: "center",
            marginBottom: h(15),
          }}
        >
          You may receive SMS notifications from us for security and login
          purposes.
        </Text>
        <BlueButton
          style={{ marginHorizontal: 0 }}
          disabled={phone == ""}
          title={"Next"}
          onPress={() => {
            console.log("phonenumber", phone);
          }}
        />
      </View>
    );
  };
  const Email = () => {
    const [email, setEmail] = useState("");

    return (
      <View style={styles.tabcontainer}>
        <TextInput
          style={styles.textInput}
          placeholder={"Email"}
          cursorColor={colors.black}
          value={email}
          onChangeText={setEmail}
        />
        {email && (
          <TouchableWithoutFeedback
            onPress={() => {
              setEmail("");
            }}
          >
            <MaterialIcons
              size={25}
              color={colors.grey}
              style={{ position: "absolute", top: 30, right: 15 }}
              name="close"
            />
          </TouchableWithoutFeedback>
        )}
        <BlueButton
          style={{ marginHorizontal: 0 }}
          disabled={email == ""}
          title={"Next"}
          onPress={() => {
            console.log("email", email);
          }}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Image style={styles.userlogo} source={user} />
      <Tab.Navigator
        style={{ marginHorizontal: w(30) }}
        initialRouteName="Phone"
        animationEnabled
        screenOptions={{
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontSize: 15,
          },

          swipeEnabled: true,
          tabBarContentContainerStyle: {
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
          },
          tabBarIndicatorStyle: {
            borderBottomColor: colors.black,
            borderBottomWidth: 2,
          },
        }}
      >
        <Tab.Screen name="Phone" component={Phone} />
        <Tab.Screen name="Email" component={Email} />
      </Tab.Navigator>
      <View style={[styles.seperator, { marginBottom: "5%" }]}>
        <View style={[styles.line, { width: "90%" }]}></View>
      </View>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("SignupScreen")}
      >
        <Text
          style={{
            color: colors.grey,
            alignSelf: "center",
            fontSize: 12,
            marginBottom: "5%",
          }}
        >
          Already have an account?{" "}
          <Text style={{ color: colors.darkBlue, fontWeight: "bold" }}>
            Log in.
          </Text>
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  line: {
    borderBottomColor: colors.lighGrey,
    borderBottomWidth: 1,
    width: "40%",
    marginHorizontal: w(8),
  },
  seperator: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tabcontainer: {
    backgroundColor: colors.white,
    flex: 1,
    position: "relative",
  },
  textInput: {
    padding: 10,
    borderColor: colors.lighGrey,
    width: screen_width,
    borderRadius: 4,
    height: h(45),
    borderWidth: 1,
    marginBottom: h(15),
    backgroundColor: colors.textInputGrey,
    marginTop: 20,
  },
  userlogo: {
    width: h(150),
    height: h(150),
    alignSelf: "center",
    marginTop: h(130),
    marginBottom: h(20),
  },
});

export default SignupManualScreen;
