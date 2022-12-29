import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import EnterPassword from "../Components/EnterPassword";
import Logo from "../Components/Logo";

const ChangeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView>
          <Logo />
          <EnterPassword navigate={navigation.navigate} />
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

export default ChangeScreen;
