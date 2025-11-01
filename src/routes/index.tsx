import { createStackNavigator } from '@react-navigation/stack'
import SpotlightHomeScreen from '../screens/SpotlightHome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MainTabParamList, RootStackParamList } from './types'
import FilmDetailScreen from '../screens/FilmDetail'
import WatchlistScreen from '../screens/Watchlist'

const Stack = createStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator<MainTabParamList>()

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Spotlight" component={SpotlightHomeScreen} />
      <Tab.Screen name="Watchlist" component={WatchlistScreen} />
    </Tab.Navigator>
  )
}

export function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen
        name="FilmDetail"
        component={FilmDetailScreen}
        options={{
          presentation: 'modal',
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateY: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.height, 0],
                    }),
                  },
                ],
              },
            }
          },
        }}
      />
    </Stack.Navigator>
  )
}
