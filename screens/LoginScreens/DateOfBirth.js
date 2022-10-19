import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../../colors";
import birthdayIcon from "../../assets/icons/birthdayIcon.png";
import { h } from "../../config/SizeConfig";
import DateTimePicker from "@react-native-community/datetimepicker";
import BlueButton from "../../components/BlueButton";
import CustomModal from "../../components/CustomModal";
import BlueText from "../../components/BlueText";

function DateOfBirth({ navigation }) {
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
  const [textView, setTextView] = useState(false);
  const [textView2, setTextView2] = useState(false);
  const [year, setYear] = useState(-1);
  const [birthdate, setBirthDate] = useState(
    new Date().getDate().toString() +
      " " +
      months[new Date().getMonth()] +
      " " +
      new Date().getFullYear().toString()
  );
  const [dateModal, setDateModal] = useState(false);
  const [modalView, setModalView] = useState(false);
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={birthdayIcon} />
      <Text style={styles.head}>Add your birthday</Text>
      <Text style={styles.subhead}>
        This won't be part of your public profile.
      </Text>
      <TouchableWithoutFeedback
        onPress={() => {
          console.log("why birthday");
        }}
      >
        <Text style={[styles.subhead, { color: colors.darkBlue }]}>
          Why do I need to provide my birthday?
        </Text>
      </TouchableWithoutFeedback>
      <View>
        <TouchableWithoutFeedback
          onPress={() => {
            setDateModal(!dateModal);
          }}
        >
          <View style={styles.textInput}>
            <Text style={styles.text}>{birthdate}</Text>
            {year != -1 && (
              <Text
                style={[styles.text, { color: year < 5 ? "red" : colors.grey }]}
              >
                {year} Years old
              </Text>
            )}
          </View>
        </TouchableWithoutFeedback>
      </View>
      {dateModal && (
        <DateTimePicker
          maximumDate={new Date()}
          value={new Date()}
          mode="date"
          onChange={(event, date) => {
            setDateModal(false);
            setYear(new Date(new Date() - new Date(date)).getFullYear() - 1970);
            setBirthDate(
              new Date(date).getDate().toString() +
                " " +
                months[new Date(date).getMonth()] +
                " " +
                new Date(date).getFullYear().toString()
            );
          }}
        />
      )}
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
            if (year < 5) {
              setModalView(!modalView);
            } else {
              navigation.navigate("CreateUsername");
            }
          }}
        />
        {textView && (
          <BlueText
            style={{ marginTop: 20 }}
            title={"Enter age instead"}
            onPress={() => {
              setTextView(false);
              setTextView2(true);
              navigation.navigate("AgeScreen");
            }}
          />
        )}
      </View>
      <CustomModal
        visible={modalView}
        buttonText={"OK"}
        onPress={() => {
          setModalView(!modalView);
          if (!textView && textView2) {
            navigation.navigate("AgeScreen");
          } else {
            setTextView(!textView);
          }
        }}
        title={"Enter your \n real birthday"}
        subhead={
          "Use your own birthday, even if this account is for a business, a pet or something else."
        }
      />
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
    marginBottom: 15,
  },
  img: {
    alignSelf: "center",
    width: 100,
    height: 70,
    marginTop: 30,
    marginBottom: 15,
  },
  subhead: {
    alignSelf: "center",
  },
  text: {
    color: colors.grey,
  },
  textInput: {
    padding: 10,
    borderColor: colors.lighGrey,
    marginHorizontal: "5%",
    borderRadius: 4,
    height: h(45),
    borderWidth: 1,
    marginTop: 25,
    marginBottom: h(15),
    backgroundColor: colors.textInputGrey,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default DateOfBirth;
