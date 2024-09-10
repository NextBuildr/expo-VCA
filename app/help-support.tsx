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
import { MaterialIcons, AntDesign, Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const SettingsScreen = ({}) => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const handleLogout = () => {
    // Perform logout logic here
    setModalVisible(false);
    // Navigate to the login screen or perform other actions
  };

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
          <Text style={styles.headerText}>Change password</Text>
        </View>

        <Text style={styles.heeaderText}>Create New Password</Text>
        <Text style={styles.descriptionText}>
          Need assistance with SmartVideo? Our team is here to help you with any
          questions or issues—reach out for quick support!
        </Text>
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
  heeaderText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#415A77",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: "#415A77",
    marginBottom: 50,
  },
});

export default SettingsScreen;
