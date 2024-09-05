import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import NavigationTab from "../components/navigation-tab";

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState("call");
    const handleTabPress = (tab: React.SetStateAction<string>) => {
        setActiveTab(tab);
      };
  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <Image
        source={require("../assets/images/profilepic.png")} // Replace with your profile image
        style={styles.profilePicture}
      />

      {/* Head Name and Username */}
      <Text style={styles.headName}>John Doe</Text>
      <Text style={styles.username}>@johndoe</Text>

      <TouchableOpacity style={styles.formSubmitButton}>
      <Feather name="edit-2" size={20} color="#FFF" style={styles.icon} />
      <Text style={styles.buttonText}>Edit Profile</Text>
    </TouchableOpacity>
      {/* Horizontal Line */}
      <View style={styles.horizontalLine} />

      {/* List of Options */}
      <View style={styles.optionsContainer}>
        {[
          { label: "Settings", icon: "cog" },
          { label: "Notification", icon: "bell" },
          { label: "Change Password", icon: "lock" },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.optionItem}>
            <Text style={styles.optionText}>{item.label}</Text>
            <FontAwesome name="chevron-right" size={18} color="#415A77" />
          </TouchableOpacity>
        ))}

        {/* Horizontal Line after Change Password */}
        <View style={styles.horizontalLine} />

        {[
          { label: "Help and Support", icon: "question-circle" },
          { label: "Log Out", icon: "sign-out" },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.optionItem}>
            <Text style={styles.optionText}>{item.label}</Text>
            <FontAwesome name="chevron-right" size={18} color="#415A77" />
          </TouchableOpacity>
        ))}
      </View>
      <NavigationTab activeTab={activeTab} handleTabPress={handleTabPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  headName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1B263B",
    marginBottom: 5,
  },
  username: {
    fontSize: 16,
    color: "#415A77",
    marginBottom: 20,
  },
  horizontalLine: {
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#D9D9D9",
    marginVertical: 20,
  },
  optionsContainer: {
    width: "100%",
  },
  icon: {
    marginRight: 10, 
  },
  optionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    // borderBottomWidth: 1,
    // borderBottomColor: "#D9D9D9",
  },
  formSubmitButton: {
    backgroundColor: "#415a77",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
  },
  optionText: {
    fontSize: 18,
    color: "#1B263B",
  },
});

export default ProfilePage;
