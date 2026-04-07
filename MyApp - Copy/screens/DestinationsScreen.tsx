import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

interface Destination {
  id: string;
  name: string;
  category: string;
  location: string;
  rating: string;
  reviews: string;
  distance: string;
  icon: string;
  description: string;
}

export default function DestinationsScreen({ navigation }: any) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All", icon: "view-grid" },
    { id: "cultural", name: "Cultural", icon: "temple-buddhist" },
    { id: "nature", name: "Nature", icon: "tree" },
    { id: "beach", name: "Beaches", icon: "waves" },
    { id: "adventure", name: "Adventure", icon: "hiking" },
  ];

  const destinations: Destination[] = [
    {
      id: "1",
      name: "Sigiriya Rock Fortress",
      category: "cultural",
      location: "Matale District",
      rating: "4.8",
      reviews: "12.5k",
      distance: "148 km",
      icon: "🏛️",
      description: "Ancient rock fortress with stunning views",
    },
    {
      id: "2",
      name: "Temple of the Tooth",
      category: "cultural",
      location: "Kandy",
      rating: "4.7",
      reviews: "8.2k",
      distance: "115 km",
      icon: "🛕",
      description: "Sacred Buddhist temple",
    },
    {
      id: "3",
      name: "Yala National Park",
      category: "nature",
      location: "Yala",
      rating: "4.9",
      reviews: "15.3k",
      distance: "265 km",
      icon: "🐘",
      description: "Wildlife safari and leopard spotting",
    },
    {
      id: "4",
      name: "Unawatuna Beach",
      category: "beach",
      location: "Galle",
      rating: "4.6",
      reviews: "6.8k",
      distance: "120 km",
      icon: "🏖️",
      description: "Beautiful crescent-shaped beach",
    },
    {
      id: "5",
      name: "Ella Nine Arch Bridge",
      category: "nature",
      location: "Ella",
      rating: "4.8",
      reviews: "9.5k",
      distance: "180 km",
      icon: "🌉",
      description: "Iconic railway bridge in hills",
    },
    {
      id: "6",
      name: "Adams Peak",
      category: "adventure",
      location: "Ratnapura District",
      rating: "4.7",
      reviews: "7.1k",
      distance: "105 km",
      icon: "⛰️",
      description: "Sacred mountain pilgrimage site",
    },
    {
      id: "7",
      name: "Mirissa Beach",
      category: "beach",
      location: "Mirissa",
      rating: "4.7",
      reviews: "5.9k",
      distance: "145 km",
      icon: "🐋",
      description: "Whale watching and pristine beaches",
    },
    {
      id: "8",
      name: "Galle Fort",
      category: "cultural",
      location: "Galle",
      rating: "4.8",
      reviews: "11.2k",
      distance: "119 km",
      icon: "🏰",
      description: "Historic Dutch colonial fort",
    },
  ];

  const filteredDestinations = destinations.filter((dest) => {
    const matchesCategory =
      selectedCategory === "all" || dest.category === selectedCategory;
    const matchesSearch =
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
        <Text className="text-xl font-bold text-[#0A1128]">Destinations</Text>
        <TouchableOpacity className="items-center justify-center w-10 h-10 rounded-full bg-gray-50">
          <Feather name="map" size={20} color="#0A1128" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View className="px-6 py-4 bg-gray-50">
        <View className="flex-row items-center px-4 py-3 bg-white border border-gray-200 rounded-2xl">
          <Feather name="search" size={20} color="#9CA3AF" />
          <TextInput
            className="flex-1 ml-3 text-sm text-[#0A1128]"
            placeholder="Search destinations..."
            placeholderTextColor="#9CA3AF"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery("")}>
              <Feather name="x-circle" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Category Filters - Fixed Pill Design */}
      <View className="py-4 border-b border-gray-100 bg-gray-50">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 24 }}
          className="flex-row"
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              key={category.id}
              className={`flex-row items-center px-6 py-3 rounded-full mr-3 ${
                selectedCategory === category.id
                  ? "bg-[#FFD700]"
                  : "bg-white border border-gray-200"
              }`}
              onPress={() => setSelectedCategory(category.id)}
              activeOpacity={0.7}
            >
              <MaterialCommunityIcons
                name={category.icon as any}
                size={20}
                color={selectedCategory === category.id ? "#0A1128" : "#6B7280"}
              />
              <Text
                className={`ml-2 text-sm font-semibold ${
                  selectedCategory === category.id
                    ? "text-[#0A1128]"
                    : "text-gray-600"
                }`}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Results Count */}
      <View className="px-6 py-3 bg-white">
        <Text className="text-sm font-medium text-gray-600">
          {filteredDestinations.length}{" "}
          {filteredDestinations.length === 1 ? "place" : "places"} found
        </Text>
      </View>

      {/* Destinations List */}
      <ScrollView
        className="flex-1 bg-gray-50"
        showsVerticalScrollIndicator={false}
      >
        <View className="px-6 pt-2 pb-8">
          {filteredDestinations.map((destination) => (
            <TouchableOpacity
              key={destination.id}
              className="flex-row mb-4 overflow-hidden bg-white shadow-sm rounded-3xl"
              activeOpacity={0.8}
            >
              {/* Icon Container */}
              <View className="items-center justify-center w-28 bg-[#FFF8DC]">
                <Text className="mb-2 text-5xl">{destination.icon}</Text>
                <View className="px-3 py-1 bg-[#FFD700] rounded-full">
                  <Text className="text-[10px] font-bold text-[#0A1128] uppercase">
                    {
                      categories.find((c) => c.id === destination.category)
                        ?.name
                    }
                  </Text>
                </View>
              </View>

              {/* Content */}
              <View className="flex-1 p-4">
                <Text className="text-lg font-bold text-[#0A1128] mb-1">
                  {destination.name}
                </Text>
                <Text className="mb-3 text-xs leading-4 text-gray-500">
                  {destination.description}
                </Text>

                <View className="flex-row items-center mb-3 space-x-3">
                  <View className="flex-row items-center">
                    <Feather name="map-pin" size={12} color="#FFD700" />
                    <Text className="ml-1 text-xs text-gray-500">
                      {destination.location}
                    </Text>
                  </View>
                  <View className="flex-row items-center">
                    <Feather name="navigation" size={12} color="#FFD700" />
                    <Text className="ml-1 text-xs text-gray-500">
                      {destination.distance}
                    </Text>
                  </View>
                </View>

                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center">
                    <Feather name="star" size={14} color="#FFD700" />
                    <Text className="ml-1 text-sm font-bold text-[#FFD700]">
                      {destination.rating}
                    </Text>
                    <Text className="ml-1 text-xs text-gray-400">
                      ({destination.reviews})
                    </Text>
                  </View>

                  <View className="flex-row items-center px-3 py-1.5 bg-[#FFD700]/10 rounded-lg">
                    <Text className="text-xs font-semibold text-[#FFD700] mr-1">
                      Details
                    </Text>
                    <Feather name="chevron-right" size={14} color="#FFD700" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}

          {/* Empty State */}
          {filteredDestinations.length === 0 && (
            <View className="items-center justify-center py-20">
              <Feather name="search" size={64} color="#E5E7EB" />
              <Text className="mt-4 text-lg font-semibold text-gray-400">
                No destinations found
              </Text>
              <Text className="px-8 mt-2 text-sm text-center text-gray-400">
                Try adjusting your search or filters
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
