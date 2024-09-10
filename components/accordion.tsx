import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutAnimation, UIManager, Platform } from 'react-native';
import { Entypo } from '@expo/vector-icons'; // Importing arrow icons

// Enable LayoutAnimation for Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); // Smooth animation
    setIsOpen((prevState) => !prevState);
  };

  return (
    <View style={styles.accordionContainer}>
      <TouchableOpacity style={styles.accordionHeader} onPress={toggleAccordion}>
        <Text style={styles.accordionTitle}>{title}</Text>
        <Entypo
          name={isOpen ? 'chevron-up' : 'chevron-down'}
          size={24}
          color="#1B263B"
        />
      </TouchableOpacity>

      {isOpen && <View style={styles.accordionContent}>{children}</View>}
    </View>
  );
};



export default Accordion;
