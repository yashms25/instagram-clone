import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
  Dimensions,
} from "react-native";
import user from "../../assets/icons/user.png";
import { w, h } from "../../config/SizeConfig";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import colors from "../../colors";
import BlueButton from "../../components/BlueButton";
import { MaterialIcons } from "@expo/vector-icons";
const { screen_width, screen_height } = Dimensions.get("window");
import { Formik } from "formik";
import * as Yup from "yup";
import { email, mobile_number } from "../../config/Validation";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import FirebaseConfig from "../../config/FirebaseConfig";
import { getAuth, PhoneAuthProvider } from "firebase/auth";

const Tab = createMaterialTopTabNavigator();

function SignupManualScreen({ navigation }) {
  const auth = getAuth();
  const validationSchemaPhone = Yup.object().shape({
    phone: mobile_number,
  });
  const validationSchemaEmail = Yup.object().shape({
    email: email,
  });
  const Phone = () => {
    const captcharef = useRef(null);

    const [activity, setActivity] = useState(false);

    return (
      <>
        <FirebaseRecaptchaVerifierModal
          ref={captcharef}
          firebaseConfig={FirebaseConfig}
        ></FirebaseRecaptchaVerifierModal>
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
          <Formik
            initialValues={{ phone: "" }}
            validationSchema={validationSchemaPhone}
            onSubmit={async (values) => {
              try {
                setActivity(true);
                const phoneProvider = new PhoneAuthProvider(auth);
                const verificationId = await phoneProvider.verifyPhoneNumber(
                  "+91" + values.phone,
                  captcharef.current
                );
                console.log(values);
                setActivity(false);
                navigation.navigate("OTPScreen", {
                  verificationId: verificationId,
                  phone: values.phone,
                });
              } catch {
                setActivity(false);
              }
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              resetForm,
              errors,
              touched,
            }) => (
              <>
                <TextInput
                  textContentType="telephoneNumber"
                  keyboardType="phone-pad"
                  style={[
                    styles.textInput,
                    {
                      paddingLeft: w(80),
                      borderColor:
                        errors.phone && touched.phone ? "red" : colors.lighGrey,
                    },
                  ]}
                  placeholder={"Phone"}
                  cursorColor={colors.black}
                  value={values.phone}
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  errors={errors}
                />
                {values.phone && (
                  <TouchableWithoutFeedback
                    onPress={() => {
                      resetForm({
                        phone: "",
                      });
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
                {errors.phone && touched.phone && (
                  <Text
                    style={{
                      color: "red",
                      fontSize: 12,
                      marginBottom: h(15),
                      marginTop: -10,
                    }}
                  >
                    {errors.phone}
                  </Text>
                )}
                <Text
                  style={{
                    color: colors.grey,
                    fontSize: 12,
                    textAlign: "center",
                    marginBottom: h(15),
                  }}
                >
                  You may receive SMS notifications from us for security and
                  login purposes.
                </Text>
                <BlueButton
                  style={{ marginHorizontal: 0 }}
                  disabled={values.phone == ""}
                  title={"Next"}
                  activity={activity}
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
        </View>
      </>
    );
  };
  const Email = () => {
    const [activity, setActivity] = useState(false);

    return (
      <View style={styles.tabcontainer}>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={validationSchemaEmail}
          onSubmit={(values) => {
            setActivity(true);
            setTimeout(() => {
              setActivity(false);
            }, 2000);
            console.log(values);
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            resetForm,
            errors,
            touched,
          }) => (
            <>
              <TextInput
                style={[
                  styles.textInput,
                  {
                    borderColor:
                      errors.email && touched.email ? "red" : colors.lighGrey,
                  },
                ]}
                placeholder={"Email"}
                cursorColor={colors.black}
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                errors={errors}
              />
              {values.email && (
                <TouchableWithoutFeedback
                  onPress={() => {
                    resetForm({
                      email: "",
                    });
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
              {errors.email && touched.email && (
                <Text
                  style={{
                    color: "red",
                    fontSize: 12,
                    marginBottom: h(15),
                    marginTop: -10,
                  }}
                >
                  {errors.email}
                </Text>
              )}
              <BlueButton
                style={{ marginHorizontal: 0 }}
                disabled={values.email == ""}
                title={"Next"}
                activity={activity}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>
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
