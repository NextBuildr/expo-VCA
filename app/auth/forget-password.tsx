import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For back arrow icon

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
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Enter your email" 
          placeholderTextColor="#1B263BE5"
        />
      </View>

      {/* Link to Try Another Way */}
      <TouchableOpacity>
        <Text style={styles.link}>Try another way</Text>
      </TouchableOpacity>

      {/* Send Button */}
      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  backButton: {
    marginTop: 10,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: '#000',
  },
  link: {
    fontSize: 16,
    color: '#1E90FF',
    marginTop: 15,
    textAlign: 'center',
  },
  sendButton: {
    backgroundColor: '#1E90FF',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 30,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
