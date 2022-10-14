import { TouchableHighlight, Text, StyleSheet, View } from "react-native";
import colors from "../colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

function BlueText({ title, onPress, icon, style, color, disabled = false }) {
  return (
    <TouchableHighlight
      underlayColor={disabled ? colors.lightBlue : colors.white}
      style={[{ alignSelf: "center" }, style]}
      onPress={onPress}
      disabled={disabled}
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
            size={30}
            color={color}
          />
        )}
        <Text
          style={[
            styles.text,
            { color: disabled ? colors.lightBlue : colors.primaryBlue },
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  text: {
    color: colors.primaryBlue,
    fontWeight: "bold",
  },
});

export default BlueText;
