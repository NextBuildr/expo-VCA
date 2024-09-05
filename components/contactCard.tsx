import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ContactCard = ({ name, phoneNumber, profileImage }) => {
  return (
    <View style={styles.card}>
      <Image source={profileImage} style={styles.profileImage} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.phoneNumber}>{phoneNumber}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    // paddingVertical: 15,
    // backgroundColor: "#FFF",
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    // elevation: 2, // Adds shadow for Android
    // shadowColor: "#000", // Adds shadow for iOS
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
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
});

export default ContactCard;
