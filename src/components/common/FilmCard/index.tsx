import React, { memo, useCallback, useMemo } from 'react'
import * as S from './styles'
import { getYear } from '../../../utils/formatDate'
import FastImage from 'react-native-fast-image'
import { TMDB_IMAGE_URL } from '@env'
import { useAppNavigation } from '../../../hooks/useAppNavigation'
import { ITMDBMovieList } from '../../../@types/TMDBResponses'
import { IFilm } from '../../../@types/Film'

interface FilmCardProps {
  film: ITMDBMovieList | IFilm
}

function FilmCard({ film }: FilmCardProps) {
  const navigation = useAppNavigation()

  const imageSource = useMemo(
    () => ({
      uri: `${TMDB_IMAGE_URL}${film.poster_path}`,
      priority: FastImage.priority.normal,
      cache: FastImage.cacheControl.immutable,
    }),
    [film.poster_path],
  )

  const releaseYear = useMemo(
    () => getYear(film.release_date),
    [film.release_date],
  )

  const handleNavigateToFilm = useCallback(
    (filmId: number) => {
      navigation.navigate('FilmDetail', { filmId })
    },
    [navigation],
  )

  return (
    <S.Container onPress={() => handleNavigateToFilm(film.id)}>
      <S.Cover source={imageSource} resizeMode={FastImage.resizeMode.cover} />
      <S.Info>
        <S.Title numberOfLines={2} ellipsizeMode="tail">
          {film.title}
        </S.Title>
        <S.ReleasedDate>{releaseYear}</S.ReleasedDate>
      </S.Info>
    </S.Container>
  )
}

export default memo(FilmCard)
