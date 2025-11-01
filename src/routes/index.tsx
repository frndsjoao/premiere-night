import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SpotlightHomeScreen from "../screens/SpotlightHome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainTabParamList, RootStackParamList } from "./types";
import FilmDetailScreen from "../screens/FilmDetail";
import WatchlistScreen from "../screens/Watchlist";

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Spotlight" component={SpotlightHomeScreen} />
      <Tab.Screen name="Watchlist" component={WatchlistScreen} />
    </Tab.Navigator>
  );
}

export function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen  name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
      <Stack.Screen  name="FilmDetail" component={FilmDetailScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}