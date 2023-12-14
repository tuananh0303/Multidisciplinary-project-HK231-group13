import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomBar from "./src/navigation/BottomBar/BottomBar"
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';

const Stack = createStackNavigator()
export default App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2A2A37" style="light" />
      {/* <NavigationContainer>
        <BottomBar />
      </NavigationContainer> */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" headerMode="none">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={BottomBar} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

