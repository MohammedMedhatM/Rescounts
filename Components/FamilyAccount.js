import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FamilyFields from "./FamilyFields";
import { Icon } from "@rneui/themed";
import StudentForm from "./StudentForm";
import SpouseForm from "./SpouseForm";
import { Checkbox } from "native-base";
import Declaration from "./Declaration";
import Button from "./Button";

const FamilyAccount = ({ navigate }) => {
  const [open, setOpen] = useState("");
  const Divider = () => {
    return <View style={styles.divider} />;
  };

  const CheckBox = ({ text }) => {
    return (
      <View style={styles.container}>
        <Checkbox value="one" my={2} colorScheme="yellow">
          <Text style={styles.subText2}>{text}</Text>
        </Checkbox>
      </View>
    );
  };
  const openBox = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  const handleSubmit = () => {
    navigate("email");
  };

  const TypeField = () => {
    return (
      <View>
        <Text style={styles.collapseText}>Your Info</Text>
      </View>
    );
  };

  return (
    <View>
      <View style={styles.cardShadow}>
        <View style={styles.cardContainer}>
          <View style={styles.cardContent}>
            {open ? (
              <>
                <View>
                  <Text style={styles.headingText}>Your Info</Text>
                </View>
                <View>
                  <FamilyFields />
                </View>
              </>
            ) : (
              <TypeField />
            )}

            <View>
              <TouchableOpacity onPress={openBox}>
                <Icon
                  name="keyboard-arrow-down"
                  type="MaterialCommunityIcons"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <StudentForm />
      <SpouseForm />
      <Button
        title="Create account"
        BackColor="#FFD700"
        textColor="black"
        press={handleSubmit}
      />
      <Divider />

      <View>
        <Text>
          Already have an Account?
          <TouchableOpacity onPress={() => navigate("SignIn")}>
            <Text style={{ fontWeight: "bold" }}> Login</Text>
          </TouchableOpacity>
        </Text>
      </View>
      <Divider />
      <CheckBox text="Sign me up to receive exclusive offers and news on hot new resturants on Rescounts." />
      <CheckBox text="Receive order update by SMS" />
      <Divider />
      <Declaration />
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  cardShadow: {
    borderRadius: 16,
    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    margin: 10,
  },
  headingText: {
    fontSize: 16,
    alignSelf: "left",
    marginBottom: 5,
    fontWeight: "bold",
  },
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    margin: 5,
    alignContent: "center",
  },
  cardContent: {
    margin: 10,
    flexWrap: "row",
  },
  collapseText: {
    fontSize: 16,
    alignSelf: "left",
    fontWeight: "bold",
    paddingTop: 10,
  },
  container: {
    alignSelf: "flex-start",
    marginLeft: 5,
    flexWrap: "row",
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
    fontWeight: "bold",
    textAlign: "left",
    flexShrink: 1,
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
    margin: 20,
  },
});
export default FamilyAccount;
