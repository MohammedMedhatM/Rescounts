import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import LoginOptions from "./LoginOptions";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { loginValidationSchemaShort } from "./validate";
import { Icon } from "@rneui/themed";
import Button from "./Button";
import Declaration from "./Declaration";
import { signin } from "../actions/user";

const SignIn = ({ navigate }) => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const Divider = () => {
    return <View style={styles.divider} />;
  };

  const handleSubmit = (values) => {
    dispatch(signin(values));
  };

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      alert(user.data.user.email + " has logged in successfully");
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <View style={styles.headingView}>
        <Text style={styles.headingText}>Login</Text>
        <Text style={styles.subText}>Add your details to login</Text>
      </View>
      <View style={styles.headingView}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginValidationSchemaShort}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <View>
              <View style={styles.headingView}>
                <TextInput
                  style={styles.input}
                  value={values.email}
                  placeholder="Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errors}>{errors.email}</Text>
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
              </View>
              <Button
                title="Login"
                BackColor={isValid ? "#FFD700" : "#D3D3D3"}
                textColor={isValid ? "black" : "white"}
                press={handleSubmit}
                disable={!isValid}
              />
            </View>
          )}
        </Formik>
      </View>
      <Divider />

      <View style={styles.headingView}>
        <TouchableOpacity onPress={() => navigate("forget")}>
          <Text>Forget your password?</Text>
        </TouchableOpacity>
      </View>
      <Divider />
      <View style={styles.headingView}>
        <Text style={styles.subText}>or Login With</Text>
        <Divider />
        <LoginOptions />
      </View>
      <Divider />
      <View>
        <Text style={styles.subText}>
          Don't have an Account?{" "}
          <TouchableOpacity onPress={() => navigate("SignUp")}>
            <Text
              style={([styles.subText], { color: "black", fontWeight: "bold" })}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </Text>
        <Divider />
        <Declaration />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
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
  input: {
    height: 60,
    width: 400,
    margin: 12,
    borderWidth: 0.5,
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
  errors: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    marginLeft: 10,
  },
  inputPassword: {
    height: 60,
    width: 400,
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
});

export default SignIn;
