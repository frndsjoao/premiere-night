import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'
import { mockTheme } from './theme'

export const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={mockTheme}>{component}</ThemeProvider>)
}
