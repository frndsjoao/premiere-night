import { ScrollView } from 'react-native'
import styled from 'styled-components/native'

export const Header = styled.View`
  margin: ${({ theme }) => theme.spacing.md}px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 1.75px;
  text-transform: uppercase;
`
export const ScrollContainer = styled(ScrollView).attrs(({ theme }) => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: theme.spacing.lg,
  },
}))``
