import { useQuery } from '@tanstack/react-query'
import { tmdbService } from '../services/tmdb.service'

export const useGetFilmById = (id: number) => {
  return useQuery({
    queryKey: ['films', id],
    queryFn: () => tmdbService.fetchFilmById(id),
    staleTime: 5 * 60_000,
  })
}

export const useGetPopularFilms = () => {
  return useQuery({
    queryKey: ['films', 'popular'],
    queryFn: () => tmdbService.fetchPopular(),
    staleTime: 5 * 60_000,
  })
}

export const useGetTopRatedFilms = () => {
  return useQuery({
    queryKey: ['films', 'top-rated'],
    queryFn: () => tmdbService.fetchTopRated(),
    staleTime: 5 * 60_000,
  })
}

export const useGetUpcomingFilms = () => {
  return useQuery({
    queryKey: ['films', 'upcoming'],
    queryFn: () => tmdbService.fetchUpcoming(),
    staleTime: 5 * 60_000,
  })
}
