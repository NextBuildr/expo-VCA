import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";

const CallCard = ({ name, timeAgo, profileImage, isCallIncoming, isVideoCall, onDelete }) => {
  const [isSwiped, setIsSwiped] = useState(false);

  const renderRightActions = () => (
    <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
      <FontAwesome name="trash" size={24} color="#FFF" />
    </TouchableOpacity>
  );

  const handleSwipe = () => {
    setIsSwiped(true);
  };

  const handleSwipeClose = () => {
    setIsSwiped(false);
  };

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      onSwipeableOpen={handleSwipe}
      onSwipeableClose={handleSwipeClose}
    >
      <View
        style={[
          styles.recentCallsCard,
          isSwiped && styles.swipedCard, // Apply conditional styling
        ]}
      >
        <View style={styles.leftCard}>
          <Image source={profileImage} style={styles.profilePicture} />
          <View style={styles.callInfo}>
            <Text style={styles.nameText}>{name}</Text>
            <View style={styles.timeInfo}>
              <FontAwesome
                name={isCallIncoming ? "arrow-down" : "arrow-up"}
                size={14}
                color={isCallIncoming ? "red" : "green"}
              />
              <Text style={styles.timeText}>{timeAgo}</Text>
            </View>
          </View>
        </View>
        <FontAwesome
          name={isVideoCall ? "video-camera" : "phone"}
          size={20}
          color="#415A77"
        />
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  recentCallsCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#D9D9D980",
    padding: 15,
    borderRadius: 10, // Default borderRadius
    marginHorizontal: 20, // Default marginHorizontal
    marginBottom: 20,
  },
  swipedCard: {
    borderRadius: 0, // Remove borderRadius when swiped
    marginHorizontal: 0, // Remove marginHorizontal when swiped
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
  timeText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#1B263B",
  },
  deleteButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    backgroundColor: "#FF6B6B",
    marginBottom: 20,

    // borderRadius: 10,
    // marginVertical: 10,
  },
});

export default CallCard;
