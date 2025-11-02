import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.button};
  padding: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
  align-items: center;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.textNegative};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`
