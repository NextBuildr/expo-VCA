// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   TextInput,
// } from "react-native";
// import { FontAwesome } from "@expo/vector-icons";

// const HomePage = () => {
//   const [activeTab, setActiveTab] = useState("home"); // Default active tab

//   const handleTabPress = (tab: React.SetStateAction<string>) => {
//     setActiveTab(tab);
//   };

//   return (
//     <View style={styles.container}>
//       {/* First Section */}
//       <View style={styles.headerSection}>
//         <View style={styles.headerSectionInn}>
//           <View style={styles.headerSectionInner}>
//             <Text style={styles.headerText}>Onbrela</Text>
//             <Text style={styles.subText}>Hi, Janet</Text>
//           </View>

//           <View style={styles.profileSection}>
//             <Image
//               source={require("../assets/images/Ellipse 37.png")}
//               style={styles.profilePicture}
//             />
//           </View>
//         </View>
//         <View style={styles.searchSection}>
//           <View style={styles.searchInputContainer}>
//             <FontAwesome
//               name="search"
//               size={20}
//               color="#1B263B"
//               style={styles.searchIcon}
//             />
//             <TextInput
//               placeholder="Search"
//               placeholderTextColor="#1B263B"
//               style={styles.searchInput}
//             />
//           </View>
//           <TouchableOpacity style={styles.filterButton}>
//             <FontAwesome name="sliders" size={24} color="#1B263B" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       <View style={styles.wrapper}>
//       <View style={styles.cardContainer}>
//         {/* Smaller card positioned absolutely */}
//         <View style={styles.smallCard}>
//           <Text style={styles.smallCardText}>27 Aug</Text>
//         </View>

//         {/* Main card content */}
//         <Text style={styles.cardTitle}>Designing Name Video Calling App</Text>
        
//         <View style={styles.cardInfo}>
//           <View style={styles.timeContainer}>
//             <FontAwesome name="clock-o" size={16} color="white" />
//             <Text style={styles.timeText}>10:30AM - 11:30AM</Text>
//           </View>
//           <FontAwesome name="ellipsis-h" size={24} color="white" />
//         </View>
//       </View>
//     </View>
//       {/* Bottom Navigation */}
//       <View style={styles.navigationTab}>
//         <TouchableOpacity
//           style={[styles.navItem, activeTab === "home" && styles.activeTab]}
//           onPress={() => handleTabPress("home")}
//         >
//           <View style={styles.navContent}>
//             <FontAwesome
//               name="home"
//               size={24}
//               color={activeTab === "home" ? "#FFF" : "#415A77"}
//             />
//             {activeTab === "home" && <Text style={styles.navText}>Home</Text>}
//           </View>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.navItem, activeTab === "contact" && styles.activeTab]}
//           onPress={() => handleTabPress("contact")}
//         >
//           <View style={styles.navContent}>
//             <FontAwesome
//               name="address-book"
//               size={24}
//               color={activeTab === "contact" ? "#FFF" : "#415A77"}
//             />
//             {activeTab === "contact" && (
//               <Text style={styles.navText}>Contact</Text>
//             )}
//           </View>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.navItem, activeTab === "schedule" && styles.activeTab]}
//           onPress={() => handleTabPress("schedule")}
//         >
//           <View style={styles.navContent}>
//             <FontAwesome
//               name="calendar"
//               size={24}
//               color={activeTab === "schedule" ? "#FFF" : "#415A77"}
//             />
//             {activeTab === "schedule" && (
//               <Text style={styles.navText}>Schedule</Text>
//             )}
//           </View>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.navItem, activeTab === "call" && styles.activeTab]}
//           onPress={() => handleTabPress("call")}
//         >
//           <View style={styles.navContent}>
//             <FontAwesome
//               name="phone"
//               size={24}
//               color={activeTab === "call" ? "#FFF" : "#415A77"}
//             />
//             {activeTab === "call" && <Text style={styles.navText}>Call</Text>}
//           </View>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={[styles.navItem, activeTab === "profile" && styles.activeTab]}
//           onPress={() => handleTabPress("profile")}
//         >
//           <View style={styles.navContent}>
//             <FontAwesome
//               name="user"
//               size={24}
//               color={activeTab === "profile" ? "#FFF" : "#415A77"}
//             />
//             {activeTab === "profile" && (
//               <Text style={styles.navText}>Profile</Text>
//             )}
//           </View>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "space-between",
//   },
//   headerSection: {
//     backgroundColor: "#0D1B2A",
//     padding: 20,
//   },
//   headerSectionInn: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   headerText: {
//     fontSize: 32,
//     fontWeight: "700",
//     color: "#fff",
//     lineHeight: 48,
//   },
//   subText: {
//     fontSize: 20,
//     fontWeight: "400",
//     color: "#fff",
//     lineHeight: 30,
//   },
//   profileSection: {
//     marginTop: 60,
//   },
//   headerSectionInner: {
//     marginTop: 60,
//   },
//   profilePicture: {},
//   searchSection: {
//     flexDirection: "row",
//     alignItems: "center",

//     borderRadius: 8,
//     marginTop: 30,
//   },
//   searchInputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 15,
//     backgroundColor: "#FFFFFF",
//     flex: 1,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: "#1B263B",
//     marginRight: 5,
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     color: "#1B263B",
//     fontSize: 16,
//   },
//   filterButton: {
//     backgroundColor: "#fff",
//     padding: 15,
//     borderRadius: 5,
//   },
//   wrapper: {
//     // paddingHorizontal: 20, 
        
//   },
//   cardContainer: {
//     backgroundColor: '#415A77',
//     padding: 20,
//     borderRadius: 10,
//     // position: 'relative', 
//     alignSelf: 'flex-start', 
//   },
//   smallCard: {
//     backgroundColor: '#0D1B2A',
//     paddingVertical: 5,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//     position: 'absolute',
//     top: -10, // Adjust to desired height above the card
//     left: 20, // Center it horizontally by adjusting left
//   },
//   smallCardText: {
//     color: 'white',
//     fontSize: 12,
//   },
//   cardTitle: {
//     color: 'white',
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   cardInfo: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   timeContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   timeText: {
//     color: 'white',
//     fontSize: 14,
//     marginLeft: 8,
//   },
//   navigationTab: {
//     flexDirection: "row",
//     backgroundColor: "#F5F5F5",
//     paddingVertical: 10,
//     justifyContent: "space-around",
//     borderWidth: 1,
//     borderColor: "#415A77",
//     borderRadius: 30,
//     marginHorizontal: 10,
//     marginBottom: 20,
//   },
//   navItem: {
//     alignItems: "center",
//     paddingVertical: 5,
//     paddingHorizontal: 10,
//   },
//   activeTab: {
//     backgroundColor: "#415A77",
//     borderRadius: 30,
//   },
//   navContent: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   navText: {
//     color: "white",
//     marginLeft: 5,
//   },
// });

// export default HomePage;
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("home"); // Default active tab

  const handleTabPress = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      {/* First Section */}
      <View style={styles.headerSection}>
        <View style={styles.headerSectionInn}>
          <View style={styles.headerSectionInner}>
            <Text style={styles.headerText}>Onbrela</Text>
            <Text style={styles.subText}>Hi, Janet</Text>
          </View>

          <View style={styles.profileSection}>
            <Image
              source={require("../assets/images/Ellipse 37.png")}
              style={styles.profilePicture}
            />
          </View>
        </View>
        <View style={styles.searchSection}>
          <View style={styles.searchInputContainer}>
            <FontAwesome
              name="search"
              size={20}
              color="#1B263B"
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Search"
              placeholderTextColor="#1B263B"
              style={styles.searchInput}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <FontAwesome name="sliders" size={24} color="#1B263B" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Card Section */}
      <View style={styles.cardWrapper}>
        <View style={styles.cardContainer}>
          {/* Smaller card positioned absolutely */}
          <View style={styles.smallCard}>
            <Text style={styles.smallCardText}>27 Aug</Text>
          </View>

          {/* Main card content */}
          <Text style={styles.cardTitle}>Designing Name Video Calling App</Text>

          <View style={styles.cardInfo}>
            <View style={styles.timeContainer}>
              <FontAwesome name="clock-o" size={16} color="white" />
              <Text style={styles.timeText}>10:30AM - 11:30AM</Text>
            </View>
            <FontAwesome name="ellipsis-h" size={24} color="white" />
          </View>
        </View>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.navigationTab}>
        <TouchableOpacity
          style={[styles.navItem, activeTab === "home" && styles.activeTab]}
          onPress={() => handleTabPress("home")}
        >
          <View style={styles.navContent}>
            <FontAwesome
              name="home"
              size={24}
              color={activeTab === "home" ? "#FFF" : "#415A77"}
            />
            {activeTab === "home" && <Text style={styles.navText}>Home</Text>}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, activeTab === "contact" && styles.activeTab]}
          onPress={() => handleTabPress("contact")}
        >
          <View style={styles.navContent}>
            <FontAwesome
              name="address-book"
              size={24}
              color={activeTab === "contact" ? "#FFF" : "#415A77"}
            />
            {activeTab === "contact" && (
              <Text style={styles.navText}>Contact</Text>
            )}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, activeTab === "schedule" && styles.activeTab]}
          onPress={() => handleTabPress("schedule")}
        >
          <View style={styles.navContent}>
            <FontAwesome
              name="calendar"
              size={24}
              color={activeTab === "schedule" ? "#FFF" : "#415A77"}
            />
            {activeTab === "schedule" && (
              <Text style={styles.navText}>Schedule</Text>
            )}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, activeTab === "call" && styles.activeTab]}
          onPress={() => handleTabPress("call")}
        >
          <View style={styles.navContent}>
            <FontAwesome
              name="phone"
              size={24}
              color={activeTab === "call" ? "#FFF" : "#415A77"}
            />
            {activeTab === "call" && <Text style={styles.navText}>Call</Text>}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, activeTab === "profile" && styles.activeTab]}
          onPress={() => handleTabPress("profile")}
        >
          <View style={styles.navContent}>
            <FontAwesome
              name="user"
              size={24}
              color={activeTab === "profile" ? "#FFF" : "#415A77"}
            />
            {activeTab === "profile" && (
              <Text style={styles.navText}>Profile</Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  headerSection: {
    backgroundColor: "#0D1B2A",
    padding: 20,
  },
  headerSectionInn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
    lineHeight: 48,
  },
  subText: {
    fontSize: 20,
    fontWeight: "400",
    color: "#fff",
    lineHeight: 30,
  },
  profileSection: {
    marginTop: 60,
  },
  headerSectionInner: {
    marginTop: 60,
  },
  profilePicture: {},
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 30,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#FFFFFF",
    flex: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#1B263B",
    marginRight: 5,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: "#1B263B",
    fontSize: 16,
  },
  filterButton: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 5,
  },
  cardWrapper: {
    marginHorizontal: 20, 
    marginTop: 20, 
  },
  cardContainer: {
    backgroundColor: '#415A77',
    padding: 20,
    borderRadius: 10,
    position: 'relative',
  },
  smallCard: {
    backgroundColor: '#0D1B2A',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    position: 'absolute',
    top: -10,
    left: 20,
  },
  smallCardText: {
    color: 'white',
    fontSize: 12,
  },
  cardTitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 8,
  },
  navigationTab: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    paddingVertical: 10,
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "#415A77",
    borderRadius: 30,
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
  },
  navItem: {
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  activeTab: {
    backgroundColor: "#415A77",
    borderRadius: 30,
  },
  navContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  navText: {
    color: "white",
    marginLeft: 5,
  },
});

export default HomePage;
