import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
  Switch,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, AntDesign, Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const SOS = ({}) => {
  const navigation = useNavigation();
  const router = useRouter();
  const boxData = [
    {
      id: 1,
      image: "../assets/images/Ambulance.png",
      text: "Medical Assistance",
    },
    {
      id: 2,
      image: "../assets/images/Fire.png",
      text: "Fire Department",
    },
    {
      id: 3,
      image: "../assets/images/Siren.png",
      text: "Police",
    },
    {
      id: 4,
      image: "../assets/images/FirstAid.png",
      text: "Emergency Services",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.replace("/profile")}
            style={styles.arrowButton}
          >
            <AntDesign name="arrowleft" size={24} color="#1B263B" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Emergency calls</Text>
        </View>

        <View>
          {boxData.map((box) => (
            <View key={box.id} style={styles.box}>
              <Image source={{ uri: box.image }} style={styles.image} />
              <Text style={styles.text}>{box.text}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Logout</Text>
            <Text style={styles.modalText}>
            *** will be dialed by tapping call
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleLogout}
              >
                <Text style={styles.logoutButtonText}>Call</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
  },
  arrowButton: {},
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 50,
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "#415A77",
    lineHeight: 30,
  },
  box: {
    width: 185,
    height: 130,
    backgroundColor: "#778DA933",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20, // Space between boxes
    borderRadius: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent background with blur effect
    backdropFilter: "blur(10px)", // Blurring effect (for web, add equivalent for mobile)
  },
  modalContent: {
    width: "90%",
    maxWidth: 390,
    height: 300,
    backgroundColor: "#0D1B2A",
    borderRadius: 20,
    padding: 20,
    // alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: "#fff",
    // textAlign: "center",
    marginBottom: 30,
  },
  modalButtons: {
    flexDirection: "column", // Arrange buttons in a column
    justifyContent: "space-between",
    width: "100%",
  },
  cancelButton: {
    borderWidth: 1, 
    borderColor: "#D9D9D9", 
    borderRadius: 25,
    padding: 15,
    marginBottom: 10, 
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 15,
  },
  logoutButton: {
    backgroundColor: "#415a77",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 25,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 15,
  },
});

export default SOS;
