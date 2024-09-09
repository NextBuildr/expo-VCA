import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const EmailVerification = () => {
  const [code, setCode] = useState(["", "", "", ""]);

  const handleInputChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const renderKeypad = () => {
    const keypadNumbers = [
      { number: "1", letters: "" },
      { number: "2", letters: "ABC" },
      { number: "3", letters: "DEF" },
      { number: "4", letters: "GHI" },
      { number: "5", letters: "JKL" },
      { number: "6", letters: "MNO" },
      { number: "7", letters: "PQRS" },
      { number: "8", letters: "TUV" },
      { number: "9", letters: "WXYZ" },
      { number: "0", letters: "" }, // "0" will be centered
    ];

    return keypadNumbers.map((key, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.keypadButton, key.number === "0" && styles.zeroButton]}
      >
        <Text style={styles.keypadNumber}>{key.number}</Text>
        <Text style={styles.keypadLetters}>{key.letters}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backArrow}>
        <AntDesign name="arrowleft" size={24} color="#1B263B" />
      </TouchableOpacity>

      <Text style={styles.headerText}>Verify Email</Text>
      <Text style={styles.descriptionText}>
        A code was sent to +2347******43
      </Text>

      <View style={styles.codeInputContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(value) => handleInputChange(value, index)}
            value={digit}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>

      <View style={styles.keypadContainer}>{renderKeypad()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
  },
  backArrow: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#415A77",
    textAlign: "center",
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: "#415A77",
    textAlign: "center",
    marginBottom: 40,
  },
  codeInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  codeInput: {
    backgroundColor: "#D9D9D980",
    width: 50,
    height: 50,
    textAlign: "center",
    fontSize: 24,
    borderRadius: 5,
  },
  codeInputFocus: {
    outline: "2px solid #1B263B", // Focus outline
  },
  nextButton: {
    backgroundColor: "#415A77",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 40,
  },
  nextButtonText: {
    color: "#FFF",
    fontSize: 18,
  },
  keypadContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center"
  },
  keypadButton: {
    width: "30%",
    paddingVertical: 20,
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#F4F4F9",
    borderRadius: 10,
  },
  keypadNumber: {
    fontSize: 24,
    color: "#1B263B",
  },
  keypadLetters: {
    fontSize: 12,
    color: "#415A77",
  },
  zeroButton: {
    width: "100%", // Center the "0" button
    marginBottom: 0,
  },
});

export default EmailVerification;
