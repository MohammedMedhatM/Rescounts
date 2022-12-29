import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Button from "./Button";
import { Formik } from "formik";
import { loginValidationSchema } from "./validate";

const ForgetPass = ({ navigate }) => {
  const Divider = () => {
    return <View style={styles.divider} />;
  };
  const handleSubmit = () => {
    navigate("BackEmail");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingView}>
        <Text style={styles.headingText}>Forget Password</Text>
        <Divider />
        <Text style={styles.subText}>Enter your registered email below</Text>
      </View>
      <Divider />
      <View>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={loginValidationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ handleChange, handleBlur, values, errors, isValid, touched }) => (
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

              <Divider />
              <Text style={styles.subText}>
                Remeber the password?{" "}
                <TouchableOpacity onPress={() => navigate("SignIn")}>
                  <Text style={{ fontWeight: "bold" }}>Sign In</Text>
                </TouchableOpacity>
              </Text>
              <Button
                title="Submit"
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
    margin: 10,
    height: "100%",
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
  dividerDouble: {
    margin: 30,
  },
  errors: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    marginLeft: 10,
  },
  bottomEffect: {
    marginBottom: 200,
  },
});

export default ForgetPass;
