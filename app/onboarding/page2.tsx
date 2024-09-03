import React from "react";
import {View, Text, Image, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function OnboardingPage1() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Simple and Efficient Contact Management</Text>
      <Image
        source={require("../../assets/images/on2.png")}
        style={styles.image}
      />
      <Text style={styles.description}>
      Manage contacts effortlessly with our intuitive interface for quick
      access and seamless organization.
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Next"
          onPress={() => router.push('/onboarding/page3')}
        />
        <Button
          title="Skip"
          onPress={() => router.replace('/auth/login')}
          color="#ccc"
        />
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  headText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
});
