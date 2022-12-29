import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Button from "./Button";
import { Formik } from "formik";
import { loginValidationSchema } from "./validate";
import { Icon } from "@rneui/themed";

const EnterPassword = ({ navigate }) => {
  const handleSubmit = (values) => {
    navigate("success");
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headingText}>Change Password </Text>
      </View>
      <View>
        <Formik
          initialValues={{
            oldPass: "",
            password: "",
            confirm: "",
          }}
          validationSchema={loginValidationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ handleChange, handleBlur, values, errors, isValid, touched }) => (
            <View style={styles.headingView}>
              <View style={styles.inputPassword}>
                <TextInput
                  style={styles.passField}
                  value={values.oldPass}
                  placeholder="Your Old Password"
                  onChangeText={handleChange("oldPass")}
                  onBlur={handleBlur("onPass")}
                  secureTextEntry={true}
                />
                <Icon
                  style={styles.icon}
                  name="eye-outline"
                  size={25}
                  type="ionicon"
                />
              </View>

              {touched.oldPass && errors.oldPass && (
                <Text style={styles.errors}>{errors.oldPass}</Text>
              )}

              <View style={styles.inputPassword}>
                <TextInput
                  style={styles.passField}
                  value={values.password}
                  placeholder="Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  secureTextEntry={true}
                />
                <Icon
                  style={styles.icon}
                  name="eye-outline"
                  size={25}
                  type="ionicon"
                />
              </View>

              {touched.password && errors.password && (
                <Text style={styles.errors}>{errors.password}</Text>
              )}

              <View style={styles.inputPassword}>
                <TextInput
                  style={styles.passField}
                  value={values.confirm}
                  placeholder="confirm Password"
                  onChangeText={handleChange("confirm")}
                  onBlur={handleBlur("confirm")}
                  secureTextEntry={true}
                />
                <Icon
                  style={styles.icon}
                  name="eye-outline"
                  size={25}
                  type="ionicon"
                />
              </View>
              {touched.confirm && errors.confirm && (
                <Text style={styles.errors}>{errors.confirm}</Text>
              )}

              <Text style={styles.subText}>
                Remeber the password?{" "}
                <TouchableOpacity onPress={() => navigate("SignIn")}>
                  <Text style={{ fontWeight: "bold" }}>Sign In</Text>
                </TouchableOpacity>
              </Text>
              <Button
                title="Reset Password"
                BackColor={!isValid ? "#FFD700" : "#D3D3D3"}
                textColor={!isValid ? "black" : "white"}
                press={handleSubmit}
                disable={isValid}
              />
            </View>
          )}
        </Formik>
      </View>
      <View style={styles.bottomEffect} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
  },
  headingView: {
    alignSelf: "center",
    margin: 5,
  },
  headingText: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 30,
  },
  subText: {
    fontSize: 15,
    color: "grey",
    alignSelf: "center",
  },
  input: {
    height: 60,
    width: 400,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
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
    margin: 5,
  },
  inputPassword: {
    height: 60,
    width: 380,
    margin: 12,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "grey",
    opacity: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  passField: {
    paddingRight: 200,
  },
  errors: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    marginLeft: 10,
  },
  bottomEffect: {
    marginBottom: 100,
  },
});
export default EnterPassword;
