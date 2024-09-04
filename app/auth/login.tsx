import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    // Handle login logic here
  };

  return (
    <View style={styles.loginContainer}>
      <View style={styles.formSection}>
        <View style={styles.formHeadText}>
          <Text style={styles.header}>Welcome Back!</Text>
          <Text style={styles.subText}>Login to your account.</Text>
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="PeachAlda@gmail.com"
            value={email}
            placeholderTextColor="#1B263BE5"
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="........"
            secureTextEntry
            value={password}
            placeholderTextColor="#1B263BE5"
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.bottomTextContainer}>
          <View style={styles.rememberTextInner}>
            <TouchableOpacity style={styles.checkboxWrapper}>
              {/* Checkbox would go here */}
            </TouchableOpacity>
            <Text style={styles.rememberText}>Remember me for 30 days</Text>
          </View>
          <TouchableOpacity onPress={() => router.replace("/auth/forget-password")}>
            <Text style={styles.forgetPassword}>Forget password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.formSubmitButton} onPress={login}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
        <View style={styles.divider}>
          <View style={styles.dividerLine}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.dividerLine}></View>
        </View>
        <TouchableOpacity style={styles.googleSignupWrapper}>
          <View style={styles.innerContainer}>
            <Image
              source={require("../../assets/images/Google.png")}
              style={styles.logo}
            />
            <Text style={styles.googleText}>Continue with Google</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.acctTextContainer}>
          <Text style={styles.acctText}>
            Don’t have an Account?
            <TouchableOpacity onPress={() => router.replace("/auth/signup")}>
              <Text style={styles.createAccountText}> Create an account</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 80,
  },
  formSection: {
    width: "100%",
    maxWidth: 400,
    padding: 20,
  },
  formHeadText: {
    textAlign: "center",
    marginBottom: 20,
  },
  header: {
    fontSize: 25,
    fontWeight: "700",
    color: "#1b263b",
    textAlign: "center",
  },
  subText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#1b263b",
    marginBottom: 20,
    textAlign: "center",
    lineHeight: 27,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 5,
    color: "#1B263B",
  },
  input: {
    height: 44,
    padding: 12,
    fontSize: 14,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  rememberTextInner: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxWrapper: {
    marginRight: 10,
  },
  rememberText: {
    fontSize: 13,
    fontWeight: "400",
    color: "#1b263b",
  },
  forgetPassword: {
    fontSize: 13,
    fontWeight: "400",
    color: "#778da9",
  },
  formSubmitButton: {
    backgroundColor: "#415a77",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#778da980",
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#333",
  },
  googleSignupWrapper: {
    borderColor: "#778da980",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginBottom: 40,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleText: {
    fontSize: 15,
    color: "#1b263b",
  },
  acctTextContainer: {
    alignItems: "center",
  },
  acctText: {
    fontSize: 15,
    color: "#1B263B",
  },
  createAccountText: {
    color: "#778DA9",
    fontWeight: "700",
  },
});

export default LoginScreen;
