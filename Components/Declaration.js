import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Declaration = () => {
  return (
    <View>
      <Text style={([styles.subText], { color: "black", textAlign: "center" })}>
        By proceeding, you agree to our{" "}
        <Text style={{ textDecorationLine: "underline" }}>Terms of Use</Text>{" "}
        and confirm you have read our{" "}
        <Text Text style={{ textDecorationLine: "underline" }}>
          Privacy and Cookie Statement
        </Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },

  subText: {
    fontSize: 15,
    color: "grey",
    alignSelf: "center",
  },
});

export default Declaration;
