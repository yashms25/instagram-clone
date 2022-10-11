import { TextInput, View, StyleSheet, Dimensions } from "react-native";
import colors from "../colors";
const { screen_width, screen_height } = Dimensions.get("window");
import { h, w } from "../config/SizeConfig";

function CommonInput({
  placeholder,
  autofocus = false,
  securetextentry = false,
  style,
  value = "",
  onChangeText,
  onBlur,
}) {
  return (
    <View>
      <TextInput
        style={[styles.textInput, style]}
        placeholder={placeholder}
        autoFocus={autofocus}
        cursorColor={colors.black}
        secureTextEntry={securetextentry}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur ? onBlur : () => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
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

export default CommonInput;
