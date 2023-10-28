import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { useFonts } from "expo-font"
import AppLoading from 'expo-app-loading';

import Home from './components/Home';
import Details from './components/Details';
import Liked from './components/Liked';
import Profile from './components/Profile';
import LoginScreen from './components/LoginScreen';
import colors from "./assets/colors/colors"



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.orange,
        tabBarinactiveTintColor: colors.gray,
        tabBarShowLabel: false
      }}>
      <Tab.Screen name="Home" component={Home} options={{
        headerShown: false,
        tabBarIcon: ({color}) => <Ionicons name="home" size={32} color={color} />
      }} />
      <Tab.Screen name="Liked" component={Liked} options={{
        headerShown: false,
        tabBarIcon: ({color}) => <Ionicons name="heart" size={32} color={color} />
      }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
        headerShown: false,
        tabBarIcon: ({color}) => <MaterialCommunityIcons name="account" size={32} color={color} />
      }}/>
    </Tab.Navigator>
  )
}

const App = () => {
  const [fontsLoaded] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf")
  })

  if (!fontsLoaded) {
    return (
      <AppLoading/>
    )
  }
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}} />
        <Stack.Screen name="Details" component={Details} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    <StatusBar style="auto"/>
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }
});

export default App