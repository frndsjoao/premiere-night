import { FlatList, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import { IFilm } from '../../@types/Film'

export const Header = styled.View`
  margin-top: ${({ theme }) => theme.spacing.md}px;
  margin-left: ${({ theme }) => theme.spacing.md}px;
  margin-right: ${({ theme }) => theme.spacing.md}px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
  gap: ${({ theme }) => theme.spacing.md}px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 1.75px;
  text-transform: uppercase;
`

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.lg}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-top: ${({ theme }) => theme.spacing.md}px;
`

export const Content = styled.View`
  flex: 1;
`

export const EmptyContainer = styled.View`
  align-items: center;
  justify-content: center;
`

export const EmptyTitle = styled.Text`
  margin-top: ${({ theme }) => theme.spacing.xxl}px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.xs}px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

export const ScrollContainer = styled(ScrollView).attrs(({ theme }) => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: theme.spacing.lg,
  },
}))``

export const FlatListWrapper = styled(FlatList<IFilm>).attrs(({ theme }) => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: theme.spacing.md,
    paddingBottom: theme.spacing.lg,
    gap: theme.spacing.md,
  },
  columnWrapperStyle: {
    gap: theme.spacing.sm,
    justifyContent: 'space-between',
  },
}))``
