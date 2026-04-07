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
      reviews: "25k",
      color: "#FF6B00",
      badge: "Popular",
    },
    {
      id: "2",
      name: "Uber",
      icon: "car-side",
      description: "International ride service",
      rating: "4.6",
      reviews: "18k",
      color: "#000000",
      badge: "Reliable",
    },
    {
      id: "3",
      name: "PickMe Taxi",
      icon: "taxi",
      description: "Metered taxi service",
      rating: "4.4",
      reviews: "12k",
      color: "#FFB800",
      badge: "Budget",
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
      typeColor: "#10B981",
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
      typeColor: "#3B82F6",
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
      typeColor: "#F59E0B",
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
      type: "Regular",
    },
    {
      id: "2",
      route: "177",
      from: "Colombo",
      to: "Negombo",
      frequency: "15-20 min",
      fare: "LKR 80-120",
      type: "Express",
    },
    {
      id: "3",
      route: "245",
      from: "Colombo",
      to: "Kandy",
      frequency: "30 min",
      fare: "LKR 200-300",
      type: "Long Distance",
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={["top"]}>
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
        <TouchableOpacity className="items-center justify-center w-10 h-10 rounded-full bg-gray-50">
          <Feather name="info" size={20} color="#0A1128" />
        </TouchableOpacity>
      </View>

      {/* Tab Selector */}
      <View className="px-6 py-4 bg-white border-b border-gray-100">
        <View className="flex-row p-1 bg-gray-100 rounded-2xl">
          <TouchableOpacity
            className={`flex-1 py-3 rounded-xl ${
              selectedTab === "rideshare" ? "bg-[#FFD700]" : "bg-transparent"
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
                className={`ml-2 text-sm font-bold ${
                  selectedTab === "rideshare"
                    ? "text-[#0A1128]"
                    : "text-gray-500"
                }`}
              >
                Rides
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            className={`flex-1 py-3 rounded-xl ${
              selectedTab === "train" ? "bg-[#FFD700]" : "bg-transparent"
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
                className={`ml-2 text-sm font-bold ${
                  selectedTab === "train" ? "text-[#0A1128]" : "text-gray-500"
                }`}
              >
                Trains
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            className={`flex-1 py-3 rounded-xl ${
              selectedTab === "bus" ? "bg-[#FFD700]" : "bg-transparent"
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
                className={`ml-2 text-sm font-bold ${
                  selectedTab === "bus" ? "text-[#0A1128]" : "text-gray-500"
                }`}
              >
                Buses
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Rideshare Tab */}
        {selectedTab === "rideshare" && (
          <View className="pb-8">
            {/* Info Banner */}
            <View className="p-4 mx-6 mt-6 border border-blue-100 bg-blue-50 rounded-2xl">
              <View className="flex-row items-center">
                <View className="items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                  <Feather name="info" size={20} color="#3B82F6" />
                </View>
                <Text className="flex-1 ml-3 text-sm leading-5 text-gray-700">
                  Compare prices and choose the best ride option for your
                  journey
                </Text>
              </View>
            </View>

            {/* Rideshare Services */}
            <View className="px-6 mt-6">
              {rideshareOptions.map((service) => (
                <TouchableOpacity
                  key={service.id}
                  className="p-5 mb-4 bg-white shadow-sm rounded-3xl"
                  activeOpacity={0.7}
                >
                  <View className="flex-row items-center mb-4">
                    <View
                      className="items-center justify-center w-16 h-16 mr-4 rounded-2xl"
                      style={{ backgroundColor: service.color + "15" }}
                    >
                      <MaterialCommunityIcons
                        name={service.icon as any}
                        size={32}
                        color={service.color}
                      />
                    </View>

                    <View className="flex-1">
                      <View className="flex-row items-center mb-1">
                        <Text className="text-xl font-bold text-[#0A1128]">
                          {service.name}
                        </Text>
                        <View className="ml-2 px-2.5 py-0.5 bg-[#FFD700] rounded-full">
                          <Text className="text-[10px] font-bold text-[#0A1128]">
                            {service.badge}
                          </Text>
                        </View>
                      </View>
                      <Text className="text-sm text-gray-500">
                        {service.description}
                      </Text>
                    </View>

                    <Feather name="chevron-right" size={24} color="#FFD700" />
                  </View>

                  {/* Rating & Reviews */}
                  <View className="flex-row items-center justify-between pt-4 border-t border-gray-100">
                    <View className="flex-row items-center">
                      <Feather name="star" size={16} color="#FFD700" />
                      <Text className="ml-1.5 text-base font-bold text-[#0A1128]">
                        {service.rating}
                      </Text>
                      <Text className="ml-1 text-sm text-gray-400">
                        ({service.reviews} reviews)
                      </Text>
                    </View>
                    <View className="flex-row items-center">
                      <Feather name="clock" size={14} color="#10B981" />
                      <Text className="ml-1 text-xs font-semibold text-green-600">
                        Available Now
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            {/* Quick Tips */}
            <View className="px-6 mt-4">
              <View className="p-5 border bg-amber-50 rounded-2xl border-amber-100">
                <View className="flex-row items-center mb-3">
                  <MaterialCommunityIcons
                    name="lightbulb-on"
                    size={20}
                    color="#F59E0B"
                  />
                  <Text className="ml-2 text-base font-bold text-[#0A1128]">
                    Travel Tips
                  </Text>
                </View>
                {[
                  "Verify driver details before entering",
                  "Share trip details with contacts",
                  "Keep small change for tolls",
                ].map((tip, index) => (
                  <View key={index} className="flex-row items-start mt-2">
                    <View className="w-1.5 h-1.5 rounded-full bg-[#FFD700] mt-2 mr-2" />
                    <Text className="flex-1 text-sm text-gray-700">{tip}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        )}

        {/* Train Tab */}
        {selectedTab === "train" && (
          <View className="pb-8">
            {/* Info Banner */}
            <View className="p-4 mx-6 mt-6 border border-blue-100 bg-blue-50 rounded-2xl">
              <View className="flex-row items-center">
                <View className="items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                  <MaterialCommunityIcons
                    name="train"
                    size={20}
                    color="#3B82F6"
                  />
                </View>
                <Text className="flex-1 ml-3 text-sm leading-5 text-gray-700">
                  Scenic train journeys through Sri Lanka's beautiful landscapes
                </Text>
              </View>
            </View>

            {/* Train Routes */}
            <View className="px-6 mt-6">
              {trainRoutes.map((route) => (
                <View
                  key={route.id}
                  className="p-5 mb-4 bg-white shadow-sm rounded-3xl"
                >
                  {/* Header */}
                  <View className="flex-row items-center justify-between mb-4">
                    <View
                      className="px-3 py-1.5 rounded-full"
                      style={{ backgroundColor: route.typeColor + "20" }}
                    >
                      <Text
                        className="text-xs font-bold"
                        style={{ color: route.typeColor }}
                      >
                        {route.type}
                      </Text>
                    </View>
                    <Text className="text-2xl font-black text-[#FFD700]">
                      {route.price}
                    </Text>
                  </View>

                  {/* Route Details */}
                  <View className="space-y-3">
                    {/* Departure */}
                    <View className="flex-row items-center">
                      <View className="w-4 h-4 mr-3 bg-blue-500 rounded-full" />
                      <View className="flex-1">
                        <Text className="text-lg font-bold text-[#0A1128]">
                          {route.from}
                        </Text>
                        <Text className="text-sm text-gray-500">
                          Departure: {route.departure}
                        </Text>
                      </View>
                    </View>

                    {/* Duration Line */}
                    <View className="flex-row items-center ml-2">
                      <View className="w-0.5 h-10 bg-gray-200" />
                      <View className="flex-1 ml-8">
                        <View className="flex-row items-center px-3 py-1.5 bg-[#FFD700]/10 rounded-full self-start">
                          <Feather name="clock" size={12} color="#FFD700" />
                          <Text className="ml-1.5 text-xs font-bold text-[#FFD700]">
                            {route.duration}
                          </Text>
                        </View>
                      </View>
                    </View>

                    {/* Arrival */}
                    <View className="flex-row items-center">
                      <View className="w-4 h-4 mr-3 bg-green-500 rounded-full" />
                      <View className="flex-1">
                        <Text className="text-lg font-bold text-[#0A1128]">
                          {route.to}
                        </Text>
                        <Text className="text-sm text-gray-500">
                          Arrival: {route.arrival}
                        </Text>
                      </View>
                    </View>
                  </View>

                  {/* Book Button */}
                  <TouchableOpacity className="flex-row items-center justify-center py-3 mt-4 bg-[#FFD700] rounded-2xl">
                    <Text className="text-base font-bold text-[#0A1128] mr-2">
                      View Schedule
                    </Text>
                    <Feather name="arrow-right" size={18} color="#0A1128" />
                  </TouchableOpacity>
                </View>
              ))}
            </View>

            {/* Tips */}
            <View className="px-6 mt-4">
              <View className="p-5 border bg-amber-50 rounded-2xl border-amber-100">
                <View className="flex-row items-center mb-3">
                  <MaterialCommunityIcons
                    name="lightbulb-on"
                    size={20}
                    color="#F59E0B"
                  />
                  <Text className="ml-2 text-base font-bold text-[#0A1128]">
                    Train Travel Tips
                  </Text>
                </View>
                {[
                  "Book tickets in advance for popular routes",
                  "Arrive 30 minutes before departure",
                  "Window seats offer the best scenic views",
                ].map((tip, index) => (
                  <View key={index} className="flex-row items-start mt-2">
                    <View className="w-1.5 h-1.5 rounded-full bg-[#FFD700] mt-2 mr-2" />
                    <Text className="flex-1 text-sm text-gray-700">{tip}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        )}

        {/* Bus Tab */}
        {selectedTab === "bus" && (
          <View className="pb-8">
            {/* Info Banner */}
            <View className="p-4 mx-6 mt-6 border border-blue-100 bg-blue-50 rounded-2xl">
              <View className="flex-row items-center">
                <View className="items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
                  <MaterialCommunityIcons
                    name="bus"
                    size={20}
                    color="#3B82F6"
                  />
                </View>
                <Text className="flex-1 ml-3 text-sm leading-5 text-gray-700">
                  Affordable public transport connecting major destinations
                </Text>
              </View>
            </View>

            {/* Bus Routes */}
            <View className="px-6 mt-6">
              {busRoutes.map((route) => (
                <View
                  key={route.id}
                  className="flex-row p-5 mb-4 bg-white shadow-sm rounded-3xl"
                >
                  {/* Route Number */}
                  <View className="items-center justify-center mr-4 w-20 h-20 rounded-2xl bg-[#FFD700]">
                    <Text className="text-3xl font-black text-[#0A1128]">
                      {route.route}
                    </Text>
                    <Text className="text-[9px] font-bold text-[#0A1128] mt-0.5">
                      {route.type}
                    </Text>
                  </View>

                  {/* Route Details */}
                  <View className="flex-1">
                    <View className="flex-row items-center mb-2">
                      <Text className="text-lg font-bold text-[#0A1128]">
                        {route.from}
                      </Text>
                      <Feather
                        name="arrow-right"
                        size={16}
                        color="#6B7280"
                        style={{ marginHorizontal: 8 }}
                      />
                      <Text className="text-lg font-bold text-[#0A1128]">
                        {route.to}
                      </Text>
                    </View>

                    <View className="space-y-2">
                      <View className="flex-row items-center">
                        <View className="items-center justify-center w-6 h-6 rounded-full bg-blue-50">
                          <Feather name="clock" size={12} color="#3B82F6" />
                        </View>
                        <Text className="ml-2 text-sm text-gray-600">
                          Every {route.frequency}
                        </Text>
                      </View>

                      <View className="flex-row items-center">
                        <View className="items-center justify-center w-6 h-6 rounded-full bg-green-50">
                          <Feather
                            name="dollar-sign"
                            size={12}
                            color="#10B981"
                          />
                        </View>
                        <Text className="ml-2 text-sm font-semibold text-[#FFD700]">
                          {route.fare}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </View>

            {/* Tips */}
            <View className="px-6 mt-4">
              <View className="p-5 border bg-amber-50 rounded-2xl border-amber-100">
                <View className="flex-row items-center mb-3">
                  <MaterialCommunityIcons
                    name="lightbulb-on"
                    size={20}
                    color="#F59E0B"
                  />
                  <Text className="ml-2 text-base font-bold text-[#0A1128]">
                    Bus Travel Tips
                  </Text>
                </View>
                {[
                  "Carry exact change for fare payment",
                  "Express buses are faster and more comfortable",
                  "Avoid peak hours (7-9 AM, 5-7 PM) when possible",
                ].map((tip, index) => (
                  <View key={index} className="flex-row items-start mt-2">
                    <View className="w-1.5 h-1.5 rounded-full bg-[#FFD700] mt-2 mr-2" />
                    <Text className="flex-1 text-sm text-gray-700">{tip}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
