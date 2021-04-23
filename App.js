import "react-native-gesture-handler";
// Import React and Component
import React from "react";
// Import Navigators from React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
// Import Screens
import SplashScreen from "./Screen/SplashScreen";
import LoginScreen from "./Screen/LoginScreen";
import RegisterScreen from "./Screen/RegisterScreen";
import HomeScreen from "./Screen/DrawerScreens/HomeScreen";
import MatchingProfile from "./Screen/Components/MatchingProfile";
import ProfileUpdate from "./Screen/DrawerScreens/ProfileUpdate";
import DrawerNavigationRoutes from "./Screen/DrawerNavigationRoutes";
import NavigationDrawerHeader from "./Screen/Components/NavigationDrawerHeader";
import AllUser from "./Screen/AllUser";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: "Register", //Set Header Title
          headerStyle: {
            backgroundColor: "#990000", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};
const InnerStack = () => {};

const App = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        />
        {/* Auth Navigator which includer Login Signup will come once */}
        <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          // Hiding header for Navigation Drawer as we will use our custom header
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Dashboard", //Set Header Title

            headerStyle: {
              backgroundColor: "#990000", //Set Header color
            },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: {
              fontWeight: "bold", //Set Header text style
            },
          }}
          screenOptions={{
            headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,

            headerStyle: {
              backgroundColor: "#990000", //Set Header color
            },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: {
              fontWeight: "bold", //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Profile Update"
          component={ProfileUpdate}
          options={{
            title: "Profile Update",
            headerStyle: {
              backgroundColor: "#990000", //Set Header color
            },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: {
              fontWeight: "bold", //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Matching
        Profile"
          component={MatchingProfile}
          options={{
            title: "Matching Profile",
            headerStyle: {
              backgroundColor: "#990000", //Set Header color
            },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: {
              fontWeight: "bold", //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="All User"
          component={AllUser}
          options={{
            title: "View Profile",
            headerStyle: {
              backgroundColor: "#990000", //Set Header color
            },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: {
              fontWeight: "bold", //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
