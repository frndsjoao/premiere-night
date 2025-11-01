import React, { memo } from 'react'
import * as S from './styles'

interface SafeAreaContainerProps {
  children: React.ReactNode
  edges?: Array<'top' | 'bottom' | 'left' | 'right'>
}

function SafeAreaContainer({
  edges = ['top'],
  children,
}: SafeAreaContainerProps) {
  return <S.Container edges={edges}>{children}</S.Container>
}

export default memo(SafeAreaContainer)
