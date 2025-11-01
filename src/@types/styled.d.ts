import 'styled-components/native'

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      background: string
      surface: string
      text: string
      textSecondary: string
      gray: string
      error: string
      success: string
      warning: string
      border: string
    }
    spacing: {
      xs: number
      sm: number
      md: number
      lg: number
      xl: number
      xxl: number
    }
    borderRadius: {
      sm: number
      md: number
      lg: number
      xl: number
    }
    fontSizes: {
      xs: number
      sm: number
      md: number
      lg: number
      xl: number
      xxl: number
    }
    fontWeights: {
      regular: string
      medium: string
      semibold: string
      bold: string
    }
  }
}
