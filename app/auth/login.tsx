import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useRouter } from 'expo-router';


export default function LoginScreen() {
  const router = useRouter();
//   const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} style={{ borderWidth: 1, marginBottom: 20 }} />
      <Text>Password:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry style={{ borderWidth: 1, marginBottom: 20 }} />
      {/* <Button title="Login" onPress={() => login(email, password)} /> */}
      <Button title="Sign Up" onPress={() => router.push('/auth/signup')} />
      <Button title="Forgot Password" onPress={() => router.push('/auth/forget-password')} />
      <Button title="onboarding" onPress={() => router.push('/onboarding/page1')} />

    </View>
  );
}
