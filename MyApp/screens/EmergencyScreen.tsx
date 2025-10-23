import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default function EmergencyScreen({ navigation }: any) {
  const [activeTab, setActiveTab] = useState("all");

  const emergencyContacts = [
    {
      id: "1",
      name: "Police Emergency",
      number: "119",
      icon: "shield",
      color: "#3B82F6",
    },
    {
      id: "2",
      name: "Ambulance",
      number: "1990",
      icon: "activity",
      color: "#EF4444",
    },
    {
      id: "3",
      name: "Fire & Rescue",
      number: "110",
      icon: "alert-circle",
      color: "#F97316",
    },
    {
      id: "4",
      name: "Tourist Police",
      number: "1912",
      icon: "help-circle",
      color: "#10B981",
    },
  ];

  const nearbyLocations = [
    {
      id: "1",
      name: "Colombo General Hospital",
      distance: "2.3 km",
      address: "Regent Street, Colombo 8",
      type: "hospital",
      icon: "activity",
    },
    {
      id: "2",
      name: "Fort Police Station",
      distance: "1.8 km",
      address: "Bristol Street, Colombo 1",
      type: "police",
      icon: "shield",
    },
    {
      id: "3",
      name: "Asiri Surgical Hospital",
      distance: "3.5 km",
      address: "21 Kirimandala Mawatha",
      type: "hospital",
      icon: "activity",
    },
    {
      id: "4",
      name: "Kollupitiya Police Station",
      distance: "2.1 km",
      address: "Dharmapala Mawatha, Colombo 3",
      type: "police",
      icon: "shield",
    },
  ];

  const filteredLocations =
    activeTab === "all"
      ? nearbyLocations
      : nearbyLocations.filter((loc) => loc.type === activeTab);

  const handleCall = (number: string) => {
    Linking.openURL(`tel:${number}`);
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
        <TouchableOpacity
          className="items-center justify-center w-10 h-10 rounded-full bg-gray-50"
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={20} color="#0A1128" />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-[#0A1128]">
          Emergency Support
        </Text>
        <View className="w-10" />
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Alert Banner */}
        <View className="p-4 mx-6 mt-6 border border-red-100 bg-red-50 rounded-2xl">
          <View className="flex-row items-center">
            <View className="items-center justify-center w-12 h-12 mr-3 bg-red-100 rounded-full">
              <Feather name="alert-circle" size={24} color="#EF4444" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-bold text-[#0A1128]">
                24/7 Emergency Support
              </Text>
              <Text className="mt-1 text-sm text-gray-600">
                Help is available anytime you need it
              </Text>
            </View>
          </View>
        </View>

        {/* Emergency Hotlines */}
        <View className="px-6 mt-8">
          <Text className="text-xl font-bold text-[#0A1128] mb-4">
            Emergency Hotlines
          </Text>

          <View className="flex-row flex-wrap justify-between">
            {emergencyContacts.map((contact) => (
              <TouchableOpacity
                key={contact.id}
                className="w-[48%] mb-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100"
                onPress={() => handleCall(contact.number)}
                activeOpacity={0.7}
              >
                <View
                  className="items-center justify-center mb-3 w-14 h-14 rounded-2xl"
                  style={{ backgroundColor: contact.color + "20" }}
                >
                  <Feather
                    name={contact.icon as any}
                    size={28}
                    color={contact.color}
                  />
                </View>
                <Text className="text-base font-bold text-[#0A1128] mb-1">
                  {contact.name}
                </Text>
                <View className="flex-row items-center bg-[#FFD700]/10 px-3 py-1.5 rounded-full self-start">
                  <Feather name="phone" size={12} color="#FFD700" />
                  <Text className="ml-1.5 text-sm font-bold text-[#FFD700]">
                    {contact.number}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Nearby Emergency Services */}
        <View className="px-6 mt-8">
          <Text className="text-xl font-bold text-[#0A1128] mb-4">
            Nearby Emergency Services
          </Text>

          {/* Tab Filters */}
          <View className="flex-row p-1 mb-4 bg-gray-50 rounded-2xl">
            <TouchableOpacity
              className={`flex-1 py-3 rounded-xl ${
                activeTab === "all" ? "bg-[#FFD700]" : "bg-transparent"
              }`}
              onPress={() => setActiveTab("all")}
            >
              <Text
                className={`text-center text-sm font-semibold ${
                  activeTab === "all" ? "text-[#0A1128]" : "text-gray-500"
                }`}
              >
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`flex-1 py-3 rounded-xl ${
                activeTab === "hospital" ? "bg-[#FFD700]" : "bg-transparent"
              }`}
              onPress={() => setActiveTab("hospital")}
            >
              <Text
                className={`text-center text-sm font-semibold ${
                  activeTab === "hospital" ? "text-[#0A1128]" : "text-gray-500"
                }`}
              >
                Hospitals
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`flex-1 py-3 rounded-xl ${
                activeTab === "police" ? "bg-[#FFD700]" : "bg-transparent"
              }`}
              onPress={() => setActiveTab("police")}
            >
              <Text
                className={`text-center text-sm font-semibold ${
                  activeTab === "police" ? "text-[#0A1128]" : "text-gray-500"
                }`}
              >
                Police
              </Text>
            </TouchableOpacity>
          </View>

          {/* Locations List */}
          <View className="space-y-3">
            {filteredLocations.map((location) => (
              <View
                key={location.id}
                className="p-4 bg-white border border-gray-100 shadow-sm rounded-2xl"
              >
                <View className="flex-row items-center">
                  <View
                    className={`items-center justify-center w-12 h-12 rounded-2xl mr-3 ${
                      location.type === "hospital" ? "bg-red-50" : "bg-blue-50"
                    }`}
                  >
                    <Feather
                      name={location.icon as any}
                      size={24}
                      color={
                        location.type === "hospital" ? "#EF4444" : "#3B82F6"
                      }
                    />
                  </View>

                  <View className="flex-1">
                    <Text className="text-base font-bold text-[#0A1128] mb-1">
                      {location.name}
                    </Text>
                    <Text className="mb-1 text-sm text-gray-500">
                      {location.address}
                    </Text>
                    <View className="flex-row items-center">
                      <Feather name="navigation" size={12} color="#FFD700" />
                      <Text className="ml-1 text-xs font-semibold text-[#FFD700]">
                        {location.distance} away
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity className="items-center justify-center w-10 h-10 rounded-full bg-[#FFD700]/10">
                    <Feather name="map-pin" size={20} color="#FFD700" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Safety Tips */}
        <View className="px-6 mt-8 mb-8">
          <Text className="text-xl font-bold text-[#0A1128] mb-4">
            Safety Tips
          </Text>

          <View className="p-5 bg-white border border-gray-100 shadow-sm rounded-2xl">
            {[
              "Always keep emergency numbers saved in your phone",
              "Share your location with trusted contacts when traveling",
              "Keep important documents and copies in a secure place",
            ].map((tip, index) => (
              <View
                key={index}
                className={`flex-row py-3 ${
                  index !== 2 ? "border-b border-gray-100" : ""
                }`}
              >
                <View className="items-center justify-center w-7 h-7 rounded-full bg-[#FFD700] mr-3">
                  <Text className="text-sm font-bold text-[#0A1128]">
                    {index + 1}
                  </Text>
                </View>
                <Text className="flex-1 pt-1 text-sm leading-5 text-gray-600">
                  {tip}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
