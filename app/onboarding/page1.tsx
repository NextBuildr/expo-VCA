import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

export default function OnboardingPage1() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.headText}>High-Quality Video & Audio</Text>
      <Image
        source={require("../../assets/images/on1.png")}
        style={styles.image}
      />
      <Text style={styles.description}>
        Crystal-clear video and high-quality audio for lifelike, seamless
        conversations every time.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => router.push("/onboarding/page2")}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => router.replace("/auth/login")}
        >
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => router.replace("home")}
        >
          <Text style={styles.skipButtonText}>home</Text>
        </TouchableOpacity>
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
    fontWeight: "700",
    marginBottom: 40,
    lineHeight: 36,
    color: " #1B263B;",
    alignItems: "center"
  },

  nextButton: {
    padding: 12, // Equivalent to 0.75rem
    backgroundColor: "#415a77",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginBottom: 10, // Add margin between buttons
  },
  nextButtonText: {
    fontSize: 15, // Font size 15px
    color: "#fff",
  },
  skipButton: {
    alignItems: "center",
    marginTop: 10,
  },
  skipButtonText: {
    fontSize: 15, // Font size 15px
    color: "#1B263B", // Lighter color for the Skip button text
  },

  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginBottom: 50,
  },
  description: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "400",
    color: "#1B263BE5",
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
});
