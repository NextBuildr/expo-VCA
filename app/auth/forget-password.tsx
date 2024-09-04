import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For back arrow icon

export default function ForgotPasswordScreen() {
  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Header Text */}
      <Text style={styles.header}>Forgot Password?</Text>

      {/* Sub Text */}
      <Text style={styles.subText}>
        Enter your email address to receive a link to reset your password.
      </Text>

      {/* Input with Label */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="PeachAlda@gmail.com"
          placeholderTextColor="#1B263BE5"
        />
      </View>

      {/* Link to Try Another Way */}
      <TouchableOpacity>
        <Text style={styles.link}>Try another way</Text>
      </TouchableOpacity>

      {/* Send Button */}
      <TouchableOpacity style={styles.formSubmitButton}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  backButton: {
    marginTop: 50,
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1B263B",
    lineHeight: 30,
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: "#1B263BE5",
    fontWeight: "400",
    marginBottom: 60,
    lineHeight: 27,
  },
  inputGroup: {
    marginBottom: 60,
  },
  label: {
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 5,
    color: "#1B263B",
  },
  input: {
    height: 44,
    padding: 12,
    fontSize: 14,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  link: {
    fontSize: 16,
    color: "#1E90FF",
    marginBottom: 80,
    textAlign: "center",
    fontWeight: "400",
    textDecorationLine: "underline",
  },

  formSubmitButton: {
    backgroundColor: "#415a77",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
  },
  sendButton: {
    padding: 12,
    backgroundColor: "#415a77",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  sendButtonText: {
    fontSize: 15,
    color: "#fff",
  },
});
