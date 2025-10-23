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
        className="items-center justify-center px-8 py-4 rounded-lg bg-gold"
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Text className="text-base font-bold tracking-wider uppercase text-navy">
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
        source={require('../assets/images/ceylon-pattern.jpg')} // Your pattern
        resizeMode="cover"
        className="flex-1"
      >
        {/* Dark Overlay for Readability */}
        <View className="flex-1 bg-navy/80">
          <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>
            
            {/* --- 1. HERO SECTION --- */}
            <View className="h-[40vh] min-h-[300px] justify-center items-center p-6 space-y-4">
              <Text className="text-5xl font-bold text-center text-gold" style={{ textShadowColor: 'rgba(255, 215, 0, 0.5)', textShadowRadius: 10 }}>
                Discover Sri Lanka
              </Text>
              <Text className="w-3/4 text-lg text-center text-light-gold">
                Culture, Comfort, and Care — All in One App
              </Text>
              <View className="flex-row justify-center mt-4 gap-x-4">
                <StyledTouchableOpacity
                  className="px-5 py-2 border-2 rounded-full border-gold"
                  activeOpacity={0.7}
                >
                  <Text className="font-semibold text-gold">Explore Culture</Text>
                </StyledTouchableOpacity>
                <StyledTouchableOpacity
                  className="px-6 py-2 rounded-full bg-gold"
                  activeOpacity={0.7}
                >
                  <Text className="font-bold text-navy">Book a Ride</Text>
                </StyledTouchableOpacity>
              </View>
            </View>

            {/* --- 2. CULTURE & HERITAGE SECTION --- */}
            <View className="py-8 space-y-4">
              <Text className="px-6 mb-2 text-2xl font-bold text-gold">
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
                    className="w-48 h-64 mx-2 overflow-hidden shadow-lg rounded-xl"
                    activeOpacity={0.9}
                  >
                    <StyledImageBackground
                      source={item.image}
                      className="justify-end flex-1"
                      resizeMode="cover"
                    >
                      <View className="p-4 bg-black/50">
                        <Text className="text-base font-bold text-white">
                          {item.name}
                        </Text>
                        <Text className="text-xs text-gray-200">
                          {item.description}
                        </Text>
                      </View>
                    </StyledImageBackground>
                  </StyledTouchableOpacity>
                )}
              />
            </View>

            {/* --- 3. HIRE A RIDE (PICKME) SECTION --- */}
            <View className="px-6 py-8 space-y-5">
              <Text className="text-2xl font-bold text-gold">
                Get Around Easily
              </Text>
              <Text className="text-base text-gray-300">
                Book a tuk or cab instantly with PickMe.
              </Text>

              {/* Mockup Input Fields */}
              <View className="space-y-4">
                <View className="flex-row items-center justify-between p-4 border rounded-lg bg-navy/80 border-gold">
                  <Text className="text-base text-light-gold">Pickup Location</Text>
                  <Feather name="chevron-down" size={20} color="#FFD700" />
                </View>
                <View className="flex-row items-center justify-between p-4 border rounded-lg bg-navy/80 border-gold">
                  <Text className="text-base text-light-gold">Destination</Text>
                  <Feather name="chevron-down" size={20} color="#FFD700" />
                </View>
              </View>

              <View className="items-center pt-4">
                <GlowingButton title="Book with PickMe" onPress={() => {}} />
                <Text className="mt-4 text-xs text-gray-400">
                  Integration coming soon
                </Text>
              </View>
            </View>

            {/* --- 4. EMERGENCY & SAFETY SECTION --- */}
            <View className="px-6 py-8 space-y-4">
              <Text className="mb-2 text-2xl font-bold text-gold">
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
                    <Text className="text-base font-bold text-center text-gold">
                      {item.name}
                    </Text>
                    <Text className="text-sm text-gray-300">{item.detail}</Text>
                  </StyledTouchableOpacity>
                )}
              />
            </View>

            {/* --- 5. FOOTER --- */}
            <View className="items-center py-6 mt-8 border-t border-gold/50">
              <Text className="text-xs text-gray-400">
                © 2025 Discover Sri Lanka
              </Text>
            </View>

          </ScrollView>
        </View>
      </StyledImageBackground>
    </SafeAreaView>
  );
}
