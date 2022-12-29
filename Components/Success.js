import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Button from "./Button";
import { Icon } from "@rneui/themed";

const Success = ({ navigate }) => {
  const Divider = () => {
    return <View style={styles.divider} />;
  };
  const handleSubmit = () => {
    navigate("SignIn");
  };
  return (
    <View style={styles.container}>
      <View style={styles.headingView}>
        <Icon
          size={100}
          color="green"
          name="check-circle"
          type="MaterialCommunityIcons"
        />
        <Text style={styles.headingText}>Success</Text>
      </View>
      <Divider />
      <View>
        <Text style={styles.subText}>
          Congratulations your password has {"\n"}been changed
        </Text>
        <Divider />
      </View>
      <View style={styles.dividerDouble} />
      <Button
        title="Login"
        BackColor="#FFD700"
        textColor="black"
        press={handleSubmit}
      />
      <View style={styles.bottomEffect} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  headingView: {
    alignSelf: "center",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  headingText: {
    fontSize: 30,
    alignSelf: "center",
  },
  subText: {
    fontSize: 16,
    color: "grey",
    alignSelf: "center",
    textAlign: "center",
  },
  subText2: {
    fontSize: 16,
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
    margin: 10,
  },
  dividerDouble: {
    margin: 30,
  },
  image: {
    width: 100,
    height: 100,
  },
  bottomEffect: {
    marginBottom: 250,
  },
});
export default Success;
