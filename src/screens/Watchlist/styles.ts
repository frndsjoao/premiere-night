import { ScrollView } from 'react-native'
import styled from 'styled-components/native'

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
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: ${({ theme }) => theme.spacing.md}px;
`

export const ScrollContainer = styled(ScrollView).attrs(({ theme }) => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: theme.spacing.lg,
  },
}))``
