import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function SupportScreen({ navigation }: any) {
  const [mode, setMode] = useState<"basic" | "advanced">("basic");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your Ceylon travel assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");

  const quickQuestions = [
    { id: "1", text: "Best places to visit?", icon: "map-pin" },
    { id: "2", text: "Local cuisine recommendations", icon: "coffee" },
    { id: "3", text: "Weather information", icon: "cloud" },
    { id: "4", text: "Cultural tips", icon: "book" },
  ];

  const faqItems = [
    {
      id: "1",
      question: "What are the visa requirements?",
      answer:
        "Most tourists can obtain an Electronic Travel Authorization (ETA) online before arrival.",
    },
    {
      id: "2",
      question: "What is the best time to visit?",
      answer:
        "December to March is ideal for the west and south coasts. April to September is best for the east coast.",
    },
    {
      id: "3",
      question: "Is tap water safe to drink?",
      answer:
        "It's recommended to drink bottled water. Most hotels and restaurants provide filtered water.",
    },
  ];

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: inputText,
        sender: "user",
        timestamp: new Date(),
      };

      setMessages([...messages, userMessage]);
      setInputText("");

      // Simulate bot response
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text:
            mode === "advanced"
              ? "I'm analyzing your question with AI. In a real app, this would connect to an AI service for detailed responses."
              : "Thank you for your question! I'm here to help with your Sri Lanka travel needs.",
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      }, 1000);
    }
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
        <Text className="text-xl font-bold text-[#0A1128]">Support</Text>
        <TouchableOpacity className="items-center justify-center w-10 h-10 rounded-full bg-gray-50">
          <Feather name="settings" size={20} color="#0A1128" />
        </TouchableOpacity>
      </View>

      {/* Mode Selector */}
      <View className="flex-row px-6 py-4 space-x-2">
        <TouchableOpacity
          className={`flex-1 py-3 rounded-xl ${
            mode === "basic" ? "bg-[#FFD700]" : "bg-gray-50"
          }`}
          onPress={() => setMode("basic")}
        >
          <View className="flex-row items-center justify-center">
            <Feather
              name="message-circle"
              size={16}
              color={mode === "basic" ? "#0A1128" : "#6B7280"}
            />
            <Text
              className={`ml-2 text-sm font-semibold ${
                mode === "basic" ? "text-[#0A1128]" : "text-gray-500"
              }`}
            >
              Basic
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          className={`flex-1 py-3 rounded-xl ${
            mode === "advanced" ? "bg-[#FFD700]" : "bg-gray-50"
          }`}
          onPress={() => setMode("advanced")}
        >
          <View className="flex-row items-center justify-center">
            <Feather
              name="zap"
              size={16}
              color={mode === "advanced" ? "#0A1128" : "#6B7280"}
            />
            <Text
              className={`ml-2 text-sm font-semibold ${
                mode === "advanced" ? "text-[#0A1128]" : "text-gray-500"
              }`}
            >
              AI Advanced
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Mode Description */}
      <View className="flex-row items-center px-6 py-2 mx-6 mb-4 bg-blue-50 rounded-xl">
        <Feather
          name={mode === "basic" ? "info" : "zap"}
          size={14}
          color="#3B82F6"
        />
        <Text className="flex-1 ml-2 text-xs text-gray-600">
          {mode === "basic"
            ? "Quick answers to common travel questions"
            : "AI-powered personalized travel assistance"}
        </Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
        keyboardVerticalOffset={100}
      >
        {/* Messages */}
        <ScrollView
          className="flex-1 px-6"
          showsVerticalScrollIndicator={false}
        >
          {messages.map((message) => (
            <View
              key={message.id}
              className={`mb-4 ${
                message.sender === "user" ? "items-end" : "items-start"
              }`}
            >
              <View
                className={`max-w-[80%] p-4 rounded-2xl ${
                  message.sender === "user"
                    ? "bg-[#FFD700]"
                    : "bg-gray-100 border border-gray-200"
                }`}
              >
                <Text
                  className={`text-sm ${
                    message.sender === "user"
                      ? "text-[#0A1128]"
                      : "text-gray-800"
                  }`}
                >
                  {message.text}
                </Text>
              </View>
            </View>
          ))}

          {/* Quick Questions */}
          {messages.length <= 2 && (
            <View className="my-4">
              <Text className="text-sm font-semibold text-[#0A1128] mb-3">
                Quick Questions:
              </Text>
              {quickQuestions.map((q) => (
                <TouchableOpacity
                  key={q.id}
                  className="flex-row items-center p-3 mb-2 bg-white border border-gray-200 rounded-xl"
                  onPress={() => setInputText(q.text)}
                  activeOpacity={0.7}
                >
                  <Feather name={q.icon as any} size={16} color="#FFD700" />
                  <Text className="flex-1 ml-3 text-sm text-gray-700">
                    {q.text}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* FAQ (Basic mode only) */}
          {mode === "basic" && messages.length <= 2 && (
            <View className="my-4">
              <Text className="text-lg font-bold text-[#0A1128] mb-4">
                Frequently Asked Questions
              </Text>
              {faqItems.map((item) => (
                <View
                  key={item.id}
                  className="p-4 mb-3 bg-white border border-gray-200 rounded-2xl"
                >
                  <Text className="text-sm font-bold text-[#0A1128] mb-2">
                    {item.question}
                  </Text>
                  <Text className="text-sm leading-5 text-gray-600">
                    {item.answer}
                  </Text>
                </View>
              ))}
            </View>
          )}

          <View className="h-20" />
        </ScrollView>

        {/* Input Area */}
        <View className="px-6 py-4 bg-white border-t border-gray-100">
          <View className="flex-row items-center p-3 bg-gray-50 rounded-2xl">
            <TextInput
              className="flex-1 text-sm text-[#0A1128]"
              placeholder="Ask me anything..."
              placeholderTextColor="#9CA3AF"
              value={inputText}
              onChangeText={setInputText}
              multiline
              maxLength={500}
            />
            <TouchableOpacity
              className={`items-center justify-center w-10 h-10 rounded-xl ml-2 ${
                inputText.trim() ? "bg-[#FFD700]" : "bg-gray-200"
              }`}
              onPress={handleSendMessage}
              disabled={!inputText.trim()}
            >
              <Feather
                name="send"
                size={18}
                color={inputText.trim() ? "#0A1128" : "#9CA3AF"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
