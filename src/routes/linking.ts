import { LinkingOptions } from '@react-navigation/native'
import { RootStackParamList } from './types'

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['premierenight://'],
  config: {
    screens: {
      MainTabs: {
        screens: {
          Spotlight: 'spotlight',
          Watchlist: 'watchlist',
        },
      },
      FilmDetail: {
        path: 'movie/:filmId',
        parse: {
          filmId: (filmId: string) => Number(filmId),
        },
        stringify: {
          filmId: (filmId: number) => String(filmId),
        },
      },
    },
  },
}
