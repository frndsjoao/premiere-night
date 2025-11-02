import { ScrollView } from 'react-native'
import FastImage from 'react-native-fast-image'
import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled.View`
  flex: 1;
  margin-top: 60px;
  background-color: ${({ theme }) => theme.colors.background};
  border-top-left-radius: ${({ theme }) => theme.borderRadius.lg}px;
  border-top-right-radius: ${({ theme }) => theme.borderRadius.lg}px;
  overflow: hidden;
`

export const ModalHandle = styled.View`
  width: 50px;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius.xl}px;
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  margin-bottom: ${({ theme }) => theme.spacing.md}px;
  margin-right: auto;
  margin-left: auto;
`

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  z-index: 99;
  right: ${({ theme }) => theme.spacing.sm}px;
  top: ${({ theme }) => theme.spacing.sm}px;
  width: ${({ theme }) => theme.spacing.xl}px;
  height: ${({ theme }) => theme.spacing.xl}px;
  border-radius: ${({ theme }) => theme.borderRadius.xl}px;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
`

export const CoverContainer = styled.View`
  height: 380px;
  width: 100%;
  position: relative;
`

export const Cover = styled(FastImage)`
  height: 380px;
  width: 100%;
`

export const CoverGradient = styled(LinearGradient)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
`

export const Content = styled.View`
  flex: 1;
  margin-top: ${({ theme }) => theme.spacing.md}px;
  padding-left: ${({ theme }) => theme.spacing.md}px;
  padding-right: ${({ theme }) => theme.spacing.md}px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl}px;
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  margin-bottom: ${({ theme }) => theme.spacing.sm}px;
`

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

export const ButtonWrapper = styled.View`
  width: 50%;
`

export const Section = styled.View`
  margin-top: ${({ theme }) => theme.spacing.lg}px;
  margin-bottom: ${({ theme }) => theme.spacing.lg}px;
`

export const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.lg}px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`

export const ScrollContainer = styled(ScrollView).attrs(({ theme }) => ({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: theme.spacing.lg,
  },
}))``

export const GridContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spacing.md}px;
  margin-left: -${({ theme }) => theme.spacing.sm}px;
  margin-right: -${({ theme }) => theme.spacing.sm}px;
`

export const GridItem = styled.View`
  width: 50%;
  padding: ${({ theme }) => theme.spacing.sm}px;
`
