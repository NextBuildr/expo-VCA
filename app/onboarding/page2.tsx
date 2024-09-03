import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function OnboardingPage2() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Onboarding Page 2</Text>
      <Button title="Next" onPress={() => router.push('/onboarding/page3')} />
      <Button title="Skip" onPress={() => router.replace('/auth/login')} />
    </View>
  );
}
