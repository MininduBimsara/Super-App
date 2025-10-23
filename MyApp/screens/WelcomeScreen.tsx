import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

export default function WelcomeScreen({ navigation }: any) {
  return (
    <SafeAreaView className="flex-1 bg-[#0A1128]" edges={["top"]}>
      <StatusBar barStyle="light-content" backgroundColor="#0A1128" />

      <ImageBackground
        source={require("../assets/images/ceylon-pattern.jpg")}
        className="flex-1"
        resizeMode="cover"
      >
        {/* Dark Overlay */}
        <View className="absolute inset-0 bg-[#0A1128]/90" />

        {/* Corner Decorations */}
        <View className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-[#FFD700]/50" />
        <View className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-[#FFD700]/50" />
        <View className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-[#FFD700]/50" />
        <View className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-[#FFD700]/50" />

        {/* Content */}
        <View className="items-center justify-center flex-1 px-6">
          {/* Header */}
          <View className="items-center mb-12">
            <Text className="text-xs tracking-[0.3em] text-[#FFF8DC] font-light mb-6 uppercase">
              WITNESS THE
            </Text>

            <Text className="text-7xl font-black text-[#FFD700] tracking-wider mb-6">
              CEYLON
            </Text>

            <Text className="text-xs tracking-[0.3em] text-[#FFF8DC] font-light mt-6 uppercase">
              PEARL OF THE OCEAN
            </Text>
          </View>

          {/* Description */}
          <View className="max-w-md mx-auto mb-12">
            <Text className="text-base text-center text-[#FFF8DC] leading-6">
              When the island whispers tales of ancient kingdoms, and nature
              paints stories across emerald hills and golden shores.
            </Text>
          </View>

          {/* Features */}
          <View className="w-full mb-12 space-y-3">
            <View className="flex-row items-center">
              <View className="w-2 h-2 rounded-full bg-[#FFD700] mr-3" />
              <Text className="text-sm text-[#FFF8DC]">
                Emergency Support 24/7
              </Text>
            </View>
            <View className="flex-row items-center">
              <View className="w-2 h-2 rounded-full bg-[#FFD700] mr-3" />
              <Text className="text-sm text-[#FFF8DC]">
                Transportation Services
              </Text>
            </View>
            <View className="flex-row items-center">
              <View className="w-2 h-2 rounded-full bg-[#FFD700] mr-3" />
              <Text className="text-sm text-[#FFF8DC]">
                AI Travel Assistant
              </Text>
            </View>
            <View className="flex-row items-center">
              <View className="w-2 h-2 rounded-full bg-[#FFD700] mr-3" />
              <Text className="text-sm text-[#FFF8DC]">
                Discover Hidden Gems
              </Text>
            </View>
          </View>

          {/* CTA Button */}
          <TouchableOpacity
            className="bg-[#FFD700] px-8 py-4 rounded-2xl shadow-lg flex-row items-center"
            onPress={() => navigation.navigate("Home")}
            activeOpacity={0.8}
          >
            <Text className="text-base font-bold text-[#0A1128] mr-2">
              Start Exploring
            </Text>
            <Feather name="arrow-right" size={20} color="#0A1128" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
