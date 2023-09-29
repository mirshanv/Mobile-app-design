const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Frame from "./screens/Frame";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  // const [fontsLoaded, error] = useFonts({
  //   "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
  //   "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  //   "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  // });

  // if (!fontsLoaded && !error) {
  //   return null;
  // }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
