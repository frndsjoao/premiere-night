import React from 'react'
import SpotlightHomeScreen from '../index'
import { renderWithTheme } from '../../../test-utils/renderWithTheme'

jest.mock('../../../hooks/useFilms', () => ({
  useGetPopularFilms: () => ({ data: null, isLoading: false }),
  useGetTopRatedFilms: () => ({ data: null, isLoading: false }),
  useGetUpcomingFilms: () => ({ data: null, isLoading: false }),
}))

describe('SpotlightHomeScreen', () => {
  it('should render correctly', () => {
    const { toJSON } = renderWithTheme(<SpotlightHomeScreen />)
    expect(toJSON()).toBeTruthy()
  })

  it('should match snapshot', () => {
    const { toJSON } = renderWithTheme(<SpotlightHomeScreen />)
    expect(toJSON()).toMatchSnapshot()
  })
})
