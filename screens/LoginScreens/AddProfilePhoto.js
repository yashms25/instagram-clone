import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableHighlight,
} from "react-native";
import colors from "../../colors";
import BlueButton from "../../components/BlueButton";
import BlueText from "../../components/BlueText";
import { h } from "../../config/SizeConfig";

function AddProfilePhoto() {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: h(20),
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          borderColor: colors.black,
          borderWidth: 1,
          width: 100,
          height: 100,
          alignSelf: "center",
        }}
      >
        <MaterialCommunityIcons name="camera-outline" size={60} />
      </View>
      <Text style={styles.head}>Add profile photo</Text>
      <Text style={styles.subhead}>
        Add a profile photo so your friends{"\n"} know it's you
      </Text>
      <BlueButton
        onPress={() => {
          setVisible(!visible);
        }}
        title="Add a photo"
        style={{ marginBottom: 25 }}
      />
      <BlueText
        onPress={() => {
          console.log("hello");
        }}
        title="Skip"
        style={{ fontWeight: "bold" }}
      />

      <Modal
        visible={visible}
        animated
        onRequestClose={() => setVisible(!visible)}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modal}>
          <View style={styles.outerView}>
            <View style={styles.innerView}>
              <Text style={styles.modalHead}>Change profile photo</Text>
            </View>
            <View
              style={{
                borderBottomColor: colors.lighGrey,
                borderBottomWidth: 1,
                width: "100%",
              }}
            ></View>
            <TouchableHighlight
              underlayColor={colors.lighGrey}
              onPress={() => {
                console.log("hello");
              }}
            >
              <View>
                <Text style={styles.buttonText}>Import from Facebook</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor={colors.lighGrey}
              onPress={() => {
                console.log("hello");
              }}
            >
              <View>
                <Text style={styles.buttonText}>Take photo</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor={colors.lighGrey}
              onPress={() => {
                console.log("hello");
              }}
            >
              <View>
                <Text style={styles.buttonText}>Choose from library</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  head: {
    fontSize: 25,
    alignSelf: "center",
    textAlign: "center",
    marginTop: 50,
    fontWeight: "bold",
  },
  subhead: {
    fontSize: 16,
    alignSelf: "center",
    textAlign: "center",
    marginBottom: h(60),
    marginTop: 15,
    color: colors.grey,
  },
  buttonText: {
    fontSize: 16,
    color: colors.black,
    marginVertical: 15,
    marginLeft: 20,
  },
  modalHead: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "center",
    textAlign: "center",
  },

  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  innerView: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  modalSubhead: {
    fontSize: 14,
    marginTop: 15,
    color: colors.grey,
    paddingHorizontal: 15,
    marginBottom: 20,
    textAlign: "center",
    justifyContent: "center",
  },
  outerView: {
    backgroundColor: colors.white,
    borderRadius: 12,
    width: "70%",
    alignSelf: "center",
  },
});

export default AddProfilePhoto;
