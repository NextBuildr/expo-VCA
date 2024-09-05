import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome, MaterialIcons, Entypo } from "@expo/vector-icons";
import NavigationTab from "../components/navigation-tab";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");
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

      {/* Settings List */}
      {/* <View style={styles.settingsList}> */}
      <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemContent}>
          <FontAwesome name="cog" size={24} color="#1B263B" />
          <Text style={styles.listItemText}>Settings</Text>
        </View>
        <Entypo name="chevron-right" size={24} color="#778DA9" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemContent}>
          <MaterialIcons name="notifications" size={24} color="#1B263B" />
          <Text style={styles.listItemText}>Notification</Text>
        </View>
        <Entypo name="chevron-right" size={24} color="#778DA9" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemContent}>
          <FontAwesome name="lock" size={24} color="#1B263B" />
          <Text style={styles.listItemText}>Change Password</Text>
        </View>
        <Entypo name="chevron-right" size={24} color="#778DA9" />
      </TouchableOpacity>
      <View style={styles.horizontalLine} />

      <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemContent}>
          <MaterialIcons name="help-outline" size={24} color="#1B263B" />
          <Text style={styles.listItemText}>Help & Support</Text>
        </View>
        <Entypo name="chevron-right" size={24} color="#778DA9" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemContent}>
          <FontAwesome name="sign-out" size={24} color="#1B263B" />
          <Text style={styles.listItemText}>Log Out</Text>
        </View>
        <Entypo name="chevron-right" size={24} color="#778DA9" />
      </TouchableOpacity>
      {/* </View> */}
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
    fontSize: 20,
    fontWeight: "700",
    color: "#1B263B",
    marginBottom: 5,
    lineHeight: 30,
  },
  username: {
    fontSize: 16,
    color: "#1B263BE5",
    marginBottom: 20,
    fontWeight: 400,
    lineHeight: 27,
  },
  horizontalLine: {
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#D9D9D9",
    marginVertical: 20,
  },

  icon: {
    marginRight: 10,
  },

  formSubmitButton: {
    flexDirection: "row",
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
  settingsList: {
    marginTop: 10,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    width: "100%",
    borderBottomColor: "#D9D9D9",
    // borderBottomWidth: 1,
  },
  listItemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  listItemText: {
    marginLeft: 10,
    fontSize: 18,
    color: "#1B263B",
    fontWeight: "400",
  },
});

export default ProfilePage;
