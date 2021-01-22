import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Welcome_Screen from './components/welcomeScreen'
import {AppTabNavigator} from './components/appTabNavigator'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default function App() {
  return (
    <AppContainer/>
  );
}
const switchNavigator = createSwitchNavigator({ Welcome_Screen: { screen: Welcome_Screen }, BottomTab: { screen: AppTabNavigator } })
const AppContainer = createAppContainer(switchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
