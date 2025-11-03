import React from 'react'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import FilmDetailScreen from '../index'
import { mockTheme } from '../../../test-utils/theme'
import watchlistSlice from '../../../store/slice/watchlist'

jest.mock('../../../hooks/useFilms', () => ({
  useGetFilmById: () => ({ data: null, isLoading: false }),
}))

jest.mock('../../../hooks/useFilmDetailsData', () => ({
  useFilmDetailData: () => ({
    filmDetails: [],
    imageSource: { uri: '' },
    releaseYear: '2024',
  }),
}))

const mockStore = configureStore({
  reducer: {
    watchlist: watchlistSlice.reducer,
  },
})

const mockRoute = {
  params: { filmId: 123 },
  key: 'test',
  name: 'FilmDetail' as const,
}

const mockNavigation: any = {
  goBack: jest.fn(),
  navigate: jest.fn(),
}

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <Provider store={mockStore}>
      <ThemeProvider theme={mockTheme}>{component}</ThemeProvider>
    </Provider>,
  )
}

describe('FilmDetailScreen', () => {
  it('should render correctly', () => {
    const { toJSON } = renderWithProviders(
      <FilmDetailScreen route={mockRoute} navigation={mockNavigation} />,
    )
    expect(toJSON()).toBeTruthy()
  })
})
