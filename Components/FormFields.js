import React, { useEffect } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Checkbox } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import Button from "./Button";
import { loginValidationSchema } from "./validate";
import { Icon } from "@rneui/themed";
import { signup } from "../actions/user";

const FormFields = () => {
  const user = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      alert(user.data.user.email + " has logged in successfully");
    }
  }, [user]);

  const CheckBox = ({ text, value }) => {
    return (
      <View style={styles.container}>
        <Checkbox value={value} my={2} colorScheme="yellow">
          <Text style={styles.subText2}>{text}</Text>
        </Checkbox>
      </View>
    );
  };

  const handleSubmit = (values) => {
    dispatch(signup(values));
  };
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        confirm: "",
        allowsPromotions: false,
        allowsSMS: false,
      }}
      validationSchema={loginValidationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View>
          <View style={styles.headingView}>
            <TextInput
              style={styles.input}
              value={values.firstName}
              onChangeText={handleChange("firstName")}
              onBlur={handleBlur("firstName")}
              placeholder="First Name"
            />
            {touched.firstName && errors.firstName && (
              <Text style={styles.errors}>{errors.firstName}</Text>
            )}
            <TextInput
              style={styles.input}
              value={values.lastName}
              placeholder="Last Name"
              onChangeText={handleChange("lastName")}
              onBlur={handleBlur("lastName")}
            />
            {touched.lastName && errors.lastName && (
              <Text style={styles.errors}>{errors.lastName}</Text>
            )}
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
            <TextInput
              style={styles.input}
              value={values.phone}
              placeholder="Phone number"
              onChangeText={handleChange("phone")}
              onBlur={handleBlur("phone")}
            />
            {touched.phone && errors.phone && (
              <Text style={styles.errors}>{errors.phone}</Text>
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
            <CheckBox text="Save password" value={true} />
          </View>
          <Button
            title="Create account"
            BackColor="#FFD700"
            textColor="black"
            press={handleSubmit}
          />
        </View>
      )}
    </Formik>
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
    width: 380,
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
    margin: 10,
  },
  errors: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    marginLeft: 10,
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
});

export default FormFields;
