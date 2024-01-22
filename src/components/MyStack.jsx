import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import WeatherScreen from '../screens/WeatherScreen'
import NewsScreen from '../screens/NewsScreen'

const Stack = createNativeStackNavigator()

const MyStack = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Weather" component={WeatherScreen} />
          <Stack.Screen name="News" component={NewsScreen} />
    </Stack.Navigator>
  )
}

export default MyStack
