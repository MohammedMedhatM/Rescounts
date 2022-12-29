import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Personal from "./Personal";
import FamilyAccount from "./FamilyAccount";
import { Icon } from "@rneui/themed";

const SignUp = ({ navigate }) => {
  const [swtich, setSwtich] = useState(false);

  const swtiched = () => {
    if (swtich) {
      setSwtich(false);
    } else {
      setSwtich(true);
    }
  };
  return (
    <View>
      <View style={styles.headingView}>
        <Text style={styles.headingText}>Sign Up</Text>
        <Text style={styles.subText}>Add your details to sign up</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={swtiched}
          style={[styles.miniContainerActive]}
        >
          <Icon
            style={styles.image}
            name="person"
            type="Ionicons"
            color={swtich ? "grey" : "#FFD700"}
            size={35}
          />
          <Text
            style={{
              color: swtich ? "grey" : "#FFD700",
            }}
          >
            Personal Account
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={swtiched} style={styles.miniContainer}>
          <Icon
            size={35}
            style={styles.image}
            name="family-restroom"
            type="MaterialIcons"
            color={swtich ? "#FFD700" : "grey"}
          />

          <Text
            style={{
              color: swtich ? "#FFD700" : "grey",
              textDecorationLine: swtich ? "#FFD700" : "grey",
            }}
          >
            Family Account
          </Text>
        </TouchableOpacity>
      </View>
      {swtich ? (
        <FamilyAccount navigate={navigate} />
      ) : (
        <Personal navigate={navigate} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 30,
  },
  miniContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  miniContainerActive: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 35,
    resizeMode: "contain",
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
    fontSize: 18,
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
});
export default SignUp;
