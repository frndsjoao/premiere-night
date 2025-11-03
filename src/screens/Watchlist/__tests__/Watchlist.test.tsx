import React from 'react'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import WatchlistScreen from '../index'
import { mockTheme } from '../../../test-utils/theme'
import watchlistSlice from '../../../store/slice/watchlist'

const mockStore = configureStore({
  reducer: {
    watchlist: watchlistSlice.reducer,
  },
})

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <Provider store={mockStore}>
      <ThemeProvider theme={mockTheme}>{component}</ThemeProvider>
    </Provider>,
  )
}

describe('WatchlistScreen', () => {
  it('should render correctly', () => {
    const { toJSON } = renderWithProviders(<WatchlistScreen />)
    expect(toJSON()).toBeTruthy()
  })

  it('should match snapshot', () => {
    const { toJSON } = renderWithProviders(<WatchlistScreen />)
    expect(toJSON()).toMatchSnapshot()
  })
})
