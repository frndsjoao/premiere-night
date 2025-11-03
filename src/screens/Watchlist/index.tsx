import React, { useCallback } from 'react'
import SafeAreaContainer from '../../components/layout/SafeAreaContainer'
import * as S from './styles'
import FilmCard from '../../components/common/FilmCard'
import { useAppDispatch, useAppSelector } from '../../store'
import { IFilm } from '../../@types/Film'
import { ListRenderItemInfo } from 'react-native'
import { removeFromWatchlist } from '../../store/slice/watchlist'

export default function WatchlistScreen() {
  const watchlist = useAppSelector(state => state.watchlist.films)
  const dispatch = useAppDispatch()

  const handleRemoveFromWatchlist = useCallback(
    (id: number) => {
      dispatch(removeFromWatchlist(id))
    },
    [dispatch],
  )

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<IFilm>) => (
      <FilmCard
        film={item}
        handleRemoveFromWatchlist={() => handleRemoveFromWatchlist(item.id)}
      />
    ),
    [handleRemoveFromWatchlist],
  )

  const renderHeader = useCallback(
    () => (
      <S.Header>
        <S.Title>Premiere Night</S.Title>
        <S.Subtitle>Your watchlist</S.Subtitle>
      </S.Header>
    ),
    [],
  )

  const renderEmptyList = useCallback(
    () => (
      <S.EmptyContainer>
        <S.EmptyTitle>You don't have any films in your watchlist.</S.EmptyTitle>
      </S.EmptyContainer>
    ),
    [],
  )

  const keyExtractor = useCallback(
    (item: IFilm) => (item.id ? item.id.toString() : 'N/A'),
    [],
  )

  return (
    <SafeAreaContainer>
      <S.Content>
        <S.FlatListWrapper
          keyExtractor={keyExtractor}
          data={watchlist}
          renderItem={renderItem}
          numColumns={2}
          removeClippedSubviews
          maxToRenderPerBatch={10}
          initialNumToRender={6}
          ListHeaderComponent={renderHeader}
          ListEmptyComponent={renderEmptyList}
        />
      </S.Content>
    </SafeAreaContainer>
  )
}
