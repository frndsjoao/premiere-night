import React, { memo } from 'react'
import * as S from './styles'

function LoadingScreen() {
  return (
    <S.Container>
      <S.Loader size="large" />
      <S.Label>Loading...</S.Label>
    </S.Container>
  )
}

export default memo(LoadingScreen)
