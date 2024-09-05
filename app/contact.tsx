import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import NavigationTab from "../components/navigation-tab"


const contact = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>

      </ScrollView>
        {/* Bottom Navigation */}
        <NavigationTab activeTab={activeTab} handleTabPress={handleTabPress} />
    </View>
  )
}

export default contact