import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const callCard = ({ name, timeAgo, profileImage, isCallIncoming }) => {
  return (
    <View style={styles.recentCallsCard}>
      <View style={styles.leftCard}>
        <Image
          source={profileImage} // Replace with dynamic image source
          style={styles.profilePicture}
        />
        <View style={styles.callInfo}>
          <Text style={styles.nameText}>{name}</Text>
          <View style={styles.timeInfo}>
            <FontAwesome
              name={isCallIncoming ? "arrow-down" : "arrow-up"}
              size={14}
              color={isCallIncoming ? "red" : "green"}
            />
            <Text style={styles.tiimeText}>{timeAgo}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.rightCard}>
        <FontAwesome name="video-camera" size={24} color="#415A77" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
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
    marginBottom: 20,
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
    // backgroundColor: "#FFFFFF",
    // borderRadius: 10,
  },
});
export default callCard;
