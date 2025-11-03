import React, { useCallback, memo } from 'react'
import { ListRenderItemInfo } from 'react-native'
import FilmCard from '../FilmCard'
import * as S from './styles'
import { ITMDBMovieList } from '../../../@types/TMDBResponses'

interface FilmCarouselProps {
  films: ITMDBMovieList[]
  title?: string
}

const FilmCarousel = ({ films, title }: FilmCarouselProps) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<ITMDBMovieList>) => <FilmCard film={item} />,
    [],
  )

  const keyExtractor = useCallback(
    (item: ITMDBMovieList) => item.id.toString(),
    [],
  )

  return (
    <S.Container>
      {title && <S.Title>{title}</S.Title>}
      <S.CarouselWrapper>
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
        <S.FadeGradient
          colors={[
            'rgba(0, 0, 0, 0)',
            'rgba(0, 0, 0, 0.4)',
            'rgba(0, 0, 0, 0.6)',
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      </S.CarouselWrapper>
    </S.Container>
  )
}

export default memo(FilmCarousel)
