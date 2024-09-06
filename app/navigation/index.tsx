import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from "../";
import GameScreen from "../screens/game";
import ResultScreen from "../screens/result";
import { NavigationContainer } from "@react-navigation/native";

export default function RootLayout() {
  const Stack = createNativeStackNavigator();
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Index"
          component={Index}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="GameScreen"
          component={GameScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ResultScreen"
          component={ResultScreen}
        />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}
