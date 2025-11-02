import { TouchableOpacityProps } from 'react-native'
import React, { memo } from 'react'
import * as S from './styles'

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

function Button({ title, ...rest }: ButtonProps) {
  return (
    <S.Container {...rest}>
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}

export default memo(Button)
