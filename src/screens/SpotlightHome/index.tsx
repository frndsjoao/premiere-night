import { View, Text, Button } from 'react-native'
import React, { useMemo } from 'react'
import { useAppNavigation } from '../../hooks/useAppNavigation'
import {
  useGetPopularFilms,
  useGetTopRatedFilms,
  useGetUpcomingFilms,
} from '../../hooks/useFilms'
import LoadingScreen from '../../components/layout/LoadingScreen'

export default function SpotlightHomeScreen() {
  const navigation = useAppNavigation()

  const popularFilms = useGetPopularFilms()
  const topRatedFilms = useGetTopRatedFilms()
  const upcomingFilms = useGetUpcomingFilms()

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
    <View>
      <Text>SpotlightHome</Text>
      <Button
        title="Show film"
        onPress={() => navigation.navigate('FilmDetail', { filmId: 9 })}
      />
    </View>
  )
}
