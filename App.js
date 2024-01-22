import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/components/MyStack';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
      </NavigationContainer>
  );
}

