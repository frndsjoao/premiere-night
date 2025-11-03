import React, { memo, useCallback } from 'react'
import { RootStackParamList } from '../../routes/types'
import { StackScreenProps } from '@react-navigation/stack'
import * as S from './styles'
import { useGetFilmById } from '../../hooks/useFilms'
import LoadingScreen from '../../components/layout/LoadingScreen'
import FastImage from 'react-native-fast-image'
import Button from '../../components/common/Button'
import DetailCard from '../../components/common/DetailCard'
import { useTheme } from 'styled-components/native'
import { X } from 'lucide-react-native'
import { useAppDispatch, useAppSelector } from '../../store'
import {
  addToWatchlist,
  removeFromWatchlist,
  selectIsInWatchlist,
} from '../../store/slice/watchlist'
import { AddedIcon, AddIcon } from './components/FilmDetailIconBtn'
import Tag from '../../components/common/Tag'
import { useFilmDetailData } from '../../hooks/useFilmDetailsData'

type Props = StackScreenProps<RootStackParamList, 'FilmDetail'>

function FilmDetailScreen({ route, navigation }: Props) {
  const { filmId } = route.params
  const theme = useTheme()
  const dispatch = useAppDispatch()

  const { data: film, isLoading } = useGetFilmById(filmId)
  const { filmDetails, imageSource, releaseYear } = useFilmDetailData(film)

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
            {film.vote_average > 0 && (
              <S.Label>★ {film.vote_average.toFixed(1)}</S.Label>
            )}
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

          <S.TagSection>
            {film.genres.map(item => (
              <Tag key={item.id} label={item.name} />
            ))}
          </S.TagSection>

          <S.Section>
            <S.SectionTitle>Synposis</S.SectionTitle>
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
