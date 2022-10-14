import React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native";
import colors from "../colors";

function CustomModal({
  visible,
  onPress,
  title,
  subhead,
  buttonText,
  buttonText2,
  onPress2,
}) {
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
          <TouchableHighlight underlayColor={colors.lighGrey} onPress={onPress}>
            <View>
              <Text style={styles.buttonText}>{buttonText}</Text>
            </View>
          </TouchableHighlight>
          {buttonText2 && (
            <>
              <View
                style={{
                  borderBottomColor: colors.lighGrey,
                  borderBottomWidth: 1,
                  width: "100%",
                }}
              ></View>
              <TouchableHighlight
                underlayColor={colors.lighGrey}
                style={{
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 12,
                }}
                onPress={onPress2}
              >
                <View>
                  <Text
                    style={[
                      styles.buttonText,
                      { color: colors.black, fontWeight: "normal" },
                    ]}
                  >
                    {buttonText2}
                  </Text>
                </View>
              </TouchableHighlight>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 16,
    color: colors.primaryBlue,
    alignSelf: "center",
    fontWeight: "bold",
    marginVertical: 15,
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
    backgroundColor: "rgba(0, 0, 0, 0.6)",
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
    textAlign: "center",
  },
  outerView: {
    backgroundColor: colors.white,
    borderRadius: 12,
    width: "70%",
    alignSelf: "center",
  },
});

export default CustomModal;
