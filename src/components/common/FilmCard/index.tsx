import React, { memo, useCallback, useMemo } from 'react'
import * as S from './styles'
import { getYear } from '../../../utils/formatDate'
import FastImage from 'react-native-fast-image'
import { useAppNavigation } from '../../../hooks/useAppNavigation'
import { ITMDBMovieList } from '../../../@types/TMDBResponses'
import { IFilm } from '../../../@types/Film'
import { Trash2 } from 'lucide-react-native'
import { useTheme } from 'styled-components/native'
import { useImageSource } from '../../../hooks/useImageSource'

interface FilmCardProps {
  film: ITMDBMovieList | IFilm
  handleRemoveFromWatchlist?: () => void
}

function FilmCard({ film, handleRemoveFromWatchlist }: FilmCardProps) {
  const navigation = useAppNavigation()
  const theme = useTheme()

  const imageSource = useImageSource(film.poster_path)

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
      {handleRemoveFromWatchlist && (
        <S.WatchlistIcon onPress={handleRemoveFromWatchlist}>
          <Trash2 size={18} color={theme.colors.button} />
        </S.WatchlistIcon>
      )}
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
