import React, { useCallback, memo } from 'react'
import { ListRenderItemInfo } from 'react-native'
import { IFilm } from '../../../@types/Film'
import FilmCard from '../FilmCard'
import * as S from './styles'

interface FilmCarouselProps {
  films: IFilm[]
  title?: string
}

const FilmCarousel = ({ films, title }: FilmCarouselProps) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<IFilm>) => (
      <S.CardWrapper>
        <FilmCard film={item} />
      </S.CardWrapper>
    ),
    [],
  )

  const keyExtractor = useCallback((item: IFilm) => item.id.toString(), [])

  return (
    <S.Container>
      {title && <S.Title>{title}</S.Title>}
      <S.FlatListWrapper
        keyExtractor={keyExtractor}
        data={films}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews
        maxToRenderPerBatch={5}
        initialNumToRender={3}
      />
    </S.Container>
  )
}

export default memo(FilmCarousel)
