import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Icon } from "@rneui/themed";
import Button from "./Button";
import OTPInputView from "@twotalltotems/react-native-otp-input";

const VerifyAccount = ({ navigate }) => {
  const [sent, setSent] = useState(false);

  const changeTheme = () => {
    if (sent === false) {
      setSent(true);
    } else {
      navigate("SignIn");
    }
  };

  const Divider = () => {
    return <View style={styles.divider} />;
  };

  const NumberBox = () => {
    if (sent) {
      return (
        <>
          <OTPInputView
            style={styles.input}
            pinCount={6}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
          />
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <View>
      {!sent ? (
        <>
          <View>
            <Icon
              size={70}
              color="#FFD700"
              style={styles.icon}
              name="phone"
              type="Feather"
            />
          </View>
        </>
      ) : null}
      <Divider />
      <View style={styles.headingView}>
        <Text style={styles.headingText}>Verify Account</Text>
        <Divider />
        <Text style={styles.subText}>
          Please enter the verification code we sent {"\n"}To your Phone number
          071****12
        </Text>
        <Divider />
        <NumberBox />
        <Divider />
        <Button
          title="Continue"
          BackColor="#FFD700"
          textColor="black"
          press={changeTheme}
        />
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.bottomText}>Resent code</Text>
        <Text style={styles.bottomText}>Change Number</Text>
      </View>
      <View style={styles.bottomEffect} />
    </View>
  );
};

const styles = StyleSheet.create({
  headingView: {
    alignSelf: "center",
    margin: 5,
  },
  headingText: {
    fontSize: 28,
    alignSelf: "center",
    marginBottom: 5,
    alignItems: "center",
    fontWeight: "bold",
  },
  subText: {
    fontSize: 15,
    color: "grey",
    alignSelf: "center",
    textAlign: "center",
  },
  bottomView: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  bottomText: {
    textDecorationLine: "underline",
  },
  divider: {
    margin: 10,
  },
  input: {
    width: "90%",
    height: 50,
    margin: 15,
    paddingTop: 10,
  },
  underlineStyleBase: {
    borderRadius: 10,
    borderWidth: 1,
    borderBottomWidth: 1,
    height: 60,
    borderColor: "grey",
    color: "black",
    margin: 5,
  },

  underlineStyleHighLighted: {
    borderColor: "#FFD700",
    borderColor: "grey",
  },
  bottomEffect: {
    marginBottom: 200,
  },
});

export default VerifyAccount;
