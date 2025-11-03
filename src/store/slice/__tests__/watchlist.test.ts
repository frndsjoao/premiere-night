import watchlistSlice, {
  addToWatchlist,
  removeFromWatchlist,
  selectIsInWatchlist,
} from '../watchlist'
import { IFilm } from '../../../@types/Film'

const mockFilm: IFilm = {
  adult: false,
  backdrop_path: '/backdrop.jpg',
  belongs_to_collection: {
    id: 1,
    name: 'Collection',
    poster_path: '/poster.jpg',
    backdrop_path: '/backdrop.jpg',
  },
  budget: 1000000,
  genres: [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
  ],
  homepage: 'https://example.com',
  id: 1,
  imdb_id: 'tt1234567',
  origin_country: ['US'],
  original_language: 'en',
  original_title: 'Test Movie Original',
  overview: 'Test overview',
  popularity: 100.5,
  poster_path: '/poster.jpg',
  production_companies: [],
  production_countries: [],
  release_date: '2024-03-15',
  revenue: 5000000,
  runtime: 120,
  spoken_languages: [],
  status: 'Released',
  tagline: 'Test tagline',
  title: 'Test Movie',
  video: false,
  vote_average: 8.5,
  vote_count: 1000,
}

const mockFilm2: IFilm = {
  ...mockFilm,
  id: 2,
  title: 'Another Test Movie',
}

describe('watchlist slice', () => {
  describe('reducers', () => {
    it('should return initial state', () => {
      const state = watchlistSlice.reducer(undefined, { type: 'unknown' })

      expect(state).toEqual({
        films: [],
      })
    })

    it('should add film to watchlist', () => {
      const initialState = { films: [] }
      const state = watchlistSlice.reducer(
        initialState,
        addToWatchlist(mockFilm),
      )

      expect(state.films).toHaveLength(1)
      expect(state.films[0]).toEqual(mockFilm)
    })

    it('should not add duplicate film to watchlist', () => {
      const initialState = { films: [mockFilm] }
      const state = watchlistSlice.reducer(
        initialState,
        addToWatchlist(mockFilm),
      )

      expect(state.films).toHaveLength(1)
      expect(state.films[0]).toEqual(mockFilm)
    })

    it('should add multiple different films', () => {
      let state = watchlistSlice.reducer({ films: [] }, addToWatchlist(mockFilm))
      state = watchlistSlice.reducer(state, addToWatchlist(mockFilm2))

      expect(state.films).toHaveLength(2)
      expect(state.films[0]).toEqual(mockFilm)
      expect(state.films[1]).toEqual(mockFilm2)
    })

    it('should remove film from watchlist', () => {
      const initialState = { films: [mockFilm, mockFilm2] }
      const state = watchlistSlice.reducer(
        initialState,
        removeFromWatchlist(mockFilm.id),
      )

      expect(state.films).toHaveLength(1)
      expect(state.films[0]).toEqual(mockFilm2)
    })

    it('should handle removing non-existent film', () => {
      const initialState = { films: [mockFilm] }
      const state = watchlistSlice.reducer(initialState, removeFromWatchlist(999))

      expect(state.films).toHaveLength(1)
      expect(state.films[0]).toEqual(mockFilm)
    })

    it('should handle removing from empty watchlist', () => {
      const initialState = { films: [] }
      const state = watchlistSlice.reducer(
        initialState,
        removeFromWatchlist(mockFilm.id),
      )

      expect(state.films).toHaveLength(0)
    })
  })

  describe('selectors', () => {
    it('should return true when film is in watchlist', () => {
      const state = {
        watchlist: { films: [mockFilm] },
      } as any

      const result = selectIsInWatchlist(mockFilm.id)(state)

      expect(result).toBe(true)
    })

    it('should return false when film is not in watchlist', () => {
      const state = {
        watchlist: { films: [mockFilm] },
      } as any

      const result = selectIsInWatchlist(999)(state)

      expect(result).toBe(false)
    })

    it('should return false when watchlist is empty', () => {
      const state = {
        watchlist: { films: [] },
      } as any

      const result = selectIsInWatchlist(mockFilm.id)(state)

      expect(result).toBe(false)
    })

    it('should correctly identify multiple films', () => {
      const state = {
        watchlist: { films: [mockFilm, mockFilm2] },
      } as any

      expect(selectIsInWatchlist(mockFilm.id)(state)).toBe(true)
      expect(selectIsInWatchlist(mockFilm2.id)(state)).toBe(true)
      expect(selectIsInWatchlist(999)(state)).toBe(false)
    })
  })
})
