import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons,AntDesign, Entypo } from '@expo/vector-icons';
import { useRouter } from "expo-router";

const EditProfile = ({}) => {
  const navigation = useNavigation();

  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
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

         {/* Light Mode */}
      <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemContent}>
          <MaterialIcons name="wb-sunny" size={24} color="#1B263B" />
          <Text style={styles.listItemText}>Light Mode</Text>
        </View>
        <Entypo name="chevron-right" size={24} color="#778DA9" />
      </TouchableOpacity>

      {/* Verify Account */}
      <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemContent}>
          <MaterialIcons name="verified-user" size={24} color="#1B263B" />
          <Text style={styles.listItemText}>Verify Account</Text>
        </View>
        <Entypo name="chevron-right" size={24} color="#778DA9" />
      </TouchableOpacity>

      {/* About Us */}
      <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemContent}>
          <MaterialIcons name="info-outline" size={24} color="#1B263B" />
          <Text style={styles.listItemText}>About Us</Text>
        </View>
        <Entypo name="chevron-right" size={24} color="#778DA9" />
      </TouchableOpacity>

      {/* Delete Account */}
      <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemContent}>
          <MaterialIcons name="delete-outline" size={24} color="#B22222" />
          <Text style={[styles.listItemText, styles.deleteText]}>Delete Account</Text>
        </View>
        <Entypo name="chevron-right" size={24} color="#778DA9" />
      </TouchableOpacity>

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
              Are you sure you want to log out?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleLogout}
              >
                <Text style={styles.logoutButtonText}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
    color: '#B22222', // Red color for Delete Account text
  },
});

export default EditProfile;
