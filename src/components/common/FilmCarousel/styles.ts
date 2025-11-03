import styled from 'styled-components/native'
import { FlatList } from 'react-native'
import { ITMDBMovieList } from '../../../@types/TMDBResponses'
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled.View`
  margin-top: ${({ theme }) => theme.spacing.md}px;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`

export const CarouselWrapper = styled.View`
  position: relative;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.lg}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding-left: ${({ theme }) => theme.spacing.md}px;
`

export const FlatListWrapper = styled(FlatList<ITMDBMovieList>).attrs(
  ({ theme }) => ({
    contentContainerStyle: {
      paddingHorizontal: theme.spacing.md,
      marginTop: theme.spacing.sm,
      gap: theme.spacing.md,
    },
  }),
)``

export const FadeGradient = styled(LinearGradient)`
  position: absolute;
  right: 0;
  top: ${({ theme }) => theme.spacing.sm}px;
  height: 250px;
  width: 80px;
  pointer-events: none;
  z-index: 1;
`
