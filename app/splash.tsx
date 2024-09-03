import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    // Navigate to onboarding after a 2-second delay
    const timeout = setTimeout(() => {
      router.replace('/onboarding/page1');
    }, 2000);

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      {/* Replace with your logo */}
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.text}>Welcome to the App</Text>
    </View>
  );
}

