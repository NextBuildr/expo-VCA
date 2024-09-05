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
import { FontAwesome, Entypo } from "@expo/vector-icons";
import NavigationTab from "../components/navigation-tab";

const contact = () => {
  const [activeTab, setActiveTab] = useState("contact"); // Default active tab

  const handleTabPress = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Contacts</Text>
          <Entypo name="dots-three-vertical" size={24} color="#415A77" />
        </View>

        <View style={styles.searchSection}>
          <View style={styles.searchInputContainer}>
            <FontAwesome
              name="search"
              size={20}
              color="#1B263B"
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#1B263B"
              style={styles.searchInput}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <FontAwesome name="sliders" size={24} color="#1B263B" />
          </TouchableOpacity>
        </View>

        {/* Add New Section */}
        <TouchableOpacity style={styles.addNewSection}>
          <View style={styles.addButton}>
            <FontAwesome name="plus" size={16} color="#FFF" />
          </View>
          <Text style={styles.addNewText}>Add New</Text>
        </TouchableOpacity>

        {/* Contact Card */}
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://via.placeholder.com/50", // Placeholder for profile picture
            }}
            style={styles.profileImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.name}>Aloye</Text>
            <Text style={styles.phoneNumber}>+234 567 564 765</Text>
          </View>
        </View>

        {/* Border Line */}
        <View style={styles.borderLine} />
      </ScrollView>
      {/* Bottom Navigation */}
      <NavigationTab activeTab={activeTab} handleTabPress={handleTabPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  contentContainer: {
    paddingBottom: 80,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 20,
    marginTop: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1B263B",
    lineHeight: 36,
  },
  addNewSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  addButton: {
    backgroundColor: "#778DA980",
    padding: 10,
    borderRadius: 50,
    marginRight: 10,
  },
  addNewText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#1B263B",
    lineHeight: 30,
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 30,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#D9D9D980",
    flex: 1,
    paddingHorizontal: 10,
    borderRadius: 5,

    marginRight: 5,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: "#1B263B",
    fontSize: 16,
  },
  filterButton: {
    backgroundColor: "#D9D9D980",
    padding: 15,
    borderRadius: 5,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginBottom: 15,
    elevation: 2, // Adds shadow for Android
    shadowColor: "#000", // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  cardContent: {
    flexDirection: "column",
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#415A77",
  },
  phoneNumber: {
    fontSize: 14,
    color: "#778DA9",
    marginTop: 4,
  },
  borderLine: {
    height: 1,
    backgroundColor: "#D9D9D9",
  },
});

export default contact;
