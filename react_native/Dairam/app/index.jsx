import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import React from 'react';
import { router, Link } from 'expo-router';

const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="color-black text-3xl">Dairam!</Text>
      <StatusBar style="auto" />
      {/* connect to sigin page */}
      {/* <Link route="signin" className="text-blue-500 text-lg">Sign In</Link> */}
      <Link href="/sigin" className='text-blue-500' text-lg mt-5>Sign in</Link>
      </View>
  )
}

export default index