import { IFilm } from '../@types/Film'
import { ITMDBResponse, ITMDBUpcomingResponse } from '../@types/TMDBResponses'
import { api } from './api/client'

export const tmdbService = {
  fetchFilmById: async (id: number): Promise<IFilm> => {
    const { data } = await api.get<IFilm>(`/movie/${id}`)

    return data
  },

  fetchPopular: async (): Promise<ITMDBResponse> => {
    const { data } = await api.get<ITMDBResponse>('/movie/popular')

    return data
  },

  fetchTopRated: async (): Promise<ITMDBResponse> => {
    const { data } = await api.get<ITMDBResponse>('/movie/top_rated')

    return data
  },

  fetchUpcoming: async (): Promise<ITMDBUpcomingResponse> => {
    const { data } = await api.get<ITMDBUpcomingResponse>('/movie/upcoming')

    return data
  },
}
