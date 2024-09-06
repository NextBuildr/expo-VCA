import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ContactCard = ({ name, phoneNumber, profileImage, isSelected }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={[styles.cardContainer, isSelected && styles.selectedCard]}>
      <View style={styles.card}>
        {/* Profile Image and Icons */}
        <TouchableOpacity onPress={toggleExpand}>
          <Image
            source={profileImage}
            style={[
              styles.profileImage,
              isExpanded && styles.expandedImage,
            ]}
          />
        </TouchableOpacity>

        {isExpanded && (
          <View style={styles.expandedContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome name="phone" size={18} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome name="video-camera" size={18} color="white" />
            </TouchableOpacity>
          </View>
        )}

        {/* Contact Info */}
        <View
          style={[
            styles.cardContent,
            isExpanded && { marginLeft: 10 }, // Apply margin when expanded
          ]}
        >
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.phoneNumber}>{phoneNumber}</Text>
        </View>
      </View>

      <View style={styles.borderLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  expandedImage: {
    width: 60,
    height: 60,
  },
  selectedCard: {
    backgroundColor: "#B0E0E6", // Selected card background color
  },
  expandedContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#778DA980",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10,
  },
  iconButton: {
    backgroundColor: "#1B263B",
    padding: 8,
    borderRadius: 20,
  },
  cardContent: {
    flex: 1,
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

export default ContactCard;
