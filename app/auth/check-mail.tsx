import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { useRouter } from "expo-router";


export default function ConfirmationPage() {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
        <AntDesign name="arrowleft" size={24} color="#1B263B" />
      </TouchableOpacity>

      <View style={styles.contentContainer}>
        <Image source={require('../assets/confirmation.png')} style={styles.image} />

        <Text style={styles.headerText}>Confirmation Required</Text>
        <Text style={styles.descriptionText}>
          Please confirm your email address by clicking the link we sent you.
        </Text>

        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Check Out</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.skipText}>Skip, I'll confirm later</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.bottomText}>
        Did not receive email? Check your spam or try another email address.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  backArrow: {
    marginTop: 30,
    alignSelf: 'flex-start',
  },
  contentContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1B263B',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#778DA9',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  checkoutButton: {
    backgroundColor: '#415A77',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  skipText: {
    color: '#778DA9',
    fontSize: 14,
    marginBottom: 20,
  },
  bottomText: {
    color: '#778DA9',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
});
