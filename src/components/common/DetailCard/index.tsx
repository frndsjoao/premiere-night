import React, { memo } from 'react'
import * as S from './styles'

interface DetailCardProps {
  label: string
  value: string | number
}

function DetailCard({ label, value }: DetailCardProps) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Value>{value}</S.Value>
    </S.Container>
  )
}

export default memo(DetailCard)
