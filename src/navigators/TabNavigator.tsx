import React, { useEffect, useState } from "react";
import { Text, Image, Keyboard, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import _routes from "../routes/routes";

type TabScreen = {
  name: string;
  Component: React.ComponentType<any>;
  label?: string;
  logo: any;
  logo1: any;
};

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showEvent = Platform.OS === "android" ? "keyboardDidShow" : "keyboardWillShow";
    const hideEvent = Platform.OS === "android" ? "keyboardDidHide" : "keyboardWillHide";

    const keyboardDidShowListener = Keyboard.addListener(showEvent, () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener(hideEvent, () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          display: isKeyboardVisible ? "none" : "flex",
          paddingTop: 12,
          height: 70,
        },
      }}
    >
      {_routes().BOTTOMTAB_ROUTE.map((screen: TabScreen) => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.Component}
          options={{
            tabBarIcon: ({ focused }) => (
              <>
                <Image
                  source={focused ? screen.logo1 : screen.logo}
                  style={{
                    width: 50,
                    height: 50,
                    resizeMode: "cover",
                  }}
                />
                {/* {screen.label && (
                  <Text
                    style={{
                      fontWeight: "700",
                      color: focused ? "#000000" : "#C3C3C3",
                      fontSize: 10,
                       width: 55,
                      textAlign: "center",
                    }}
                  >
                    {screen.label}
                  </Text>
                )} */}
              </>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
