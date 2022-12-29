import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { NativeBaseProvider } from "native-base";
import AuthScreen from "./Screens/AuthScreen";
import SignupScreen from "./Screens/SignupScreen";
import ForgetScreen from "./Screens/ForgetScreen";
import ChangeScreen from "./Screens/ChangeScreen";
import VerifyEmail from "./Screens/VerifyEmail";
import VerifyPhone from "./Screens/VerifyPhone";
import SuccessScreen from "./Screens/SuccessScreen";
import BackEmailScreen from "./Screens/BackEmailScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider>
          <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen
              name="SignIn"
              options={{ headerShown: false }}
              component={AuthScreen}
            />
            <Stack.Screen
              name="SignUp"
              options={{ headerShown: false }}
              component={SignupScreen}
            />
            <Stack.Screen
              name="forget"
              options={{ headerShown: false }}
              component={ForgetScreen}
            />
            <Stack.Screen
              name="change"
              options={{ headerShown: false }}
              component={ChangeScreen}
            />
            <Stack.Screen
              name="email"
              options={{ headerShown: false }}
              component={VerifyEmail}
            />
            <Stack.Screen
              name="phone"
              options={{ headerShown: false }}
              component={VerifyPhone}
            />
            <Stack.Screen
              name="success"
              options={{ headerShown: false }}
              component={SuccessScreen}
            />
            <Stack.Screen
              name="BackEmail"
              options={{ headerShown: false }}
              component={BackEmailScreen}
            />
          </Stack.Navigator>
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
}
