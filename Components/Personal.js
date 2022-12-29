import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Button from "./Button";
import { Checkbox } from "native-base";
import Declaration from "./Declaration";
import FormFields from "./FormFields";

const Personal = ({ navigate }) => {
  const Divider = () => {
    return <View style={styles.divider} />;
  };

  const CheckBox = ({ text }) => {
    return (
      <View style={styles.container}>
        <Checkbox value="one" my={2} colorScheme="yellow">
          <Text style={styles.subText2}>{text}</Text>
        </Checkbox>
      </View>
    );
  };
  return (
    <View>
      <Divider />
      <FormFields />
      <Divider />
      <View>
        <Text>
          Already have an Account?
          <TouchableOpacity onPress={() => navigate("SignIn")}>
            <Text style={{ fontWeight: "bold" }}> Login</Text>
          </TouchableOpacity>
        </Text>
      </View>
      <Divider />
      <CheckBox text="Sign me up to receive exclusive offers and news on hot new resturants on Rescounts." />
      <CheckBox text="Receive order update by SMS" />
      <Divider />
      <Declaration />
      <Divider />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    marginLeft: 15,
  },
  headingView: {
    alignSelf: "center",
    margin: 5,
  },
  headingText: {
    fontSize: 30,
    alignSelf: "center",
    marginBottom: 5,
  },
  subText: {
    fontSize: 15,
    color: "grey",
    alignSelf: "center",
  },
  subText2: {
    fontSize: 15,
    color: "black",
    alignSelf: "center",
    fontWeight: "bold",
  },
  input: {
    height: 60,
    width: 400,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "grey",
    opacity: 10,
    padding: 10,
  },
  button: {
    backgroundColor: "#D3D3D3",
    width: 400,
    height: 60,
    alignSelf: "center",
    borderRadius: 15,
  },
  buttonText: {
    alignSelf: "center",
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 14,
  },
  divider: {
    margin: 20,
  },
});

export default Personal;
