import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ContactCard = ({ name, phoneNumber, profileImage }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Image source={profileImage} style={styles.profileImage} />
        <View style={styles.cardContent}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.phoneNumber}>{phoneNumber}</Text>
        </View>
        {/* Border Line */}
      </View>
      <View style={styles.borderLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
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

export default ContactCard;
