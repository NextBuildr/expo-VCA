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
        <TouchableOpacity onPress={toggleExpand}>
          <Image
            source={profileImage}
            style={isExpanded ? styles.expandedImage : styles.profileImage}
          />
        </TouchableOpacity>
        {!isExpanded && (
          <View style={styles.cardContent}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.phoneNumber}>{phoneNumber}</Text>
          </View>
        )}
      </View>

      {isExpanded && (
        <View style={styles.expandedContent}>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome name="phone" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <FontAwesome name="video-camera" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      )}

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
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  selectedCard: {
    backgroundColor: "#B0E0E6", // Selected card background color
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
  expandedContent: {
    alignItems: "center",
    marginBottom: 20,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  iconButton: {
    backgroundColor: "#1B263B",
    padding: 15,
    borderRadius: 50,
  },
  borderLine: {
    height: 1,
    backgroundColor: "#D9D9D9",
  },
});

export default ContactCard;
