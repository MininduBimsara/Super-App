import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function WelcomeScreen({ navigation }: any) {
  return (
    <View className="flex-1 bg-[#0A1128]">
      <StatusBar barStyle="light-content" backgroundColor="#0A1128" />

      <ImageBackground
        source={require("../assets/images/ceylon-pattern.jpg")}
        className="flex-1"
        resizeMode="cover"
      >
        {/* Gradient Overlay */}
        <LinearGradient
          colors={["#0A112800", "#0A1128CC", "#0A1128"]}
          className="flex-1"
        >
          <SafeAreaView
            className="justify-between flex-1"
            edges={["top", "bottom"]}
          >
            {/* Top: Logo */}
            <View className="items-center pt-16">
              <View className="items-center justify-center w-24 h-24 mb-4 rounded-full bg-[#FFD700]">
                <MaterialCommunityIcons
                  name="palm-tree"
                  size={48}
                  color="#0A1128"
                />
              </View>
              <Text className="text-xl font-bold text-[#FFD700]">
                Ceylon Guide
              </Text>
            </View>

            {/* Center: Main Message */}
            <View className="items-center px-8">
              <Text className="text-5xl font-black text-[#FFD700] mb-6 text-center leading-tight">
                Your Travel{"\n"}Companion
              </Text>
              <Text className="mb-4 text-lg leading-7 text-center text-white/90">
                Explore Sri Lanka with confidence
              </Text>
              <Text className="px-4 text-sm leading-6 text-center text-white/70">
                Emergency support, transportation, AI assistance, and curated
                destinations—everything you need in one app
              </Text>
            </View>

            {/* Bottom: Action */}
            <View className="px-8 pb-10">
              <TouchableOpacity
                className="bg-[#FFD700] py-5 rounded-3xl shadow-2xl"
                onPress={() => navigation.navigate("Home")}
                activeOpacity={0.9}
              >
                <Text className="text-center text-xl font-bold text-[#0A1128]">
                  Start Exploring
                </Text>
              </TouchableOpacity>

              <View className="flex-row items-center justify-between px-4 mt-8">
                <View className="items-center">
                  <View className="items-center justify-center w-12 h-12 mb-2 rounded-full bg-white/10">
                    <Feather name="shield" size={22} color="#FFD700" />
                  </View>
                  <Text className="text-xs font-medium text-white/70">
                    Emergency
                  </Text>
                </View>

                <View className="items-center">
                  <View className="items-center justify-center w-12 h-12 mb-2 rounded-full bg-white/10">
                    <MaterialCommunityIcons
                      name="map-marker-path"
                      size={22}
                      color="#FFD700"
                    />
                  </View>
                  <Text className="text-xs font-medium text-white/70">
                    Navigate
                  </Text>
                </View>

                <View className="items-center">
                  <View className="items-center justify-center w-12 h-12 mb-2 rounded-full bg-white/10">
                    <MaterialCommunityIcons
                      name="chat-processing"
                      size={22}
                      color="#FFD700"
                    />
                  </View>
                  <Text className="text-xs font-medium text-white/70">
                    AI Help
                  </Text>
                </View>

                <View className="items-center">
                  <View className="items-center justify-center w-12 h-12 mb-2 rounded-full bg-white/10">
                    <MaterialCommunityIcons
                      name="compass-outline"
                      size={22}
                      color="#FFD700"
                    />
                  </View>
                  <Text className="text-xs font-medium text-white/70">
                    Discover
                  </Text>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
