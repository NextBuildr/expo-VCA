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
import { FontAwesome } from "@expo/vector-icons";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("home"); // Default active tab

  const handleTabPress = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        {/* First Section */}
        <View style={styles.headerSection}>
          <View style={styles.headerSectionInn}>
            <View style={styles.headerSectionInner}>
              <Text style={styles.headerText}>Onbrela</Text>
              <Text style={styles.subText}>Hi, Janet</Text>
            </View>

            <View style={styles.profileSection}>
              <Image
                source={require("../assets/images/Ellipse 37.png")}
                style={styles.profilePicture}
              />
            </View>
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
        </View>

        {/* Card Section */}
        <View style={styles.cardWrapper}>
          <View style={styles.cardContainer}>
            {/* Smaller card positioned absolutely */}
            <View style={styles.smallCard}>
              <Text style={styles.smallCardText}>27 Aug</Text>
            </View>

            {/* Main card content */}
            <Text style={styles.cardTitle}>
              Designing Name Video Calling App
            </Text>

            <View style={styles.cardInfo}>
              <View style={styles.timeContainer}>
                <FontAwesome name="clock-o" size={16} color="white" />
                <Text style={styles.timeText}>10:30AM - 11:30AM</Text>
              </View>
              <FontAwesome name="ellipsis-h" size={24} color="white" />
            </View>
          </View>
        </View>

        <View style={styles.boxContainer}>
          <View style={styles.boxWrapper}>
            <TouchableOpacity style={styles.box}>
              <FontAwesome name="video-camera" size={32} color="#FFF" />
            </TouchableOpacity>
            <Text style={styles.boxText}>Quick Call</Text>
          </View>

          <View style={styles.boxWrapper}>
            <TouchableOpacity style={styles.box}>
              <FontAwesome name="calendar" size={32} color="#FFF" />
            </TouchableOpacity>
            <Text style={styles.boxText}>Schedule</Text>
          </View>

          <View style={styles.boxWrapper}>
            <TouchableOpacity style={styles.box}>
              <View style={styles.plusIconContainer}>
                <FontAwesome name="plus" size={32} color="#0D1B2A" />
              </View>
            </TouchableOpacity>
            <Text style={styles.boxText}>Join</Text>
          </View>
        </View>

        {/* Recent Calls Header */}
        <View style={styles.recentCallsHeader}>
          <Text style={styles.recentCallsText}>Recent Calls</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Calls Card */}
        <View style={styles.recentCallsCard}>
          <View style={styles.leftCard}>
            <Image
              source={require("../assets/images/Ellipse 37.png")}
              style={styles.profilePicture}
            />
            <View style={styles.callInfo}>
              <Text style={styles.nameText}>John Doe</Text>
              <View style={styles.timeInfo}>
                <FontAwesome name="arrow-up" size={14} color="green" />
                <Text style={styles.tiimeText}>25 mins ago</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.rightCard}>
            <FontAwesome name="video-camera" size={24} color="#415A77" />
          </TouchableOpacity>
        </View>

        <View style={styles.recentCallsCard}>
          <View style={styles.leftCard}>
            <Image
              source={require("../assets/images/Ellipse 37.png")}
              style={styles.profilePicture}
            />
            <View style={styles.callInfo}>
              <Text style={styles.nameText}>John Doe</Text>
              <View style={styles.timeInfo}>
                <FontAwesome name="arrow-up" size={14} color="green" />
                <Text style={styles.tiimeText}>25 mins ago</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.rightCard}>
            <FontAwesome name="video-camera" size={24} color="#415A77" />
          </TouchableOpacity>
        </View>

        <View style={styles.recentCallsCard}>
          <View style={styles.leftCard}>
            <Image
              source={require("../assets/images/Ellipse 37.png")}
              style={styles.profilePicture}
            />
            <View style={styles.callInfo}>
              <Text style={styles.nameText}>John Doe</Text>
              <View style={styles.timeInfo}>
                <FontAwesome name="arrow-up" size={14} color="green" />
                <Text style={styles.tiimeText}>25 mins ago</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.rightCard}>
            <FontAwesome name="video-camera" size={24} color="#415A77" />
          </TouchableOpacity>
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
            style={[
              styles.navItem,
              activeTab === "contact" && styles.activeTab,
            ]}
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
            style={[
              styles.navItem,
              activeTab === "schedule" && styles.activeTab,
            ]}
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
            style={[
              styles.navItem,
              activeTab === "profile" && styles.activeTab,
            ]}
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
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
    alignItems: "center",
    borderRadius: 8,
    marginTop: 30,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#FFFFFF",
    flex: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#1B263B",
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
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 5,
  },
  cardWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  cardContainer: {
    backgroundColor: "#415A77",
    padding: 40,
    borderRadius: 10,
    position: "relative",
  },
  smallCard: {
    backgroundColor: "#0D1B2A",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    position: "absolute",
    top: -10,
    left: 20,
  },
  smallCardText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
  cardTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 30,
    marginBottom: 10,
  },
  cardInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeText: {
    color: "white",
    fontSize: 14,
    marginLeft: 8,
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  boxWrapper: {
    alignItems: "center",
  },
  box: {
    backgroundColor: "#0D1B2A",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 80,
  },
  boxText: {
    marginTop: 10,
    color: "#1B263B",
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 27,
    textAlign: "center",
  },
  plusIconContainer: {
    backgroundColor: "#FFF",
    padding: 5,
  },
  recentCallsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  recentCallsText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1B263B",
  },
  viewAllText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#1B263B",
  },
  recentCallsCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#D9D9D980",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  leftCard: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  callInfo: {
    justifyContent: "center",
  },
  nameText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1B263B",
  },
  timeInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  tiimeText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#1B263B",
  },
  rightCard: {
    padding: 10,
    backgroundColor: "#FFFFFF",
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
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
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
