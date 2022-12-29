import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import SignIn from "../Components/SignIn";

import Logo from "../Components/Logo";

const AuthScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView>
          <Logo />
          <SignIn navigate={navigation.navigate} />
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

export default AuthScreen;
