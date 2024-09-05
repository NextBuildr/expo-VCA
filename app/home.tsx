import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("home"); // Default active tab

  const handleTabPress = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      {/* First Section */}
      <View style={styles.headerSection}>
        <View style={styles.headerSectionInn}>
          <View style={styles.headerSectionInner}>
            <Text style={styles.headerText}>Onbrela</Text>
            <Text style={styles.subText}>Hi, Jane</Text>
          </View>

          <View style={styles.profileSection}>
            <Image
              source={require("../assets/images/Ellipse 37.png")}
              style={styles.profilePicture}
            />
          </View>
        </View>
        <View style={styles.searchSection}>
          <TextInput placeholder="Search" style={styles.searchInput} />
          <TouchableOpacity style={styles.filterButton}>
            <FontAwesome name="filter" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      {/* Bottom Navigation */}
      <View style={styles.navigationTab}>
        <TouchableOpacity
          style={[styles.navItem, activeTab === "home" && styles.activeTab]}
          onPress={() => handleTabPress("home")}
        >
          <View style={styles.navContent}>
            <FontAwesome
              name="home"
              size={24}
              color={activeTab === "home" ? "#FFF" : "#415A77"}
            />
            {activeTab === "home" && <Text style={styles.navText}>Home</Text>}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, activeTab === "contact" && styles.activeTab]}
          onPress={() => handleTabPress("contact")}
        >
          <View style={styles.navContent}>
            <FontAwesome
              name="address-book"
              size={24}
              color={activeTab === "contact" ? "#FFF" : "#415A77"}
            />
            {activeTab === "contact" && (
              <Text style={styles.navText}>Contact</Text>
            )}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, activeTab === "schedule" && styles.activeTab]}
          onPress={() => handleTabPress("schedule")}
        >
          <View style={styles.navContent}>
            <FontAwesome
              name="calendar"
              size={24}
              color={activeTab === "schedule" ? "#FFF" : "#415A77"}
            />
            {activeTab === "schedule" && (
              <Text style={styles.navText}>Schedule</Text>
            )}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, activeTab === "call" && styles.activeTab]}
          onPress={() => handleTabPress("call")}
        >
          <View style={styles.navContent}>
            <FontAwesome
              name="phone"
              size={24}
              color={activeTab === "call" ? "#FFF" : "#415A77"}
            />
            {activeTab === "call" && <Text style={styles.navText}>Call</Text>}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, activeTab === "profile" && styles.activeTab]}
          onPress={() => handleTabPress("profile")}
        >
          <View style={styles.navContent}>
            <FontAwesome
              name="user"
              size={24}
              color={activeTab === "profile" ? "#FFF" : "#415A77"}
            />
            {activeTab === "profile" && (
              <Text style={styles.navText}>Profile</Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  headerSection: {
    backgroundColor: "#0D1B2A",
    padding: 20,
    
  },
  headerSectionInn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
    lineHeight: 48,
  },
  subText: {
    fontSize: 20,
    fontWeight: "400",
    color: "#fff",
    lineHeight: 30,
  },
  profileSection: {
    marginTop: 60,
  },
  headerSectionInner: {
    marginTop: 60,
  },

  profilePicture: {},
  searchSection: {
    flexDirection: "row",
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  filterButton: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 10,
  },
  navigationTab: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    paddingVertical: 10,
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "#415A77",
    borderRadius: 30,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  navItem: {
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  activeTab: {
    backgroundColor: "#415A77",
    borderRadius: 30,
  },
  navContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  navText: {
    color: "white",
    marginLeft: 5,
  },
});

export default HomePage;
