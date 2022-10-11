import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";
import colors from "../colors";
const { screen_width, screen_height } = Dimensions.get("window");
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { h, w } from "../config/SizeConfig";
import { Colors } from "react-native/Libraries/NewAppScreen";

function BlueButton({
  title,
  onPress,
  icon,
  disabled = false,
  style,
  color,
  activity = false,
}) {
  return (
    <TouchableHighlight
      style={[
        styles.button,
        style,
        {
          opacity: disabled || activity ? 0.3 : 1,
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
        {!activity && <Text style={styles.text}>{title}</Text>}
        {activity && (
          <ActivityIndicator
            size={"large"}
            color={colors.white}
            style={{ zIndex: 10, position: "absolute" }}
          />
        )}
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryBlue,
    position: "relative",
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
