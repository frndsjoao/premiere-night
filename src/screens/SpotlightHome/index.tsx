import React, { memo, useMemo } from 'react'
import * as S from './styles'
import {
  useGetPopularFilms,
  useGetTopRatedFilms,
  useGetUpcomingFilms,
} from '../../hooks/useFilms'
import LoadingScreen from '../../components/layout/LoadingScreen'
import FilmCarousel from '../../components/common/FilmCarousel'
import { formatDate } from '../../utils/formatDate'
import SafeAreaContainer from '../../components/layout/SafeAreaContainer'

function SpotlightHomeScreen() {
  const popularFilms = useGetPopularFilms()
  const topRatedFilms = useGetTopRatedFilms()
  const upcomingFilms = useGetUpcomingFilms()

  const upcomingSectionTitle = useMemo(
    () =>
      upcomingFilms.data
        ? `Upcoming until ${formatDate(upcomingFilms.data.dates.maximum)}`
        : 'Upcoming',
    [upcomingFilms.data],
  )

  const isLoading = useMemo(
    () =>
      popularFilms.isLoading ||
      topRatedFilms.isLoading ||
      upcomingFilms.isLoading,
    [popularFilms.isLoading, topRatedFilms.isLoading, upcomingFilms.isLoading],
  )

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <SafeAreaContainer>
      <S.ScrollContainer>
        <S.Header>
          <S.Title>Premiere Night</S.Title>
        </S.Header>

        {popularFilms.data && (
          <FilmCarousel title="Popular" films={popularFilms.data.results} />
        )}
        {topRatedFilms.data && (
          <FilmCarousel title="Top Rated" films={topRatedFilms.data.results} />
        )}
        {upcomingFilms.data && (
          <FilmCarousel
            title={upcomingSectionTitle}
            films={upcomingFilms.data.results}
          />
        )}
      </S.ScrollContainer>
    </SafeAreaContainer>
  )
}

export default memo(SpotlightHomeScreen)
