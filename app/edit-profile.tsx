import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";


const EditProfile = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");

  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="#415A77" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Edit Profile</Text>
      </View>
      
      <View style={styles.profileSection}>
        <View style={styles.profilePictureContainer}>
          <Image
            source={require("../assets/images/Ellipse 37.png")}
            style={styles.profilePicture}
          />
          <TouchableOpacity style={styles.cameraIcon}>
            <FontAwesome name="camera" size={18} color="#FFF" />
          </TouchableOpacity>
        </View>
        <Text style={styles.nameText}>John Doe</Text>
        <Text style={styles.usernameText}>@johndoe</Text>
      </View>
      
      <View style={styles.separator} />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          value={fullName}
          onChangeText={setFullName}
        />

        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        <View style={styles.flexContainer}>
          <View style={styles.flexItem}>
            <Text style={styles.label}>Birthday</Text>
            <TextInput
              style={styles.input}
              placeholder="MM/DD/YYYY"
              value={birthday}
              onChangeText={setBirthday}
            />
          </View>
          <View style={styles.flexItem}>
            <Text style={styles.label}>Gender</Text>
            <TextInput
              style={styles.input}
              placeholder="Select Gender"
              value={gender}
              onChangeText={setGender}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    color: "#415A77",
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  profilePictureContainer: {
    position: "relative",
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#415A77",
    borderRadius: 12,
    padding: 4,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
    color: "#1B263B",
  },
  usernameText: {
    fontSize: 16,
    color: "#778DA9",
  },
  separator: {
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: 2,
    marginVertical: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "#415A77",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  flexContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flexItem: {
    flex: 1,
    marginRight: 10,
  },
});

export default EditProfile;
