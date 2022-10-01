import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import colors from "../colors";
const { screen_width, screen_height } = Dimensions.get("window");
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { h, w } from "../config/SizeConfig";

function BlueButton({ title, onPress, icon, disabled, style, color }) {
  return (
    <TouchableHighlight
      style={[
        styles.button,
        style,
        {
          opacity: !disabled ? 1 : 0.3,
        },
      ]}
      disabled={disabled}
      underlayColor={colors.lightBlue}
      onPress={onPress}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon && (
          <MaterialIcons
            style={{ marginRight: 5 }}
            name={icon}
            size={20}
            color={color}
          />
        )}
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryBlue,

    width: screen_width,
    padding: 10,
    marginHorizontal: "5%",
    borderRadius: 6,
    height: h(45),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
  },
});

export default BlueButton;
