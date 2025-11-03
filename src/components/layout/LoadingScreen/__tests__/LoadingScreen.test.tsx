import React from 'react'
import LoadingScreen from '../index'
import { renderWithTheme } from '../../../../test-utils/renderWithTheme'

describe('LoadingScreen Component', () => {
  it('should render loading text', () => {
    const { getByText } = renderWithTheme(<LoadingScreen />)

    expect(getByText('Loading...')).toBeTruthy()
  })

  it('should match snapshot', () => {
    const { toJSON } = renderWithTheme(<LoadingScreen />)

    expect(toJSON()).toMatchSnapshot()
  })
})
