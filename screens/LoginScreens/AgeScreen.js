import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import colors from "../../colors";
import { h } from "../../config/SizeConfig";
import BlueButton from "../../components/BlueButton";
import BlueText from "../../components/BlueText";
function AgeScreen({ navigation }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [age, setAge] = useState("");
  const [error, setError] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Enter your age</Text>
      <Text style={styles.subhead}>
        By doing this, you'll set your birthday to{" "}
        {new Date().getDate().toString()} {months[new Date().getMonth()]}
        {"\n"} of your birth year. No one else will see this, and you{"\n"} can
        change it later.
      </Text>
      <View style={{ marginHorizontal: "5%", marginTop: h(50) }}>
        <Text style={{ color: error ? "red" : colors.grey, fontSize: 12 }}>
          {error ? "Enter your real age" : "Age"}
        </Text>
        <TextInput
          style={{
            marginHorizontal: 0,
            padding: 5,
            paddingLeft: 0,
            borderWidth: 0,
            backgroundColor: colors.white,
            borderBottomWidth: 1,
            borderBottomColor: colors.primaryBlue,
            height: h(45),
            marginBottom: h(15),
          }}
          value={age}
          onChangeText={(text) => {
            setAge(text);
            setError(false);
          }}
          autofocus={true}
          keyboardType="number-pad"
          maxLength={2}
        />
      </View>
      <View style={{ position: "absolute", bottom: 30, width: "100%" }}>
        <View
          style={{
            borderBottomColor: colors.lighGrey,
            borderBottomWidth: 1,
            marginBottom: 15,
          }}
        ></View>
        <BlueButton
          title={"Next"}
          onPress={() => {
            if (age < 5) {
              setError(true);
            } else {
              navigation.navigate("CreateUsername");
            }
          }}
        />
        <BlueText
          style={{ marginTop: 20 }}
          title={"Enter date of birth"}
          onPress={() => {
            navigation.goBack();
          }}
        />
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
    fontSize: 25,
    alignSelf: "center",
    textAlign: "center",
    marginBottom: 15,
    marginTop: 30,
  },

  subhead: {
    color: colors.grey,
    textAlign: "center",
  },
});

export default AgeScreen;
