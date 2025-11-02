import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'
import { IFilm } from '../../@types/Film'

interface WatchlistState {
  films: IFilm[]
}

const initialState: WatchlistState = {
  films: [],
}

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addToWatchlist: (state, action: PayloadAction<IFilm>) => {
      const exists = state.films.some(film => film.id === action.payload.id)
      if (!exists) {
        state.films.push(action.payload)
      }
    },

    removeFromWatchlist: (state, action: PayloadAction<number>) => {
      state.films = state.films.filter(film => film.id !== action.payload)
    },
  },
})

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions

export const selectIsInWatchlist = (filmId: number) => (state: RootState) =>
  state.watchlist.films.some(film => film.id === filmId)

export default watchlistSlice
