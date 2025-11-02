import React, { memo, useMemo } from 'react'
import { RootStackParamList } from '../../routes/types'
import { StackScreenProps } from '@react-navigation/stack'
import SafeAreaContainer from '../../components/layout/SafeAreaContainer'
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

type Props = StackScreenProps<RootStackParamList, 'FilmDetail'>

function FilmDetailScreen({ route }: Props) {
  const { filmId } = route.params
  const theme = useTheme()

  const { data: film, isLoading } = useGetFilmById(filmId)

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
    <SafeAreaContainer>
      <S.ScrollContainer>
        <S.ModalHandle />

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
            <Button title="Add to watchlist" />
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
    </SafeAreaContainer>
  )
}

export default memo(FilmDetailScreen)
