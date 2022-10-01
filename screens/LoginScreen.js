import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";
import BlueButton from "../components/BlueButton";
import textLogo from "../assets/logo/textLogo.png";
import colors from "../colors";
import BlueText from "../components/BlueText";
import { h, w } from "../config/SizeConfig";

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={textLogo} style={styles.textLogo} />

      <BlueButton
        style={{ marginBottom: "15%" }}
        title={"Log in with Facebook"}
        onPress={() => {
          console.log("facebook login");
        }}
        icon={"facebook"}
        color={colors.white}
        disabled={false}
      />

      <View style={[styles.seperator, { marginBottom: "5%" }]}>
        <View style={styles.line}></View>
        <Text style={{ color: colors.grey, fontWeight: "bold" }}>OR</Text>
        <View style={styles.line}></View>
      </View>
      <BlueText
        style={{ marginBottom: "30%" }}
        title="Sign up with email or phone number"
        onPress={() => {
          navigation.navigate("SignupManualScreen");
        }}
      />
      <View style={[styles.seperator, { marginBottom: "5%" }]}>
        <View style={[styles.line, { width: "90%" }]}></View>
      </View>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("SignupScreen")}
      >
        <Text style={{ color: colors.grey, alignSelf: "center", fontSize: 12 }}>
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
    marginTop: "70%",
    marginBottom: "35%",
    alignSelf: "center",
  },
});

export default LoginScreen;
