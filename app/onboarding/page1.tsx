import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function OnboardingPage1() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Onboarding Page 1</Text>
      <Button title="Next" onPress={() => router.push('/onboarding/page2')} />
      <Button title="Skip" onPress={() => router.replace('/auth/login')} />
        
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

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
