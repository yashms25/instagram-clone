import React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../colors";

function CustomModal({ visible, onPress, title, subhead, buttonText }) {
  return (
    <Modal
      visible={visible}
      animated
      onRequestClose={onPress}
      transparent={true}
      animationType="fade"
    >
      <View style={styles.modal}>
        <View style={styles.outerView}>
          <View style={styles.innerView}>
            <Text style={styles.head}>{title}</Text>
            <Text style={styles.subhead}>{subhead}</Text>
          </View>
          <View
            style={{
              borderBottomColor: colors.lighGrey,
              borderBottomWidth: 1,
              width: "100%",
            }}
          ></View>
          <TouchableWithoutFeedback onPress={onPress}>
            <View>
              <Text style={styles.buttonText}>{buttonText}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 18,
    color: colors.lightBlue,
    alignSelf: "center",
    fontWeight: "bold",
    marginVertical: 10,
  },
  head: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    alignSelf: "center",
  },

  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  innerView: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  subhead: {
    fontSize: 14,
    marginTop: 15,
    color: colors.grey,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  outerView: {
    backgroundColor: colors.white,
    borderRadius: 12,
    width: "70%",
    alignSelf: "center",
  },
});

export default CustomModal;
