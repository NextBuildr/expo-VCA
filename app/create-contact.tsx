import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function CreateContactPage() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create New Contact</Text>
      </View>

      {/* Profile Image */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Placeholder image
          style={styles.profileImage}
        />
      </View>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        {/* First Name */}
        <View style={styles.inputWrapper}>
          <AntDesign name="user" size={20} color="#1B263B" style={styles.icon} />
          <TextInput
            placeholder="First Name"
            style={styles.inputWithIcon}
          />
        </View>

        {/* Last Name */}
        <View style={styles.inputWrapper}>
          <View style={styles.emptyIcon} /> {/* Empty space for icon alignment */}
          <TextInput
            placeholder="Last Name"
            style={styles.inputWithIcon}
          />
        </View>

        {/* Country with Label */}
        <Text style={styles.label}>Country</Text> {/* Label wrapped in <Text> */}
        <View style={styles.inputWrapper}>
          <AntDesign name="phone" size={20} color="#1B263B" style={styles.icon} />
          <TextInput
            placeholder="Country"
            style={styles.inputWithIcon}
          />
        </View>

        {/* Phone */}
        <View style={styles.inputWrapper}>
          <View style={styles.emptyIcon} /> {/* Empty space for icon alignment */}
          <TextInput
            placeholder="Phone"
            style={styles.inputWithIcon}
          />
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#ccc',
  },
  inputContainer: {
    width: '100%',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#1B263B',
    paddingBottom: 5,
  },
  icon: {
    marginRight: 10,
  },
  emptyIcon: {
    width: 30, // This should match the icon size for alignment
  },
  inputWithIcon: {
    flex: 1,
    fontSize: 16,
  },
  label: {
    fontSize: 14,
    color: '#1B263B',
    marginBottom: 5,
  },
  saveButton: {
    marginTop: 'auto',
    backgroundColor: '#1B263B',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
