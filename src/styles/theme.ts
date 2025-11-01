import { DefaultTheme } from 'styled-components/native'

export const darkTheme: DefaultTheme = {
  colors: {
    primary: '#E50914',
    secondary: '#B81D24',
    background: '#141414',
    surface: '#1F1F1F',
    text: '#FFFFFF',
    textSecondary: '#B3B3B3',
    error: '#F44336',
    success: '#4CAF50',
    warning: '#FF9800',
    border: '#333333',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
    xxl: 32,
  },
  fontWeights: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
}
