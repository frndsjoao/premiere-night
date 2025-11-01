import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
  flex: 1;
`

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  margin-top: ${({ theme }) => theme.spacing.md}px;
`

export const Loader = styled.ActivityIndicator`
  color: ${({ theme }) => theme.colors.text};
`
