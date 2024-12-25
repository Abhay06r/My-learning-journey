import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import images from '@/constants/images';

const signIn = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image source ={images.onboarding} className="w-full h-4/6" resizeMode="contain" />

        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome Restate
          </Text>
          <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-3">
            Let's Get You Closer to {"\n"}
            <Text className="text-primary-300">Your Ideal Home</Text>{"\n"}
            <Text className="text-lg font-rubik text-black-200 text-center mt-12">Login to ReState with Google</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default signIn