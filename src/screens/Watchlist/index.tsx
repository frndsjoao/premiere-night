import React from 'react'
import SafeAreaContainer from '../../components/layout/SafeAreaContainer'
import * as S from './styles'
import FilmCard from '../../components/common/FilmCard'
import { useAppSelector } from '../../store'

export default function WatchlistScreen() {
  const watchlist = useAppSelector(state => state.watchlist.films)

  return (
    <SafeAreaContainer>
      <S.ScrollContainer>
        <S.Header>
          <S.Title>Premiere Night</S.Title>
          <S.Subtitle>Your watchlist</S.Subtitle>
        </S.Header>

        <S.Content>
          {watchlist.map(film => (
            <FilmCard film={film} />
          ))}
        </S.Content>
      </S.ScrollContainer>
    </SafeAreaContainer>
  )
}
