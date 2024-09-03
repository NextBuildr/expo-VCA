import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function OnboardingPage3() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Onboarding Page 3</Text>
      <Button title="Finish" onPress={() => router.replace('/auth/login')} />
    </View>
  );
}
