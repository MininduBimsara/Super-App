import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import { styled } from 'nativewind';
import { Feather, Ionicons } from '@expo/vector-icons'; // Using expo icons
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSequence,
} from 'react-native-reanimated';

// --- Styled Components for NativeWind ---
// This allows us to use Tailwind classes on components like ImageBackground
const StyledImageBackground = styled(ImageBackground);
const StyledTouchableOpacity = styled(TouchableOpacity);
const AnimatedView = styled(Animated.View);

// --- Dummy Data ---

// NOTE: Update these image paths to match your assets folder
const heritageSites = [
  {
    id: '1',
    name: 'Sigiriya Rock Fortress',
    image: require('../assets/images/sigiriya.jpg'), // Placeholder
    description: 'Ancient royal citadel & UNESCO site',
  },
  {
    id: '2',
    name: 'Temple of the Tooth',
    image: require('../assets/images/kandy.jpg'), // Placeholder
    description: 'Sacred Buddhist relic site in Kandy',
  },
  {
    id: '3',
    name: 'Galle Fort',
    image: require('../assets/images/galle.jpg'), // Placeholder
    description: 'Historic coastal fortress with colonial charm',
  },
];

const emergencyContacts = [
  {
    id: '1',
    name: 'Tourist Police',
    detail: 'Dial 119',
    icon: 'shield',
  },
  {
    id: '2',
    name: 'Hospitals',
    detail: 'Find Nearby',
    icon: 'hospital-symbol', // Using Ionicons for this one
  },
  {
    id: '3',
    name: 'Ambulance',
    detail: 'Dial 1990',
    icon: 'activity',
  },
  {
    id: '4',
    name: 'Emergency Hotlines',
    detail: 'View All',
    icon: 'phone-call',
  },
];

// --- Glowing Button Component ---
// A reusable component for your signature glowing gold button
const GlowingButton = ({ title, onPress }: { title: string; onPress: () => void }) => {
  const scale = useSharedValue(1);
  const shadowOpacity = useSharedValue(0);

  // Create a gentle pulsing glow animation
  React.useEffect(() => {
    scale.value = withRepeat(
      withSequence(
        withTiming(1.05, { duration: 1500 }),
        withTiming(1, { duration: 1500 })
      ),
      -1, // Repeat indefinitely
      true // Reverse animation
    );
    shadowOpacity.value = withRepeat(
      withSequence(
        withTiming(0.7, { duration: 1500 }),
        withTiming(0.3, { duration: 1500 })
      ),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      shadowColor: '#FFD700',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: shadowOpacity.value,
      shadowRadius: 15,
      elevation: 10, // for Android
    };
  });

  return (
    <AnimatedView style={animatedStyle}>
      <StyledTouchableOpacity
        className="bg-gold py-4 px-8 rounded-lg items-center justify-center"
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text className="text-navy text-base font-bold uppercase tracking-wider">
          {title}
        </Text>
      </StyledTouchableOpacity>
    </AnimatedView>
  );
};

// --- Main Home Screen Component ---
export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-navy">
      <StatusBar barStyle="light-content" />

      {/* --- Main Background Pattern --- */}
      <StyledImageBackground
        source={require('../assets/ceylon-pattern.jpg')} // Your pattern
        resizeMode="cover"
        className="flex-1"
      >
        {/* Dark Overlay for Readability */}
        <View className="flex-1 bg-navy/80">
          <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>
            
            {/* --- 1. HERO SECTION --- */}
            <View className="h-[40vh] min-h-[300px] justify-center items-center p-6 space-y-4">
              <Text className="text-5xl font-bold text-gold text-center" style={{ textShadowColor: 'rgba(255, 215, 0, 0.5)', textShadowRadius: 10 }}>
                Discover Sri Lanka
              </Text>
              <Text className="text-lg text-light-gold text-center w-3/4">
                Culture, Comfort, and Care — All in One App
              </Text>
              <View className="flex-row justify-center gap-x-4 mt-4">
                <StyledTouchableOpacity
                  className="border-2 border-gold rounded-full py-2 px-5"
                  activeOpacity={0.7}
                >
                  <Text className="text-gold font-semibold">Explore Culture</Text>
                </StyledTouchableOpacity>
                <StyledTouchableOpacity
                  className="bg-gold rounded-full py-2 px-6"
                  activeOpacity={0.7}
                >
                  <Text className="text-navy font-bold">Book a Ride</Text>
                </StyledTouchableOpacity>
              </View>
            </View>

            {/* --- 2. CULTURE & HERITAGE SECTION --- */}
            <View className="py-8 space-y-4">
              <Text className="text-2xl font-bold text-gold px-6 mb-2">
                Explore Our Culture & Heritage
              </Text>
              <FlatList
                data={heritageSites}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingHorizontal: 16 }}
                renderItem={({ item }) => (
                  <StyledTouchableOpacity
                    className="w-48 h-64 rounded-xl overflow-hidden shadow-lg mx-2"
                    activeOpacity={0.9}
                  >
                    <StyledImageBackground
                      source={item.image}
                      className="flex-1 justify-end"
                      resizeMode="cover"
                    >
                      <View className="p-4 bg-black/50">
                        <Text className="text-white text-base font-bold">
                          {item.name}
                        </Text>
                        <Text className="text-gray-200 text-xs">
                          {item.description}
                        </Text>
                      </View>
                    </StyledImageBackground>
                  </StyledTouchableOpacity>
                )}
              />
            </View>

            {/* --- 3. HIRE A RIDE (PICKME) SECTION --- */}
            <View className="py-8 px-6 space-y-5">
              <Text className="text-2xl font-bold text-gold">
                Get Around Easily
              </Text>
              <Text className="text-base text-gray-300">
                Book a tuk or cab instantly with PickMe.
              </Text>

              {/* Mockup Input Fields */}
              <View className="space-y-4">
                <View className="bg-navy/80 border border-gold rounded-lg p-4 flex-row justify-between items-center">
                  <Text className="text-light-gold text-base">Pickup Location</Text>
                  <Feather name="chevron-down" size={20} color="#FFD700" />
                </View>
                <View className="bg-navy/80 border border-gold rounded-lg p-4 flex-row justify-between items-center">
                  <Text className="text-light-gold text-base">Destination</Text>
                  <Feather name="chevron-down" size={20} color="#FFD700" />
                </View>
              </View>

              <View className="pt-4 items-center">
                <GlowingButton title="Book with PickMe" onPress={() => {}} />
                <Text className="text-gray-400 text-xs mt-4">
                  Integration coming soon
                </Text>
              </View>
            </View>

            {/* --- 4. EMERGENCY & SAFETY SECTION --- */}
            <View className="py-8 px-6 space-y-4">
              <Text className="text-2xl font-bold text-gold mb-2">
                Emergency Assistance
              </Text>
              <FlatList
                data={emergencyContacts}
                keyExtractor={(item) => item.id}
                numColumns={2} // 2x2 Grid
                scrollEnabled={false} // Disable scroll for this list
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item }) => (
                  <StyledTouchableOpacity
                    className="bg-navy/90 border border-gold/30 rounded-lg p-4 w-[48%] mb-4 items-center justify-center space-y-2 aspect-square"
                    activeOpacity={0.7}
                  >
                    {item.icon === 'hospital-symbol' ? (
                      <Ionicons name="medkit-outline" size={36} color="#FFD700" />
                    ) : (
                      <Feather name={item.icon as any} size={36} color="#FFD700" />
                    )}
                    <Text className="text-gold font-bold text-base text-center">
                      {item.name}
                    </Text>
                    <Text className="text-gray-300 text-sm">{item.detail}</Text>
                  </StyledTouchableOpacity>
                )}
              />
            </View>

            {/* --- 5. FOOTER --- */}
            <View className="border-t border-gold/50 mt-8 py-6 items-center">
              <Text className="text-gray-400 text-xs">
                © 2025 Discover Sri Lanka
              </Text>
            </View>

          </ScrollView>
        </View>
      </StyledImageBackground>
    </SafeAreaView>
  );
}
