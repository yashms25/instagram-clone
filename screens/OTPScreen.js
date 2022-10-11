import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  TextInput,
} from "react-native";
const { screen_width, screen_height } = Dimensions.get("window");

import colors from "../colors";
import { h, w } from "../config/SizeConfig";
import CommonInput from "../components/CommonInput";
import BlueButton from "../components/BlueButton";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

function OTPScreen({ navigation, route }) {
  const { verificationId, phone } = route.params;
  const [loginCode, setLoginCode] = useState("");
  const [activity, setActivity] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{ marginTop: h(60) }}>
        <Text style={styles.head}>Enter the Confirmation Code</Text>
        <Text style={styles.head}>
          We Sent to +91 {phone.slice(0, 5)} {phone.slice(5)}
        </Text>
      </View>
      <Text
        style={{
          color: colors.darkBlue,
          fontWeight: "bold",
          alignSelf: "center",
          marginTop: 10,
        }}
      >
        Change phone number
        <Text style={{ color: colors.grey, fontWeight: "normal" }}> or </Text>
        resend SMS
      </Text>

      <View style={{ position: "relative" }}>
        <TextInput
          textContentType="telephoneNumber"
          keyboardType="phone-pad"
          style={styles.textInput}
          placeholder={"Login Code"}
          cursorColor={colors.black}
          value={loginCode}
          onChangeText={setLoginCode}
        />
        {loginCode && (
          <TouchableWithoutFeedback
            onPress={() => {
              setLoginCode("");
            }}
          >
            <MaterialIcons
              size={25}
              color={colors.grey}
              style={{ position: "absolute", top: 40, right: 25 }}
              name="close"
            />
          </TouchableWithoutFeedback>
        )}
      </View>
      <BlueButton
        title={"Next"}
        disabled={loginCode.length != 6}
        onPress={() => {}}
        activity={activity}
      />

      <View style={{ position: "absolute", bottom: 20, alignSelf: "center" }}>
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
            }}
          >
            Already have an account?{" "}
            <Text style={{ color: colors.darkBlue, fontWeight: "bold" }}>
              Log in.
            </Text>
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  head: {
    alignSelf: "center",
    fontSize: 23,
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
  textInput: {
    marginTop: 30,
    padding: 10,
    borderColor: colors.lighGrey,
    width: screen_width,
    marginHorizontal: "5%",
    borderRadius: 4,
    height: h(45),
    borderWidth: 1,
    marginBottom: h(15),
    backgroundColor: colors.textInputGrey,
  },
});

export default OTPScreen;
