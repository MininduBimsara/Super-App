import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default function TransportationScreen({ navigation }: any) {
  const [selectedTab, setSelectedTab] = useState("rideshare");

  const rideshareOptions = [
    {
      id: "1",
      name: "PickMe",
      icon: "car",
      description: "Local ride-hailing service",
      rating: "4.5",
      color: "#FF6B00",
    },
    {
      id: "2",
      name: "Uber",
      icon: "car-side",
      description: "International ride service",
      rating: "4.6",
      color: "#000000",
    },
    {
      id: "3",
      name: "PickMe Taxi",
      icon: "taxi",
      description: "Metered taxi service",
      rating: "4.4",
      color: "#FFB800",
    },
  ];

  const trainRoutes = [
    {
      id: "1",
      from: "Colombo Fort",
      to: "Kandy",
      departure: "05:55 AM",
      arrival: "09:45 AM",
      duration: "3h 50m",
      price: "LKR 300",
      type: "Express",
    },
    {
      id: "2",
      from: "Colombo Fort",
      to: "Galle",
      departure: "06:00 AM",
      arrival: "08:30 AM",
      duration: "2h 30m",
      price: "LKR 180",
      type: "Intercity",
    },
    {
      id: "3",
      from: "Colombo Fort",
      to: "Ella",
      departure: "08:30 AM",
      arrival: "04:15 PM",
      duration: "7h 45m",
      price: "LKR 450",
      type: "Scenic",
    },
  ];

  const busRoutes = [
    {
      id: "1",
      route: "138",
      from: "Pettah",
      to: "Kaduwela",
      frequency: "10-15 min",
      fare: "LKR 35-50",
    },
    {
      id: "2",
      route: "177",
      from: "Colombo",
      to: "Negombo",
      frequency: "15-20 min",
      fare: "LKR 80-120",
    },
    {
      id: "3",
      route: "245",
      from: "Colombo",
      to: "Kandy",
      frequency: "30 min",
      fare: "LKR 200-300",
    },
  ];

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
        <Text className="text-xl font-bold text-[#0A1128]">Transportation</Text>
        <View className="w-10" />
      </View>

      {/* Tab Selector */}
      <View className="flex-row px-6 py-4 space-x-2">
        <TouchableOpacity
          className={`flex-1 py-3 rounded-xl ${
            selectedTab === "rideshare" ? "bg-[#FFD700]" : "bg-gray-50"
          }`}
          onPress={() => setSelectedTab("rideshare")}
        >
          <View className="flex-row items-center justify-center">
            <MaterialCommunityIcons
              name="car"
              size={18}
              color={selectedTab === "rideshare" ? "#0A1128" : "#6B7280"}
            />
            <Text
              className={`ml-2 text-sm font-semibold ${
                selectedTab === "rideshare" ? "text-[#0A1128]" : "text-gray-500"
              }`}
            >
              Rides
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          className={`flex-1 py-3 rounded-xl ${
            selectedTab === "train" ? "bg-[#FFD700]" : "bg-gray-50"
          }`}
          onPress={() => setSelectedTab("train")}
        >
          <View className="flex-row items-center justify-center">
            <MaterialCommunityIcons
              name="train"
              size={18}
              color={selectedTab === "train" ? "#0A1128" : "#6B7280"}
            />
            <Text
              className={`ml-2 text-sm font-semibold ${
                selectedTab === "train" ? "text-[#0A1128]" : "text-gray-500"
              }`}
            >
              Trains
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          className={`flex-1 py-3 rounded-xl ${
            selectedTab === "bus" ? "bg-[#FFD700]" : "bg-gray-50"
          }`}
          onPress={() => setSelectedTab("bus")}
        >
          <View className="flex-row items-center justify-center">
            <MaterialCommunityIcons
              name="bus"
              size={18}
              color={selectedTab === "bus" ? "#0A1128" : "#6B7280"}
            />
            <Text
              className={`ml-2 text-sm font-semibold ${
                selectedTab === "bus" ? "text-[#0A1128]" : "text-gray-500"
              }`}
            >
              Buses
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-6" showsVerticalScrollIndicator={false}>
        {/* Rideshare Tab */}
        {selectedTab === "rideshare" && (
          <View className="pb-8">
            <View className="p-4 mb-6 border border-blue-100 bg-blue-50 rounded-2xl">
              <View className="flex-row items-center">
                <Feather name="info" size={20} color="#3B82F6" />
                <Text className="flex-1 ml-3 text-sm text-gray-600">
                  Connect with popular ride services for convenient travel
                </Text>
              </View>
            </View>

            {rideshareOptions.map((service) => (
              <TouchableOpacity
                key={service.id}
                className="p-4 mb-4 bg-white border border-gray-100 shadow-sm rounded-2xl"
                activeOpacity={0.7}
              >
                <View className="flex-row items-center">
                  <View
                    className="items-center justify-center mr-4 w-14 h-14 rounded-2xl"
                    style={{ backgroundColor: service.color + "20" }}
                  >
                    <MaterialCommunityIcons
                      name={service.icon as any}
                      size={28}
                      color={service.color}
                    />
                  </View>

                  <View className="flex-1">
                    <Text className="text-lg font-bold text-[#0A1128] mb-1">
                      {service.name}
                    </Text>
                    <Text className="mb-2 text-sm text-gray-500">
                      {service.description}
                    </Text>
                    <View className="flex-row items-center">
                      <Feather name="star" size={14} color="#FFD700" />
                      <Text className="ml-1 text-sm font-semibold text-[#FFD700]">
                        {service.rating}
                      </Text>
                    </View>
                  </View>

                  <Feather name="chevron-right" size={24} color="#FFD700" />
                </View>
              </TouchableOpacity>
            ))}

            {/* Tips */}
            <View className="p-5 mt-4 border bg-amber-50 rounded-2xl border-amber-100">
              <Text className="text-base font-bold text-[#0A1128] mb-3">
                💡 Travel Tips
              </Text>
              {[
                "Always verify driver details before entering the vehicle",
                "Share your trip details with family or friends",
                "Carry small change for toll fees if applicable",
              ].map((tip, index) => (
                <View key={index} className="flex-row mb-2">
                  <Text className="text-[#FFD700] mr-2">•</Text>
                  <Text className="flex-1 text-sm text-gray-600">{tip}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Train Tab */}
        {selectedTab === "train" && (
          <View className="pb-8">
            <View className="p-4 mb-6 border border-blue-100 bg-blue-50 rounded-2xl">
              <View className="flex-row items-center">
                <Feather name="info" size={20} color="#3B82F6" />
                <Text className="flex-1 ml-3 text-sm text-gray-600">
                  Scenic train routes through Sri Lanka's beautiful landscapes
                </Text>
              </View>
            </View>

            {trainRoutes.map((route) => (
              <View
                key={route.id}
                className="p-4 mb-4 bg-white border border-gray-100 shadow-sm rounded-2xl"
              >
                <View className="flex-row items-center justify-between mb-3">
                  <View className="px-3 py-1.5 bg-[#FFD700]/20 rounded-full">
                    <Text className="text-xs font-bold text-[#FFD700]">
                      {route.type}
                    </Text>
                  </View>
                  <Text className="text-lg font-bold text-[#FFD700]">
                    {route.price}
                  </Text>
                </View>

                <View className="space-y-2">
                  <View className="flex-row items-center">
                    <View className="w-3 h-3 mr-3 bg-blue-500 rounded-full" />
                    <View>
                      <Text className="text-base font-bold text-[#0A1128]">
                        {route.from}
                      </Text>
                      <Text className="text-sm text-gray-500">
                        {route.departure}
                      </Text>
                    </View>
                  </View>

                  <View className="ml-1.5 border-l-2 border-gray-200 h-8 pl-4">
                    <Text className="text-xs font-semibold text-[#FFD700]">
                      {route.duration}
                    </Text>
                  </View>

                  <View className="flex-row items-center">
                    <View className="w-3 h-3 mr-3 bg-green-500 rounded-full" />
                    <View>
                      <Text className="text-base font-bold text-[#0A1128]">
                        {route.to}
                      </Text>
                      <Text className="text-sm text-gray-500">
                        {route.arrival}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}

            {/* Tips */}
            <View className="p-5 mt-4 border bg-amber-50 rounded-2xl border-amber-100">
              <Text className="text-base font-bold text-[#0A1128] mb-3">
                🚂 Train Travel Tips
              </Text>
              {[
                "Book tickets in advance for popular routes",
                "Arrive 30 minutes early at the station",
                "Window seats offer the best views",
              ].map((tip, index) => (
                <View key={index} className="flex-row mb-2">
                  <Text className="text-[#FFD700] mr-2">•</Text>
                  <Text className="flex-1 text-sm text-gray-600">{tip}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Bus Tab */}
        {selectedTab === "bus" && (
          <View className="pb-8">
            <View className="p-4 mb-6 border border-blue-100 bg-blue-50 rounded-2xl">
              <View className="flex-row items-center">
                <Feather name="info" size={20} color="#3B82F6" />
                <Text className="flex-1 ml-3 text-sm text-gray-600">
                  Affordable public bus services connecting major destinations
                </Text>
              </View>
            </View>

            {busRoutes.map((route) => (
              <View
                key={route.id}
                className="p-4 mb-4 bg-white border border-gray-100 shadow-sm rounded-2xl"
              >
                <View className="flex-row items-center">
                  <View className="items-center justify-center w-14 h-14 rounded-2xl bg-[#FFD700] mr-4">
                    <Text className="text-2xl font-black text-[#0A1128]">
                      {route.route}
                    </Text>
                  </View>

                  <View className="flex-1">
                    <View className="flex-row items-center mb-2">
                      <Text className="text-base font-bold text-[#0A1128]">
                        {route.from}
                      </Text>
                      <Feather
                        name="arrow-right"
                        size={16}
                        color="#6B7280"
                        style={{ marginHorizontal: 8 }}
                      />
                      <Text className="text-base font-bold text-[#0A1128]">
                        {route.to}
                      </Text>
                    </View>

                    <View className="flex-row items-center space-x-4">
                      <View className="flex-row items-center">
                        <Feather name="clock" size={12} color="#FFD700" />
                        <Text className="ml-1 text-xs text-gray-500">
                          Every {route.frequency}
                        </Text>
                      </View>
                      <View className="flex-row items-center">
                        <Feather name="dollar-sign" size={12} color="#FFD700" />
                        <Text className="ml-1 text-xs text-gray-500">
                          {route.fare}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            ))}

            {/* Tips */}
            <View className="p-5 mt-4 border bg-amber-50 rounded-2xl border-amber-100">
              <Text className="text-base font-bold text-[#0A1128] mb-3">
                🚌 Bus Travel Tips
              </Text>
              {[
                "Carry exact change for fare payment",
                "Express buses are faster and more comfortable",
                "Avoid peak hours (7-9 AM, 5-7 PM) if possible",
              ].map((tip, index) => (
                <View key={index} className="flex-row mb-2">
                  <Text className="text-[#FFD700] mr-2">•</Text>
                  <Text className="flex-1 text-sm text-gray-600">{tip}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
