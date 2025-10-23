/**
 * Metro configuration for React Native + Expo + NativeWind
 * Works with Expo SDK 54
 */

const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

module.exports = withNativeWind(getDefaultConfig(__dirname));
