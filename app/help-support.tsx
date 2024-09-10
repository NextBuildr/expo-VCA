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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Accordion from "../components/accordion";

const SettingsScreen = ({}) => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const handleLogout = () => {
    // Perform logout logic here
    setModalVisible(false);
    // Navigate to the login screen or perform other actions
  };
  const accordionData = [
    {
      title: "How do I start a video call?",
      content:
        "Select a contact from your list and click the video call icon to initiate the call immediately.",
    },
    {
      title: "Can I use the app on multiple devices?",
      content:
        "Select a contact from your list and click the video call icon to initiate the call immediately.",
    },
    {
      title: "How do I start a video call?",
      content:
        "Select a contact from your list and click the video call icon to initiate the call immediately.",
    },
    {
      title: "Can I use the app on multiple devices?",
      content:
        "Select a contact from your list and click the video call icon to initiate the call immediately.",
    },
    {
      title: "Can I use the app on multiple devices?",
      content:
        "Select a contact from your list and click the video call icon to initiate the call immediately.",
    },
    {
      title: "Can I use the app on multiple devices?",
      content:
        "Select a contact from your list and click the video call icon to initiate the call immediately.",
    },
  ];

  const router = useRouter();

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
          <Text style={styles.headerText}>Help & Support</Text>
        </View>

        <Text style={styles.heeaderText}>
          We're Here to Help with Anything at Onbrela
        </Text>
        <Text style={styles.descriptionText}>
          Need assistance with SmartVideo? Our team is here to help you with any
          questions or issues—reach out for quick support!
        </Text>

        <View style={styles.searchSection}>
          <View style={styles.searchInputContainer}>
            <FontAwesome
              name="search"
              size={20}
              color="#1B263B"
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#1B263B"
              style={styles.searchInput}
            />
          </View>
        </View>

        <Text style={styles.faqheadtext}>FAQ'S</Text>

        <View style={styles.accordionwrap}>
          {accordionData.map((item, index) => (
            <Accordion key={index} title={item.title}>
              <Text>{item.content}</Text>
            </Accordion>
          ))}
        </View>

        <TouchableOpacity
          style={styles.formSubmitButton}
          onPress={() => router.replace("auth/reset-success")}
        >
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'flex-end', 
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
    fontWeight: "500",
    color: "#292D32",
    lineHeight: 30,
  },
  heeaderText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1B263B",
    marginBottom: 10,
  },
  faqheadtext: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1B263B",
    lineHeight: 36,
    marginTop: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: "#1B263BE5",
    marginBottom: 10,
    lineHeight: 26,
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#D9D9D980",
    flex: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: "#1B263B",
    fontSize: 16,
  },
});

export default SettingsScreen;
