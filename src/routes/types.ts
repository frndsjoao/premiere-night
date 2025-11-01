import { NavigatorScreenParams } from '@react-navigation/native'

export type MainTabParamList = {
  Spotlight: undefined
  Watchlist: undefined
}

export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<MainTabParamList>
  FilmDetail: { filmId: number }
}
