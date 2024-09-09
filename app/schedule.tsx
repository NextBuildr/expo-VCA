import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";

const SchedulePage1 = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const navigation = useNavigation();

  const upcomingCalls = [
    { id: "1", title: "Team Sync", date: "2024-09-10", time: "2:00 PM" },
    { id: "2", title: "Client Meeting", date: "2024-09-12", time: "11:00 AM" },
    // Add more upcoming calls here
  ];

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    // navigation.navigate("SchedulePage2", { selectedDate: day.dateString });
  };

  const renderCallCard = ({ item }) => (
    <View style={styles.callCard}>
      <Text style={styles.callTitle}>{item.title}</Text>
      <Text style={styles.callDetails}>{`${item.date} at ${item.time}`}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDate]: { selected: true, marked: true, selectedColor: "#415A77" },
        }}
      />

      <Text style={styles.upcomingHeader}>Upcoming Calls</Text>
      <FlatList
        data={upcomingCalls}
        renderItem={renderCallCard}
        keyExtractor={(item) => item.id}
        style={styles.callList}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
  },
  upcomingHeader: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
  },
  callCard: {
    padding: 15,
    backgroundColor: "#F4F4F9",
    borderRadius: 10,
    marginBottom: 15,
  },
  callTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#415A77",
  },
  callDetails: {
    fontSize: 14,
    color: "#1B263B",
    marginTop: 5,
  },
});

export default SchedulePage1;
