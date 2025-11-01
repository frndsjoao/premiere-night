import styled from 'styled-components/native'
import { FlatList } from 'react-native'
import { ITMDBMovieList } from '../../../@types/TMDBResponses'

export const Container = styled.View`
  margin-top: ${({ theme }) => theme.spacing.md}px;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.lg}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding-left: ${({ theme }) => theme.spacing.md}px;
`

export const CardWrapper = styled.View`
  margin-right: ${({ theme }) => theme.spacing.sm}px;
`

export const FlatListWrapper = styled(FlatList<ITMDBMovieList>).attrs(
  ({ theme }) => ({
    contentContainerStyle: {
      paddingHorizontal: theme.spacing.md,
      marginTop: theme.spacing.sm,
    },
  }),
)``
