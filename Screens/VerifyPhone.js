import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";

import VerifyAccount from "../Components/VerifyAccount";
import Logo from "../Components/Logo";

//import GetPass from "../components/Register/GetPass";

const VerifyPhone = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView>
          <Logo />
          <VerifyAccount navigate={navigation.navigate} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 3,
    backgroundColor: "#FFFFFF",
  },
  headingView: {
    alignSelf: "center",
    margin: 5,
  },
});

export default VerifyPhone;
