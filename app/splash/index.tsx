import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    // Navigate to onboarding after a 2-second delay
    const timeout = setTimeout(() => {
      router.replace('/onboarding/page2');
    }, 5000);

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      {/* Replace with your logo */}
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
   
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
