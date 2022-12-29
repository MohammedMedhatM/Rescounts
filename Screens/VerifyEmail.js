import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";

import EmailVerification from "../Components/EmailVerification";
import Logo from "../Components/Logo";

const VerifyEmail = ({ navigation }) => {
  const [signup, setSignUp] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView>
          <Logo />
          <EmailVerification navigate={navigation.navigate} />
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

export default VerifyEmail;
