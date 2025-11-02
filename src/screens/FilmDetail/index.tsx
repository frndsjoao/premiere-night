import React, { memo, useCallback, useMemo } from 'react'
import { RootStackParamList } from '../../routes/types'
import { StackScreenProps } from '@react-navigation/stack'
import * as S from './styles'
import { useGetFilmById } from '../../hooks/useFilms'
import LoadingScreen from '../../components/layout/LoadingScreen'
import FastImage from 'react-native-fast-image'
import { formatDate, getYear } from '../../utils/formatDate'
import { TMDB_IMAGE_URL } from '@env'
import Button from '../../components/common/Button'
import DetailCard from '../../components/common/DetailCard'
import { getLanguageName } from '../../utils/getLanguageName'
import { useTheme } from 'styled-components/native'
import { X } from 'lucide-react-native'
import { useAppDispatch, useAppSelector } from '../../store'
import {
  addToWatchlist,
  removeFromWatchlist,
  selectIsInWatchlist,
} from '../../store/slice/watchlist'
import { AddedIcon, AddIcon } from './components/FilmDetailIconBtn'

type Props = StackScreenProps<RootStackParamList, 'FilmDetail'>

function FilmDetailScreen({ route, navigation }: Props) {
  const { filmId } = route.params
  const theme = useTheme()
  const dispatch = useAppDispatch()

  const { data: film, isLoading } = useGetFilmById(filmId)
  const filmIsInWatchlist = useAppSelector(state =>
    film ? selectIsInWatchlist(film?.id)(state) : false,
  )

  const handleClose = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  const handleWatchlist = useCallback(async () => {
    if (!film) return
    if (filmIsInWatchlist) {
      dispatch(removeFromWatchlist(film?.id))
    } else {
      dispatch(addToWatchlist(film))
    }
  }, [dispatch, film, filmIsInWatchlist])

  const imageSource = useMemo(() => {
    let uri = ''
    if (film?.poster_path) {
      uri = `${TMDB_IMAGE_URL}${film?.poster_path}`
    }

    return {
      uri,
      priority: FastImage.priority.normal,
      cache: FastImage.cacheControl.immutable,
    }
  }, [film?.poster_path])

  const releaseYear = useMemo(
    () => (film?.release_date ? getYear(film.release_date) : ''),
    [film?.release_date],
  )

  const filmDetails = useMemo(() => {
    return [
      { label: 'Release date', value: formatDate(film?.release_date ?? '') },
      { label: 'Status', value: film?.status ?? '' },
      {
        label: 'Main production',
        value: film?.production_companies?.[0]?.name ?? 'N/A',
      },
      {
        label: 'Language',
        value: getLanguageName(film?.original_language ?? ''),
      },
    ]
  }, [
    film?.original_language,
    film?.production_companies,
    film?.release_date,
    film?.status,
  ])

  if (isLoading || !film) {
    return <LoadingScreen />
  }

  return (
    <S.Container>
      <S.ModalHandle />

      <S.CloseButton onPress={handleClose}>
        <X size={20} color={theme.colors.text} />
      </S.CloseButton>

      <S.ScrollContainer>
        <S.CoverContainer>
          <S.Cover
            source={imageSource}
            resizeMode={FastImage.resizeMode.cover}
          />
          <S.CoverGradient
            colors={['transparent', theme.colors.background]}
            locations={[0, 1]}
          />
        </S.CoverContainer>
        <S.Content>
          <S.Title>{film?.title}</S.Title>

          <S.Info>
            <S.Label>★ {film.vote_average}</S.Label>
            <S.Label>{releaseYear}</S.Label>
            <S.Label>{film.runtime} min</S.Label>
          </S.Info>

          <S.ButtonWrapper>
            <Button
              icon={filmIsInWatchlist ? AddedIcon : AddIcon}
              title={filmIsInWatchlist ? 'Added' : 'Add to watchlist'}
              onPress={handleWatchlist}
            />
          </S.ButtonWrapper>

          <S.Section>
            <S.SectionTitle>Overview</S.SectionTitle>
            <S.Label>{film.overview}</S.Label>
          </S.Section>

          <S.Section>
            <S.SectionTitle>Details</S.SectionTitle>
            <S.GridContainer>
              {filmDetails.map((item, index) => (
                <S.GridItem key={index}>
                  <DetailCard label={item.label} value={item.value} />
                </S.GridItem>
              ))}
            </S.GridContainer>
          </S.Section>
        </S.Content>
      </S.ScrollContainer>
    </S.Container>
  )
}

export default memo(FilmDetailScreen)
