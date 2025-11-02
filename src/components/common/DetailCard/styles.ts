import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  gap: ${({ theme }) => theme.spacing.xs}px;
`

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: 0.5px;
  text-transform: uppercase;
`

export const Value = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`
