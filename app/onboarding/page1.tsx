import React from 'react';
import { View, Text, Button } from 'react-native';
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
