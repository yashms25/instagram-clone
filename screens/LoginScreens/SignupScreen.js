import { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import BlueButton from "../../components/BlueButton";
import textLogo from "../../assets/logo/textLogo.png";
import colors from "../../colors";
import BlueText from "../../components/BlueText";
import { h, w } from "../../config/SizeConfig";
import CommonInput from "../../components/CommonInput";
import FontAwesome from "@expo/vector-icons/FontAwesome";

function SignupScreen({ navigation }) {
  const [secureText, setSecureText] = useState(true);
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image source={textLogo} style={styles.textLogo} />
      <CommonInput
        value={text}
        onChangeText={setText}
        placeholder="Phone number, email or username"
      />
      <View
        style={{
          position: "relative",
        }}
      >
        <CommonInput
          value={password}
          placeholder="Password"
          securetextentry={secureText}
          onChangeText={setPassword}
        />
        <TouchableWithoutFeedback
          onPress={() => {
            setSecureText(!secureText);
          }}
        >
          <FontAwesome
            size={20}
            name={secureText ? "eye-slash" : "eye"}
            color={secureText ? colors.grey : colors.primaryBlue}
            style={{
              position: "absolute",
              top: h(12),
              right: w(35),
            }}
          />
        </TouchableWithoutFeedback>
      </View>
      <BlueButton
        style={{ marginBottom: "5%" }}
        title={"Log in"}
        onPress={() => {
          console.log(text, password);
        }}
        color={colors.white}
        disabled={text != "" && password != "" ? false : true}
      />
      <Text
        style={{
          color: colors.grey,
          alignSelf: "center",
          marginBottom: h(15),
          fontSize: 12,
        }}
      >
        Forgot your login details?{" "}
        <TouchableWithoutFeedback onPress={() => [console.log("login")]}>
          <Text style={{ color: colors.darkBlue, fontWeight: "bold" }}>
            Get help logging in.
          </Text>
        </TouchableWithoutFeedback>
      </Text>
      <View style={[styles.seperator, { marginBottom: "5%" }]}>
        <View style={styles.line}></View>
        <Text style={{ color: colors.grey, fontWeight: "bold" }}>OR</Text>
        <View style={styles.line}></View>
      </View>
      <BlueText
        style={{ marginBottom: "30%" }}
        title="Log in with Facebook"
        onPress={() => {
          console.log("email-phonenumber");
        }}
        icon={"facebook"}
        color={colors.primaryBlue}
      />
      <View
        style={[styles.seperator, { marginBottom: "5%", marginTop: "10%" }]}
      >
        <View style={[styles.line, { width: "90%" }]}></View>
      </View>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text
          style={{
            color: colors.grey,
            alignSelf: "center",
            fontSize: 12,
          }}
        >
          Dont't have an account?{" "}
          <Text style={{ color: colors.darkBlue, fontWeight: "bold" }}>
            Sign up.
          </Text>
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-between",
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
  textLogo: {
    width: "45%",
    height: h(60),
    marginTop: "50%",
    marginBottom: "8%",
    alignSelf: "center",
  },
});

export default SignupScreen;
