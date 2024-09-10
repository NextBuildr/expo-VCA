import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
  Switch,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, AntDesign, Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const SOS = ({}) => {
  const navigation = useNavigation();
  const router = useRouter();
  const boxData = [
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      text: "This is the first box",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/50",
      text: "This is the second box",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/50",
      text: "This is the third box",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/50",
      text: "This is the fourth box",
    },
  ];

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
          <Text style={styles.headerText}>Emergency calls</Text>
        </View>

      
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
    marginBottom: 20,
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
  
 
});

export default SOS;
