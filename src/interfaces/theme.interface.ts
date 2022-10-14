interface Color {
  main: string
  light: string
  dark: string
  contrastText: string
}

interface Common {
  white: string
  black: string
}

interface GreyColor {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  A100: string
  A200: string
  A400: string
  A700: string
}

interface TextColor {
  primary: string
  secondary: string
  disabled: string
}

interface Shadow {
  small: string
  default: string
  large: string
}

interface Typography {
  fontFamily: string
  fontWeight: number
  fontSize: string
  lineHeight: number
  letterSpacing: string
  textTransform: string
}

interface Palette {
  common: Common
  primary: Color
  secondary: Color
  error: Color
  warning: Color
  info: Color
  success: Color
  grey: GreyColor
  text: TextColor
  divider: string
  background: string
  mode: 'light' | 'dark'
}

interface FontType extends Pick<Typography, 'fontFamily' | 'fontSize'> {
  fontWeightLight: number
  fontWeightRegular: number
  fontWeightMedium: number
  fontWeightBold: number
  h1: Omit<Typography, 'textTransform'>
  h2: Omit<Typography, 'textTransform'>
  h3: Omit<Typography, 'textTransform'>
  h4: Omit<Typography, 'textTransform'>
  h5: Omit<Typography, 'textTransform'>
  h6: Omit<Typography, 'textTransform'>
  subtitle1: Omit<Typography, 'textTransform'>
  subtitle2: Omit<Typography, 'textTransform'>
  body1: Omit<Typography, 'textTransform'>
  body2: Omit<Typography, 'textTransform'>
  button: Typography
  caption: Omit<Typography, 'textTransform'>
  overline: Typography
}

export interface ThemeType {
  palette: Palette
  shadows: Shadow
  typography: FontType
}
