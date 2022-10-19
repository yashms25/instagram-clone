import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import colors from "../../colors";
import CommonInput from "../../components/CommonInput";
import { h } from "../../config/SizeConfig";
import { MaterialIcons } from "@expo/vector-icons";
import BlueButton from "../../components/BlueButton";
import { getFirestore, collection, getDocs, doc } from "firebase/firestore";

function CreateUsername() {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState(false);
  const [activity, setActivity] = useState(false);

  const checkUsername = async (name) => {
    setActivity(true);
    setError(false);
    const firestore = getFirestore();
    const data = await getDocs(collection(firestore, "users"));
    for (let index = 0; index < data.docs.length; index++) {
      const element = data.docs[index];
      if (element.data().username == name) {
        setError(true);
        setActivity(false);
        break;
      } else {
        setError(false);
      }
    }
    setActivity(false);
  };

  return (
    <View style={styles.conatiner}>
      <Text style={styles.head}>CREATE USERNAME</Text>
      <Text style={styles.subhead}>
        Add a username. You can change this at any{"\n"} time.
      </Text>
      <View style={{ position: "relative", marginTop: 30 }}>
        <CommonInput
          type={"username"}
          placeholder={"Username"}
          onChangeText={(text) => {
            setUserName(text);
            checkUsername(text);
          }}
          value={userName}
          style={{
            borderColor: userName && error ? "red" : colors.lighGrey,
          }}
        />
        {!error && userName && (
          <MaterialIcons
            size={20}
            color={"green"}
            style={{ position: "absolute", top: 12, right: 25 }}
            name="check"
          />
        )}
        {userName && error && (
          <Text
            style={{
              color: "red",
              fontSize: 12,
              marginBottom: h(15),
              marginTop: -10,
              width: "100%",
              marginHorizontal: "5%",
            }}
          >
            The username {userName} is not available
          </Text>
        )}
        <BlueButton
          onPress={() => {}}
          activity={activity}
          disabled={error || !userName}
          title={"Next"}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 20,
          width: "100%",
        }}
      >
        <View>
          <Text
            style={[styles.bottomtext, { lineHeight: 17, marginBottom: 30 }]}
          >
            People who use our service may have uploaded your{"\n"} contact
            information to Instagram.{" "}
            <Text style={styles.bluetext}>Learn More</Text>
          </Text>
          <Text style={styles.bottomtext}>
            By clicking Next, you agree to our
            <Text style={styles.bluetext}>
              Terms, Privacy Policy{"\n"}
            </Text> and <Text style={styles.bluetext}>Cookies Policy.</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bluetext: {
    color: colors.darkBlue,
    fontWeight: "500",
  },
  bottomtext: {
    fontSize: 12,
    color: colors.grey,
    alignSelf: "center",
    textAlign: "center",
  },
  conatiner: {
    flex: 1,
    backgroundColor: colors.white,
    position: "relative",
  },
  head: {
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: h(80),
  },
  subhead: {
    color: colors.grey,
    fontSize: 14,
    textAlign: "center",
    marginTop: h(5),
  },
});

export default CreateUsername;
