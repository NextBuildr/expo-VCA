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
import RecentCallsCard from "../components/callCard";

const contact = () => {
  const [activeTab, setActiveTab] = useState("call");

  const recentCallsData = [
    {
      name: "John Doe",
      timeAgo: "25 mins ago",
      isCallIncoming: false,
      isVideoCall: false,
      profileImage: require("../assets/images/Ellipse 37.png"),
    },
    {
      name: "Jane Smith",
      timeAgo: "1 hour ago",
      isCallIncoming: true,
      isVideoCall: true,
      profileImage: require("../assets/images/Ellipse 37.png"),
    },
    {
      name: "Aloye",
      timeAgo: "2 hours ago",
      isVideoCall: true,
      isCallIncoming: false,
      profileImage: require("../assets/images/Ellipse 37.png"),
    },
    {
      name: "Aloye",
      timeAgo: "2 hours ago",
      isCallIncoming: false,
      profileImage: require("../assets/images/Ellipse 37.png"),
    },
    {
      name: "Aloye",
      timeAgo: "2 hours ago",
      isCallIncoming: false,
      isVideoCall: false,

      profileImage: require("../assets/images/Ellipse 37.png"),
    },
    {
      name: "Aloye",
      timeAgo: "2 hours ago",
      isVideoCall: false,
      isCallIncoming: false,
      profileImage: require("../assets/images/Ellipse 37.png"),
    },
    {
      name: "Aloye",
      timeAgo: "2 hours ago",
      isCallIncoming: false,
      isVideoCall: false,
      profileImage: require("../assets/images/Ellipse 37.png"),
    },
    // Add more entries as needed
  ];

  const handleTabPress = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Call logs</Text>
          <Entypo name="dots-three-vertical" size={24} color="#415A77" />
        </View>

        {/* Recent Calls Card */}

        {recentCallsData.map((call, index) => (
          <RecentCallsCard
            key={index}
            name={call.name}
            timeAgo={call.timeAgo}
            isCallIncoming={call.isCallIncoming}
            profileImage={call.profileImage}
          />
        ))}
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
    // padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 50,
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1B263B",
    lineHeight: 36,
  },
});

export default contact;
