import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  BackHandler,
} from "react-native";
import colors from "../../colors";
import CommonInput from "../../components/CommonInput";
import { h, w } from "../../config/SizeConfig";
import { MaterialIcons } from "@expo/vector-icons";
import BlueButton from "../../components/BlueButton";
import BlueText from "../../components/BlueText";
import CheckBox from "expo-checkbox";
import CustomModal from "../../components/CustomModal";

function NamePasswordScreen({ navigation }) {
  const [name, setName] = useState("");
  const [password, setPssword] = useState("");
  const [activity, setActivity] = useState(false);
  const [checked, setChecked] = useState(false);
  const [modalVisible, setmodalVisible] = useState(false);
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        setmodalVisible(!modalVisible);
        return true;
      }
    );

    return () => backHandler.remove();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.head}>NAME AND PASSWORD</Text>
      <View style={{ position: "relative", marginTop: 30 }}>
        <CommonInput
          placeholder={"Full Name"}
          value={name}
          autofocus={true}
          onChangeText={setName}
          type={"name"}
        />
        {name && (
          <TouchableWithoutFeedback
            onPress={() => {
              setName("");
            }}
          >
            <MaterialIcons
              size={25}
              color={colors.grey}
              style={{ position: "absolute", top: 10, right: 25 }}
              name="close"
            />
          </TouchableWithoutFeedback>
        )}
        <View>
          <CommonInput
            type={"password"}
            securetextentry={true}
            placeholder={"Password"}
            onChangeText={setPssword}
            value={password}
            style={{
              borderColor:
                password && password.length < 6 ? "red" : colors.lighGrey,
            }}
          />
          {password && password.length < 6 && (
            <Text
              style={{
                color: "red",
                fontSize: 12,
                marginBottom: h(15),
                marginTop: -10,
                width: "100%",
                marginHorizontal: "5%",
              }}
            >
              Passwords must be at least 6 characters.
            </Text>
          )}
        </View>
      </View>
      <TouchableWithoutFeedback
        onPress={() => {
          setChecked(!checked);
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: h(10),
            marginBottom: h(25),
          }}
        >
          <CheckBox
            color={checked ? colors.primaryBlue : undefined}
            value={checked}
            onValueChange={setChecked}
            style={{
              borderColor: colors.grey,
              marginRight: 15,
              marginLeft: 25,
              borderWidth: 2,
            }}
          />
          <Text style={{ color: colors.grey, fontSize: 12 }}>
            Remember password
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <BlueButton
        disabled={name == "" || password == "" || password.length < 6}
        title={"Continue and sync contacts"}
        activity={activity}
        onPress={() => {
          navigation.navigate("DateOfBirth");
        }}
      />

      <BlueText
        style={{ marginTop: h(20) }}
        title={"Continue without syncing contacts"}
        onPress={() => {
          navigation.navigate("DateOfBirth");
        }}
        disabled={name == "" || password == "" || password.length < 6}
      />
      <Text
        style={{
          color: colors.grey,
          fontSize: 12,
          alignSelf: "center",
          textAlign: "center",
          position: "absolute",
          bottom: h(25),
        }}
        textBreakStrategy="balanced"
      >
        Your contacts will be periodically synced and stored on instagram
        servers to help you and others find friends, and to help us provide a
        better service. To remove contacts, go to Settings and disconnect.{" "}
        <Text style={{ fontWeight: "bold" }}>Learn More.</Text>
      </Text>
      {modalVisible && (
        <CustomModal
          title={"You're almost done"}
          subhead={"Are you sure want to go back?"}
          visible={modalVisible}
          buttonText={"Go back"}
          onPress={() => {
            setmodalVisible(!modalVisible);
            navigation.goBack();
          }}
          onPress2={setmodalVisible}
          buttonText2={"Cancel"}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  head: {
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: h(55),
  },
});

export default NamePasswordScreen;
