import React, { useState, Component, useEffect } from "react";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dimensions, View, } from "react-native";

///redux ///
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "./src/redux/store/index";

// /Themes And Fonts ///
import { DarkTheme, LightTheme } from "./src/assets/themes";
import { useFonts } from "expo-font";

///Authentication Screens//
import Login from "./src/screens/Login";
import Welcome from "./src/screens/Welcome";
import Signup from "./src/screens/Signup";

////Toast
import { Root, Toast } from "native-base";
import LoadingScreen from "./src/components/LoadingScreen";
import { setAppColorScheme } from "./src/redux/actions";


const Drawer = createDrawerNavigator();
const { height, width } = Dimensions.get("screen");
class DrawerNavigator extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Drawer.Navigator
          drawerStyle={{ width: width, backgroundColor: "transparent" }}
          drawerContent={(props) => <DrawerContent {...props} />}
          initialRouteName="HomeScreen"
        >
          <Drawer.Screen name="HomeScreen" children={HomeScreen} />
        </Drawer.Navigator>
      </View>
    );
  }
}

const Stack = createStackNavigator();

const App = () => {
  let [fontsLoaded] = useFonts({
    "Inter-300": require("./src/assets/fonts/Inter-Light.ttf"),
    "Inter-400": require("./src/assets/fonts/Inter-Regular.ttf"),
    "Inter-500": require("./src/assets/fonts/Inter-Medium.ttf"),
    "Inter-600": require("./src/assets/fonts/Inter-SemiBold.ttf"),
    "Inter-700": require("./src/assets/fonts/Inter-Bold.ttf"),
    "Inter-800": require("./src/assets/fonts/Inter-ExtraBold.ttf"),
    "Inter-900": require("./src/assets/fonts/Inter-Black.ttf")
  });
  const state = useSelector((state) => state);
  let theme = state.appsettings.colortheme == "dark" ? DarkTheme : LightTheme;
  const [Loading, setLoading] = useState(false);
  const { userDetails } = state.auth;


  if (!fontsLoaded || Loading === true) {
    return <LoadingScreen />;
  } else
    return (
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
          initialRouteName="Root"
        >
          {state.auth.isSignedIn ? (
            <>
              <Stack.Screen
                name="HomeScreen"
                component={DrawerNavigator}
              />
            </>
          )
            : (
              <>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
              </>
            )}
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default () => {
  return (
    <Root>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Root>
  );
};
