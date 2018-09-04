import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import SignupScreen from "./src/screens/SignupScreen";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

/**
 * CreateSwitchNavigator - only show one Screen/Stack at one time
 * 1. Authentication StackNavigator
 *   - Signin Screen
 *   - Signup screen
 * 2. AppDrawerNavigation
 *   - App StackNavigator(to give a common header to the tabs)
 *     - App TabNavigator
 *       - Home Tab
 *       - Settings Tab
 */

const AuthStackNavigator = createStackNavigator({
  Login: LoginScreen,
  Signup: SignupScreen
});

const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen
  }
});
const AppStackNavigator = createStackNavigator({
  AppTabNavigator: {
    screen: AppTabNavigator,
    navigationOptions: ({ navigation }) => ({
      title: "Your App1",
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{ paddingHorizontal: 10 }}>
            <Icon name="md-menu" size={24} />
          </View>
        </TouchableOpacity>
      )
    })
  }
});

const AppDrawerNavigator = createDrawerNavigator({
  Home: AppStackNavigator
});

export default createSwitchNavigator({
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
