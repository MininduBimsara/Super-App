import React from "react";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// --- Dummy Data ---
const quickActions = [
  {
    id: "1",
    title: "Book Ride",
    subtitle: "Tuk-Tuk & Taxi",
    icon: "car",
    color: "#FFD700",
    bgColor: "#FFF4CC",
    route: "Transportation", // ✨ Added navigation route
  },
  {
    id: "2",
    title: "Explore",
    subtitle: "Heritage Sites",
    icon: "castle",
    color: "#FF6B6B",
    bgColor: "#FFE5E5",
    route: "Destinations", // ✨ Added navigation route
  },
  {
    id: "3",
    title: "Emergency",
    subtitle: "Quick Help",
    icon: "shield-check",
    color: "#4ECDC4",
    bgColor: "#E0F7F6",
    route: "Emergency", // ✨ Added navigation route
  },
  {
    id: "4",
    title: "Support",
    subtitle: "AI Assistant",
    icon: "robot",
    color: "#A78BFA",
    bgColor: "#F3F0FF",
    route: "Support", // ✨ Added navigation route
  },
];

const heritageSites = [
  {
    id: "1",
    name: "Sigiriya",
    location: "Central Province",
    rating: 4.8,
    image: require("../assets/images/sigiriya.jpg"),
  },
  {
    id: "2",
    name: "Queens Hotel",
    location: "Kandy",
    rating: 4.9,
    image: require("../assets/images/kandy.jpg"),
  },
  {
    id: "3",
    name: "Galle Fort",
    location: "Southern Province",
    rating: 4.7,
    image: require("../assets/images/galle.jpg"),
  },
];

const emergencyServices = [
  { id: "1", name: "Police", number: "119", icon: "shield" },
  { id: "2", name: "Ambulance", number: "1990", icon: "activity" },
  { id: "3", name: "Fire", number: "110", icon: "alert-circle" },
  { id: "4", name: "Tourist Help", number: "1912", icon: "help-circle" },
];

export default function HomeScreen({ navigation }: any) {
  const handleCall = (number: string) => {
    Linking.openURL(`tel:${number}`);
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {/* --- HEADER WITH GRADIENT --- */}
        <View className="relative">
          <ImageBackground
            source={require("../assets/images/ceylon-pattern.jpg")}
            className="h-64"
            resizeMode="cover"
          >
            {/* Navy background overlay */}
            <View className="absolute inset-0 bg-[#0A1128]/80" />

            {/* Header Content */}
            <View className="justify-between flex-1 p-6 pt-12">
              {/* Top Bar */}
              <View className="flex-row items-center justify-between">
                <View>
                  <Text className="text-sm text-[#FFF8DC]">Welcome to</Text>
                  <Text className="text-3xl font-bold text-[#FFD700]">
                    Sri Lanka
                  </Text>
                </View>
                <TouchableOpacity className="items-center justify-center w-12 h-12 rounded-full bg-white/10">
                  <Feather name="user" size={24} color="#FFD700" />
                </TouchableOpacity>
              </View>

              {/* Search Bar */}
              <TouchableOpacity
                className="flex-row items-center p-4 bg-white rounded-2xl"
                
              >
                <Feather name="search" size={20} color="#666" />
                <Text className="flex-1 ml-3 text-base text-gray-400">
                  Search places, hotels, activities...
                </Text>
                <Feather name="sliders" size={20} color="#666" />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        {/* --- QUICK ACTIONS GRID --- */}
        <View className="px-6 pt-10 -mt-8">
          <View className="p-6 bg-white border border-gray-100 shadow-2xl rounded-3xl">
            <Text className="mb-5 text-xl font-bold text-gray-800">
              Quick Actions
            </Text>
            <View className="flex-row flex-wrap justify-between">
              {quickActions.map((action) => (
                <TouchableOpacity
                  key={action.id}
                  className="items-center w-[48%] p-5 mb-4 rounded-2xl border border-gray-100"
                  style={{ backgroundColor: action.bgColor }}
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate(action.route)}
                >
                  <View
                    className="items-center justify-center mb-3 shadow-sm w-14 h-14 rounded-xl"
                    style={{ backgroundColor: action.color }}
                  >
                    <MaterialCommunityIcons
                      name={action.icon as any}
                      size={28}
                      color="#FFFFFF"
                    />
                  </View>
                  <Text className="text-base font-bold text-center text-gray-800">
                    {action.title}
                  </Text>
                  <Text className="mt-1 text-xs text-center text-gray-500">
                    {action.subtitle}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* --- FEATURED DESTINATIONS --- */}
        <View className="mt-8">
          <View className="flex-row items-center justify-between px-6 mb-4">
            <Text className="text-2xl font-bold text-gray-800">
              Top Destinations
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Destinations")}
            >
              <Text className="text-base font-semibold text-[#FFD700]">
                See All
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 24 }}
            className="space-x-4"
          >
            {heritageSites.map((site) => (
              <TouchableOpacity
                key={site.id}
                className="w-64 mr-4 overflow-hidden bg-white shadow-lg rounded-3xl"
                activeOpacity={0.9}
                onPress={() => navigation.navigate("Destinations")}
              >
                <ImageBackground
                  source={site.image}
                  className="h-48"
                  resizeMode="cover"
                >
                  <View
                    className="absolute inset-0 bg-black/60"
                    style={{ opacity: 0.7 }}
                  />

                  {/* Rating Badge */}
                  <View className="absolute flex-row items-center px-3 py-1 m-3 bg-white rounded-full top-2 right-2">
                    <Ionicons name="star" size={14} color="#FFD700" />
                    <Text className="ml-1 text-sm font-bold text-gray-800">
                      {site.rating}
                    </Text>
                  </View>

                  {/* Site Info */}
                  <View className="absolute bottom-0 left-0 right-0 p-4">
                    <Text className="text-xl font-bold text-white">
                      {site.name}
                    </Text>
                    <View className="flex-row items-center mt-1">
                      <Feather name="map-pin" size={14} color="#FFD700" />
                      <Text className="ml-1 text-sm text-white/90">
                        {site.location}
                      </Text>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* --- RIDE BOOKING SECTION --- */}
        <View className="px-6 mt-8">
          <View className="p-6 rounded-3xl bg-[#FFD700]">
            <View className="flex-row items-center justify-between mb-4">
              <View className="flex-1">
                <Text className="text-xl font-bold text-[#0A1128]">
                  Need a Ride?
                </Text>
                <Text className="mt-1 text-sm text-[#0A1128]/80">
                  Book a tuk-tuk or taxi instantly
                </Text>
              </View>
              <View className="items-center justify-center w-16 h-16 rounded-2xl bg-[#0A1128]/10">
                <MaterialCommunityIcons name="car" size={32} color="#0A1128" />
              </View>
            </View>

            <TouchableOpacity
              className="flex-row items-center justify-center py-4 bg-[#0A1128] rounded-2xl"
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Transportation")} // ✨ Navigate to Transportation
            >
              <Text className="text-base font-bold text-[#FFD700]">
                Book with PickMe
              </Text>
              <Feather
                name="arrow-right"
                size={20}
                color="#FFD700"
                style={{ marginLeft: 8 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* --- EMERGENCY CONTACTS --- */}
        <View className="px-6 mt-8 mb-8">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-2xl font-bold text-gray-800">
              Emergency Services
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Emergency")}>
              <Text className="text-base font-semibold text-[#FFD700]">
                View All
              </Text>
            </TouchableOpacity>
          </View>

          <View className="p-5 bg-white shadow-lg rounded-3xl">
            {emergencyServices.map((service, index) => (
              <TouchableOpacity
                key={service.id}
                className={`flex-row items-center justify-between py-4 ${
                  index !== emergencyServices.length - 1
                    ? "border-b border-gray-100"
                    : ""
                }`}
                activeOpacity={0.7}
                onPress={() => handleCall(service.number)}
              >
                <View className="flex-row items-center flex-1">
                  <View className="items-center justify-center w-12 h-12 mr-4 rounded-2xl bg-red-50">
                    <Feather
                      name={service.icon as any}
                      size={24}
                      color="#EF4444"
                    />
                  </View>
                  <View>
                    <Text className="text-base font-bold text-gray-800">
                      {service.name}
                    </Text>
                    <Text className="text-sm text-gray-500">
                      Tap to call {service.number}
                    </Text>
                  </View>
                </View>
                <View className="items-center justify-center w-10 h-10 rounded-full bg-red-50">
                  <Feather name="phone" size={20} color="#EF4444" />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* --- FOOTER --- */}
        <View className="items-center px-6 py-8 border-t border-gray-100">
          <Text className="text-sm text-gray-400">
            © 2025 Discover Sri Lanka
          </Text>
          <Text className="mt-1 text-xs text-gray-400">
            Your trusted travel companion
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
