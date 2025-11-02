import { TouchableOpacityProps } from 'react-native'
import React, { memo } from 'react'
import * as S from './styles'

interface ButtonProps extends TouchableOpacityProps {
  title: string
  icon?: () => React.JSX.Element
}

function Button({ title, icon, ...rest }: ButtonProps) {
  return (
    <S.Container {...rest}>
      {icon && icon()}
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}

export default memo(Button)
