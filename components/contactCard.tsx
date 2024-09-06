import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ContactCard = ({ name, phoneNumber, profileImage, isSelected, onExpand }) => {
  return (
    <View style={[styles.cardContainer, isSelected && styles.selectedCard]}>
      <TouchableOpacity onPress={onExpand}>
        <View style={styles.card}>
          {/* Expanded Section: Profile Image and Icons */}
          <View
            style={[
              styles.expandedContainer,
              isSelected && styles.expandedBackground,
            ]}
          >
            <Image
              source={profileImage}
              style={[
                styles.profileImage,
                isSelected && styles.expandedImage,
              ]}
            />

            {isSelected && (
              <View style={styles.iconsContainer}>
                <TouchableOpacity style={styles.iconButton}>
                  <FontAwesome name="phone" size={18} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                  <FontAwesome name="video-camera" size={18} color="white" />
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/* Contact Info */}
          <View style={[styles.cardContent, isSelected && { marginLeft: 10 }]}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.phoneNumber}>{phoneNumber}</Text>
          </View>
        </View>
      </TouchableOpacity>

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
  expandedContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  expandedBackground: {
    backgroundColor: "#778DA980", // Expanded background color covering profile and icons
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 15,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  expandedImage: {
    width: 60,
    height: 60,
  },
  selectedCard: {
    backgroundColor: "#B0E0E6", // Selected card background color
  },
  iconsContainer: {
    flexDirection: "row",
    marginLeft: 10,
  },
  iconButton: {
    backgroundColor: "#1B263B",
    padding: 8,
    borderRadius: 20,
    marginLeft: 8,
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
