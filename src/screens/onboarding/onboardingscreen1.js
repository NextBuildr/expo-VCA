import React from 'react';
import { View, Text, Button } from 'react-native';

const OnboardingScreen1 = ({ navigation }) => {
  return (
    <View>
      <Text>Onboarding Screen 1</Text>
      <Button title="Next" onPress={() => navigation.navigate('OnboardingScreen2')} />
      <Button title="Skip" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default OnboardingScreen1;