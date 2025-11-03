import React, { memo } from 'react'
import * as S from './styles'

interface TagProps {
  label: string
}

function Tag({ label }: TagProps) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
    </S.Container>
  )
}

export default memo(Tag)
