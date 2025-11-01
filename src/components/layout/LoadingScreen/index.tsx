import React from 'react'
import { ActivityIndicator } from 'react-native'
import * as S from './styles'

export default function LoadingScreen() {
  return (
    <S.Container>
      <ActivityIndicator size="large" color="#FFF" />
    </S.Container>
  )
}
