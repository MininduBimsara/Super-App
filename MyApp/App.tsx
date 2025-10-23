import React from "react";
import "./global.css";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import all screens
import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import EmergencyScreen from "./screens/EmergencyScreen";
import TransportationScreen from "./screens/TransportationScreen";
import SupportScreen from "./screens/SupportScreen";
import DestinationsScreen from "./screens/DestinationsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false, // All screens handle their own headers
          animation: "slide_from_right",
        }}
      >
        {/* Onboarding */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />

        {/* Main Dashboard */}
        <Stack.Screen name="Home" component={HomeScreen} />

        {/* Feature Screens */}
        <Stack.Screen name="Emergency" component={EmergencyScreen} />
        <Stack.Screen name="Transportation" component={TransportationScreen} />
        <Stack.Screen name="Support" component={SupportScreen} />
        <Stack.Screen name="Destinations" component={DestinationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
