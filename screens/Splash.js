import { useEffect } from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import backgroundLogo from "../assets/logo/backgroundLogo.png";
import metaInstagram from "../assets/logo/metaInstagram.png";
import colors from "../colors";
import { h, w } from "../config/SizeConfig";

function Splash({ navigation }) {
  //   const resetAction = CommonActions.reset({
  //     index: 0,
  //     routes: [{ name: "HomeStack" }],
  //   });
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("DateOfBirth");
    }, 1000);
  });
  return (
    <View style={styles.container}>
      <Image
        source={backgroundLogo}
        style={{ width: h(130), height: h(130) }}
      />
      <View
        style={{ position: "absolute", alignSelf: "center", bottom: h(50) }}
      >
        <Text style={{ color: colors.grey, alignSelf: "center" }}>from</Text>
        <Image
          source={metaInstagram}
          style={{ width: w(100), height: h(30) }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: colors.white,
  },
});

export default Splash;
