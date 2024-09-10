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

const SettingsScreen = ({}) => {
  const navigation = useNavigation();
  const router = useRouter();

  const [isPushEnabled, setIsPushEnabled] = useState(false);
  const [isSMSEnabled, setIsSMSEnabled] = useState(false);
  const [isEmailEnabled, setIsEmailEnabled] = useState(false);

  const toggleSwitch = (type) => {
    if (type === "push") setIsPushEnabled((prevState) => !prevState);
    if (type === "sms") setIsSMSEnabled((prevState) => !prevState);
    if (type === "email") setIsEmailEnabled((prevState) => !prevState);
  };

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
          <Text style={styles.headerText}>Notification Settings</Text>
        </View>
       
        </TouchableOpacity>
      </ScrollView>
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
    marginBottom: 80,
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
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 5,
    color: "#1B263B",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    width: "100%",
    borderBottomColor: "#D9D9D9",
    // borderBottomWidth: 1,
  },
  listItemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  listItemText: {
    marginLeft: 10,
    fontSize: 18,
    color: "#1B263B",
    fontWeight: "400",
  },
  deleteText: {
    color: "#B22222", // Red color for Delete Account text
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
    borderWidth: 1, // Defines the thickness of the border (1px)
    borderColor: "#D9D9D9", // Sets the border color
    borderRadius: 25,
    padding: 15,
    marginBottom: 10, // Space between buttons
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

export default SettingsScreen;
