import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  TextInput,
} from "react-native";
const { screen_width, screen_height } = Dimensions.get("window");

import colors from "../../colors";
import { h, w } from "../../config/SizeConfig";
import BlueButton from "../../components/BlueButton";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  getAuth,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import FirebaseConfig from "../../config/FirebaseConfig";

import CustomModal from "../../components/CustomModal";

function OTPScreen({ navigation, route }) {
  const { verificationId, phone } = route.params;
  const [loginCode, setLoginCode] = useState("");
  const [activity, setActivity] = useState(false);
  const [error, setError] = useState(false);
  const [OTPmodal, setOTPModal] = useState(false);
  const [resendOTP, setResendOTP] = useState(false);
  const [verify, setVerify] = useState(null);
  const captcharef = useRef(null);
  const auth = getAuth();

  const timer = () => {
    setTimeout(() => {
      setResendOTP(true);
    }, 45000);
  };

  useEffect(() => {
    timer();
    setVerify(null);
    setOTPModal(false);
  }, []);

  const validate = async () => {
    setActivity(true);
    try {
      if (verify) {
        setError(false);
        const credential = PhoneAuthProvider.credential(verify, loginCode);
        await signInWithCredential(auth, credential);
        console.log("done if");
        setActivity(false);
        navigation.navigate("NamePasswordScreen");
      } else {
        setError(false);
        const credential = PhoneAuthProvider.credential(
          verificationId,
          loginCode
        );
        await signInWithCredential(auth, credential);
        console.log("done else");
        setActivity(false);
        navigation.navigate("NamePasswordScreen");
      }
    } catch (err) {
      setActivity(false);
      setError(true);
      console.log(err);
    }
  };

  const sendOTP = async () => {
    timer();
    try {
      setActivity(true);
      const auth = getAuth();
      const phoneProvider = new PhoneAuthProvider(auth);
      const verificationId = await phoneProvider.verifyPhoneNumber(
        "+91" + phone,
        captcharef.current
      );
      setVerify(verificationId);
      setActivity(false);
    } catch {
      setActivity(false);
    }
  };

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={captcharef}
        firebaseConfig={FirebaseConfig}
      ></FirebaseRecaptchaVerifierModal>
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
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("SignupManualScreen");
          }}
        >
          <Text>Change phone number</Text>
        </TouchableWithoutFeedback>
        <Text style={{ color: colors.grey, fontWeight: "normal" }}> or </Text>
        <TouchableWithoutFeedback
          onPress={() => {
            console.log(resendOTP);
            if (resendOTP) {
              setResendOTP(false);
              sendOTP();
            } else {
              setOTPModal(true);
            }
          }}
        >
          <Text>resend SMS</Text>
        </TouchableWithoutFeedback>
      </Text>

      <View style={{ position: "relative" }}>
        <TextInput
          textContentType="oneTimeCode"
          keyboardType="phone-pad"
          style={[
            styles.textInput,
            { borderColor: error ? "red" : colors.lighGrey },
          ]}
          placeholder={"Login Code"}
          cursorColor={colors.black}
          value={loginCode}
          onChangeText={setLoginCode}
          maxLength={6}
          autoComplete="sms-otp"
        />
        {loginCode && (
          <TouchableWithoutFeedback
            onPress={() => {
              setLoginCode("");
              setError(false);
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
        {error && (
          <Text style={styles.error}>
            That code isn't valid. You can request a new one.
          </Text>
        )}
      </View>
      <BlueButton
        title={"Next"}
        disabled={loginCode.length != 6}
        onPress={() => {
          validate();
        }}
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
      {OTPmodal && (
        <CustomModal
          title={"Wait a moment"}
          subhead={"We can only send you a new login code every 30 seconds."}
          visible={OTPmodal}
          buttonText={"OK"}
          onPress={() => {
            setOTPModal(!OTPmodal);
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  error: {
    fontSize: 12,
    color: "red",
    width: screen_width,
    marginHorizontal: "5%",
    marginTop: -10,
    marginBottom: h(15),
  },
  head: {
    textAlign: "center",
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
