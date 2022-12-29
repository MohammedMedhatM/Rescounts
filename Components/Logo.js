import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <View>
      <View style={styles.upperSection}>
        <Image style={styles.phone} source={require("../assets/phone.png")} />
        <Image
          style={styles.whatsapp}
          source={require("../assets/whatsapp.png")}
        />
      </View>

      <Image style={styles.image} source={require("../assets/logo.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },
  upperSection: {
    flexDirection: "row",
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "auto",
    alignContent: "flex-end",
  },
  whatsapp: {
    width: 40,
    height: 50,
    resizeMode: "contain",
    marginLeft: 15,
    marginRight: 10,
  },
  phone: {
    width: 30,
    resizeMode: "contain",
    borderRadius: 20,
  },
});

export default Logo;
