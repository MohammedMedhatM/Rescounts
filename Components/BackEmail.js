import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Button from "./Button";

const BackEmail = ({ navigate }) => {
  const Divider = () => {
    return <View style={styles.divider} />;
  };
  const handleSubmit = () => {
    navigate("change");
  };
  return (
    <View style={styles.container}>
      <View style={styles.headingView}>
        <Image
          style={styles.image}
          source={require("../assets/checkGreen.png")}
        />
        <Text style={styles.headingText}>Success</Text>
      </View>
      <Divider />
      <View>
        <Text style={styles.subText}>
          Please check your email to create {"\n"}a new password
        </Text>
        <Divider />
        <Text style={styles.subText2}>
          Can't get email?
          <TouchableOpacity onPress={() => navigate("forget")}>
            <Text style={[styles.subText3]}> Resubmit</Text>
          </TouchableOpacity>
        </Text>
      </View>
      <Button
        title="Check your email"
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
    marginTop: 40,
  },
  headingView: {
    alignSelf: "center",
    margin: 5,
  },
  headingText: {
    fontSize: 30,
    alignSelf: "center",
  },
  subText: {
    fontSize: 16,
    color: "black",
    alignSelf: "center",
    textAlign: "center",
  },
  subText2: {
    fontSize: 16,
    color: "black",
    alignSelf: "center",
    fontWeight: "bold",
  },
  subText3: {
    fontSize: 16,
    color: "green",
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
    marginBottom: 350,
  },
});
export default BackEmail;
