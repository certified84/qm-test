import "../global.css";
import { verifyInstallation } from "nativewind";
import {
  Text,
  View,
  Platform,
  StyleSheet,
} from "react-native";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/home";
import HomeIcon from "@/assets/icons/tab/home";
import WalletIcon from "@/assets/icons/tab/wallet";
import StoreIcon from "@/assets/icons/tab/store";
import TrophyIcon from "@/assets/icons/tab/trophy";
import SettingsIcon from "@/assets/icons/tab/settings";
import OtherScreen from "./screens/other";

const Tab = createBottomTabNavigator();

const HomeOptions: BottomTabNavigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text
      className="font-bold line-clamp-1"
      style={{ color: focused ? "#00CBF7" : "white" }}
    >
      Home
    </Text>
  ),
  tabBarIcon: ({ focused }) => {
    if (focused) {
      return (
        <View className="border-4 border-white" style={styles.fabIconContainer}>
          <View style={styles.fabIconInnerContainer}>
            <HomeIcon />
          </View>
        </View>
      );
    }
    return <HomeIcon />;
  },
  headerShown: false,
};

const WalletOptions: BottomTabNavigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text
      className="font-bold line-clamp-1"
      style={{ color: focused ? "#00CBF7" : "white" }}
    >
      Wallet
    </Text>
  ),
  tabBarIcon: ({ focused }) => {
    if (focused) {
      return (
        <View className="border-4 border-white" style={styles.fabIconContainer}>
          <View style={styles.fabIconInnerContainer}>
            <WalletIcon />
          </View>
        </View>
      );
    }
    return <WalletIcon />;
  },
};

const StoreOptions: BottomTabNavigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text
      className="font-bold line-clamp-1"
      style={{ color: focused ? "#00CBF7" : "white" }}
    >
      Store
    </Text>
  ),
  tabBarIcon: ({ focused }) => {
    if (focused) {
      return (
        <View className="border-4 border-white" style={styles.fabIconContainer}>
          <View style={styles.fabIconInnerContainer}>
            <StoreIcon />
          </View>
        </View>
      );
    }
    return <StoreIcon />;
  },
};

const LeaderBoardOptions: BottomTabNavigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text
      className="font-bold line-clamp-1"
      style={{ color: focused ? "#00CBF7" : "white" }}
    >
      LeaderBoard
    </Text>
  ),
  tabBarIcon: ({ focused }) => {
    if (focused) {
      return (
        <View className="border-4 border-white" style={styles.fabIconContainer}>
          <View style={styles.fabIconInnerContainer}>
            <TrophyIcon />
          </View>
        </View>
      );
    }
    return <TrophyIcon />;
  },
};

const SettingsOptions: BottomTabNavigationOptions = {
  tabBarLabel: ({ focused }) => (
    <Text
      className="font-bold line-clamp-1"
      style={{ color: focused ? "#00CBF7" : "white" }}
    >
      Settings
    </Text>
  ),
  tabBarIcon: ({ focused }) => {
    if (focused) {
      return (
        <View className="border-4 border-white" style={styles.fabIconContainer}>
          <View style={styles.fabIconInnerContainer}>
            <SettingsIcon />
          </View>
        </View>
      );
    }
    return <SettingsIcon />;
  },
};

export default function Index() {
  try {
    verifyInstallation();
  } catch {
    console.log("Native wind not installed");
  }

  return (
    <Tab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{
        backgroundColor: "white",
      }}
      screenOptions={{
        tabBarStyle: {
          borderColor: "white",
          height: 70,
          width: "100%",
          paddingTop: 15,
          paddingHorizontal: 10,
          paddingBottom: 18,
          elevation: 5,
          shadowColor: "gray",
          backgroundColor: "#17478B",
        },
        tabBarHideOnKeyboard: Platform.OS !== "ios",
        tabBarLabel: undefined,
        // headerShown: false,
        headerStyle: { backgroundColor: "white" },
      }}
    >
      <Tab.Screen
        name="Home"
        options={HomeOptions}
        component={HomeScreen}
        initialParams={{ reload: false }}
      />
      <Tab.Screen
        name="Wallet"
        options={WalletOptions}
        component={OtherScreen}
        initialParams={{ reload: false }}
      />
      <Tab.Screen
        name="Store"
        options={StoreOptions}
        component={OtherScreen}
        initialParams={{ reload: false }}
      />
      <Tab.Screen
        name="LeaaderBoard"
        options={LeaderBoardOptions}
        component={OtherScreen}
        initialParams={{ reload: false }}
      />
      <Tab.Screen
        name="Settings"
        options={SettingsOptions}
        component={OtherScreen}
        initialParams={{ reload: false }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  fabIconContainer: {
    borderRadius: 200,
    position: "absolute",
    bottom: 4,
    borderColor: "white",
    borderWidth: 8,
    // borderTopWidth: 0,
  },
  fabIconInnerContainer: {
    // padding: 12,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#2A75BC",
    borderRadius: 100,
    // shadowColor: "#000", 
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.3,
    // shadowRadius: 3,
    // elevation: 5,
  },
  fabIcon: {
    position: "relative",
  },
});
