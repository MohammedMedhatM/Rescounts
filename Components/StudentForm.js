import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import FamilyFields from "./FamilyFields";
import { Icon } from "@rneui/themed";

const StudentForm = () => {
  const [open, setOpen] = useState("");
  const FieldNames = [
    "School Code",
    "Class Name",
    "First Name Address",
    "Last Name Number",
    "Student Number",
    "Student ID",
  ];
  const openBox = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  const TypeField = () => {
    return (
      <View>
        <Text style={styles.collapseText}>
          Would you like to add your students to your account?*
        </Text>
      </View>
    );
  };
  return (
    <View>
      <View>
        <View style={styles.cardShadow}>
          <View style={styles.cardContainer}>
            {open ? (
              <>
                <View style={styles.cardContent}>
                  <TypeField />
                  <View>
                    <TextInput
                      style={styles.input}
                      placeholder="Choose School"
                    />

                    {FieldNames.map((field) => (
                      <TextInput style={styles.input} placeholder={field} />
                    ))}
                  </View>
                  <View>
                    <TouchableOpacity onPress={openBox}>
                      <Icon
                        name="keyboard-arrow-down"
                        type="MaterialCommunityIcons"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            ) : (
              <View style={styles.cardContentCollapse}>
                <TypeField />
                <View>
                  <TouchableOpacity onPress={openBox}>
                    <Icon
                      name="keyboard-arrow-right"
                      type="MaterialCommunityIcons"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
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
    paddingBottom: 10,
    alignContent: "center",
  },
  cardContent: {
    margin: 10,
  },
  cardContentCollapse: {
    margin: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  collapseText: {
    fontSize: 16,
    alignSelf: "left",
    fontWeight: "bold",
    paddingTop: 10,
  },
  input: {
    height: 60,
    width: 340,
    margin: 12,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: "grey",
    alignSelf: "center",
    padding: 10,
  },
});
export default StudentForm;
