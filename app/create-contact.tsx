import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { AntDesign, FontAwesome, Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";


const CreateNewContact = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="#1B263B" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create New Contact</Text>
        <View style={{ width: 24 }} /> {/* Placeholder to center header text */}
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Profile Image Placeholder */}
        <View style={styles.profileImageContainer}>
          <Image
            source={require("../assets/images/profile-placeholder.png")}
            style={styles.profileImage}
          />
        </View>

        {/* First Name Input */}
        <View style={styles.inputContainer}>
          <FontAwesome name="user" size={20} color="#1B263B" />
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>

        {/* Last Name Input */}
        <View style={styles.inputContainer}>
          <FontAwesome name="user" size={20} color="#1B263B" />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
          />
        </View>

        {/* Country Dropdown with Label */}
        <View style={styles.labeledInputContainer}>
          <Text style={styles.label}>Country</Text>
          <View style={styles.inputContainer}>
            <Entypo name="globe" size={20} color="#1B263B" />
            <TextInput
              style={styles.input}
              placeholder="Select Country"
              value={country}
              onChangeText={setCountry}
            />
          </View>
        </View>

        {/* Phone Input */}
        <View style={styles.inputContainer}>
          <FontAwesome name="phone" size={20} color="#1B263B" />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#F5F5F5",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1B263B",
    textAlign: "center",
  },
  contentContainer: {
    flexGrow: 1,
    padding: 20,
  },
  profileImageContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#D9D9D9",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#D9D9D9",
    paddingVertical: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
    color: "#1B263B",
  },
  labeledInputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "#415A77",
    marginBottom: 5,
  },
  saveButton: {
    backgroundColor: "#1B263B",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 40,
  },
  saveButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default CreateNewContact;
