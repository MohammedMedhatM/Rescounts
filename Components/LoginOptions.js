import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
const LoginOptions = () => {
  const logoList = [
    {
      title: "Login with FaceBook",
      logo: require("../assets/facebook.png"),
      color: "blue",
    },
    {
      title: "Login with Google",
      logo: require("../assets/google.png"),
      color: "red",
    },
    {
      title: "Login with Apple",
      logo: require("../assets/apple.png"),
    },
  ];
  const Divider = () => {
    return <View style={styles.divider} />;
  };
  return (
    <View>
      {logoList.map((logo) => (
        <View>
          <TouchableOpacity
            style={[styles.buttonLogo, { borderColor: logo.color }]}
          >
            <Image style={styles.logo} source={logo.logo} />
            <Text
              style={[
                styles.logoText,
                { color: logo.color, borderColor: logo.color },
              ]}
            >
              {logo.title}
            </Text>
          </TouchableOpacity>
          <Divider />
        </View>
      ))}
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
  buttonLogo: {
    width: 400,
    height: 60,
    borderRadius: 15,
    borderWidth: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    alignSelf: "center",
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 14,
  },
  logoText: {
    fontSize: 15,
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: 18,
  },
  logo: {
    width: 25,
    height: 50,
    resizeMode: "contain",
    marginRight: 9,
  },
  divider: {
    margin: 5,
  },
});

export default LoginOptions;
