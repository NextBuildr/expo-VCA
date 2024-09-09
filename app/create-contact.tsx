import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const createContact = ({}) => {
  const navigation = useNavigation();

  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.replace("/profile")}
            style={styles.arrowButton}
          >
            <AntDesign name="arrowleft" size={24} color="#1B263B" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Create New Contact</Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <AntDesign
              name="user"
              size={20}
              color="#1B263B"
              style={styles.icon}
            />
            <TextInput
              placeholder="First name"
              placeholderTextColor="#1B263BE5"
              style={styles.inputWithIcon}
            />
          </View>

          <View style={styles.inputWrapper}>
            <View style={styles.emptyIcon} />
            <TextInput
              placeholder="Last name"
              placeholderTextColor="#1B263BE5"
              style={styles.inputWithIcon}
            />
          </View>
          <View style={styles.inputWrapperFlex}>
            <View style={styles.inputWrapper}>
              <AntDesign
                name="phone"
                size={20}
                color="#1B263B"
                style={styles.icon}
              />
              <View style={styles.inputInnerWrapper}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                  placeholder="First name"
                  placeholderTextColor="#1B263BE5"
                  style={styles.inputWithIcon}
                />
              </View>
            </View>

            <View style={styles.inputWrapper}>
              <AntDesign
                name="user"
                size={20}
                color="#1B263B"
                style={styles.icon}
              />
              <TextInput
                placeholder="Phone"
                placeholderTextColor="#1B263BE5"
                style={styles.inputWithIcon}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.formSubmitButton}
          onPress={() => router.replace("/profile")}
        >
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
  },
  arrowButton: {},
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 80,
    marginTop: 50,
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "#415A77",
    lineHeight: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
  label: {
    fontSize: 15,
    fontWeight: "400",
    // marginBottom: 5,
    lineHeight: 27,
    color: "#1B263B",
  },
  emptyIcon: {
    width: 30, // This should match the icon size for alignment
  },
  inputWithIcon: {
    flex: 1,
    height: 44,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#1B263B",
    paddingBottom: 5,
    width: "100%",
  },
  inputWrapperFlex: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },

  inputInnerWrapper: {
    flexDirection: "column",
  },

  formSubmitButton: {
    backgroundColor: "#415a77",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 80,
    marginBottom: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
  },
});

export default createContact;
