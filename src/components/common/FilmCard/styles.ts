import FastImage from 'react-native-fast-image'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  width: 180px;
`

export const Info = styled.View`
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  gap: ${({ theme }) => theme.spacing.xs}px;
`

export const Cover = styled(FastImage)`
  height: 250px;
  width: 180px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-transform: capitalize;
`

export const ReleasedDate = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-transform: capitalize;
`
