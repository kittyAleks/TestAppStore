import React from "react";
import {HeaderButtons} from "react-navigation-header-buttons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { HomeScreen } from "../screens/HomeScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { CartScreen } from "../screens/CartScreen";
import { SplashScreen } from "../screens/SplashScreen";
import { SignInScreen } from "../screens/SignInScreen";
import { SignUpScreen } from "../screens/SignUpScreen";

const defaultOptions = {
  headerStyle: {
    backgroundColor:'#da404d',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
// const optionsSignUpScreenHeader = {
//   headerTitle: 'Alpaca Store',
//   headerLeft: () => <HeaderButtons>
//     <Ionicons onPress={() => alert('Hello')} style={{paddingLeft: 20}}  name='arrow-back' color='white' size={25} />
//   </HeaderButtons>
// };
const Stack = createNativeStackNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator>
      {/*<Stack.Screen options={{*/}
      {/*  ...defaultOptions,*/}
      {/*}}*/}
      {/*  name="SignUpScreen"*/}
      {/*  component={SignUpScreen} />*/}
      <Stack.Screen options={{
        ...defaultOptions
      }}
        name="Food Market"
        component={SplashScreen} />

      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          headerTitle: "Sign in",
          ...defaultOptions
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}

        options={{
          headerTitle: 'Registration',
          ...defaultOptions,
          // headerLeft: () => <HeaderButtons>
          //   <Ionicons onPress={() => navigation.navigate('SplashScreen')} name='chevron-back' color='white' size={25} />
          // </HeaderButtons>
        }}
      />


      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator();

const AllTabNavigation = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen name="Меню" component={HomeScreen}
      options={{
        headerShown: false,
        tabBarLabel: "Home",
        // tabBarIcon: ({ color, size }) => (
        //   <Ionicons name="ios-home" color={"white"} size={20} />
        // ),
      }}
    />
    <BottomTab.Screen name="Корзина" component={CartScreen} />
    <BottomTab.Screen name="Настройки" component={SettingsScreen} />
  </BottomTab.Navigator>
);
