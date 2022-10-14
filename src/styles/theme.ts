const colors = {
  common: {
    black: '#000',
    white: '#FFF'
  },
  primary: {
    main: '#1976d2',
    light: '#42a5f5',
    dark: '#1565c0'
  },
  secondary: {
    main: '#9c27b0',
    light: '#ba68c8',
    dark: '#7b1fa2'
  },
  error: {
    main: '#d32f2f',
    light: '#ef5350',
    dark: '#c62828'
  },
  warning: {
    main: '#ed6c02',
    light: '#ff9800',
    dark: '#e65100'
  },
  info: {
    main: '#0288d1',
    light: '#03a9f4',
    dark: '#01579b'
  },
  success: {
    main: '#2e7d32',
    light: '#4caf50',
    dark: '#1b5e20'
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161'
  }
}

const darkModeShadows = {
  small:
    '0px 2px 2px -2px rgba(255, 255, 255, 0.08), 0px 4px 12px rgba(255, 255, 255, 0.08)',
  default:
    '0px 2px 8px -4px rgba(255, 255, 255, 0.12), 0px 4px 16px rgba(255, 255, 255, 0.12)',
  large:
    '0px 4px 12px -6px rgba(255, 255, 255, 0.2), 0px 8px 16px rgba(255, 255, 255, 0.16)'
}

const lightModeShadows = {
  small:
    '0px 2px 2px -2px rgba(31, 27, 45, 0.08), 0px 4px 12px rgba(31, 27, 45, 0.08)',
  default:
    '0px 2px 8px -4px rgba(31, 27, 45, 0.12), 0px 4px 16px rgba(31, 27, 45, 0.12)',
  large:
    '0px 4px 12px -6px rgba(31, 27, 45, 0.2), 0px 8px 16px rgba(31, 27, 45, 0.16)'
}

const typography = {
  fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
  fontSize: '14px',
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
    fontWeight: 300,
    fontSize: '6rem',
    lineHeight: 1.167,
    letterSpacing: '-0.01562em'
  },
  h2: {
    fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
    fontWeight: 300,
    fontSize: '3.75rem',
    lineHeight: 1.2,
    letterSpacing: '-0.00833em'
  },
  h3: {
    fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
    fontWeight: 400,
    fontSize: '3rem',
    lineHeight: 1.167,
    letterSpacing: '0em'
  },
  h4: {
    fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
    fontWeight: 400,
    fontSize: '2.125rem',
    lineHeight: 1.235,
    letterSpacing: '0.00735em'
  },
  h5: {
    fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
    fontWeight: 400,
    fontSize: '1.5rem',
    lineHeight: 1.334,
    letterSpacing: '0em'
  },
  h6: {
    fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
    fontWeight: 500,
    fontSize: '1.25rem',
    lineHeight: 1.6,
    letterSpacing: '0.0075em'
  },
  subtitle1: {
    fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.75,
    letterSpacing: '0.00938em'
  },
  subtitle2: {
    fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: 1.57,
    letterSpacing: '0.00714em'
  },
  body1: {
    fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.5,
    letterSpacing: '0.00938em'
  },
  body2: {
    fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.43,
    letterSpacing: '0.01071em'
  },
  button: {
    fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: 1.75,
    letterSpacing: '0.02857em',
    textTransform: 'uppercase'
  },
  caption: {
    fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 1.66,
    letterSpacing: '0.03333em'
  },
  overline: {
    fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 2.66,
    letterSpacing: '0.08333em',
    textTransform: 'uppercase'
  }
}

const LightMode = {
  palette: {
    ...colors,
    primary: {
      ...colors.primary,
      contrastText: '#fff'
    },
    secondary: {
      ...colors.secondary,
      contrastText: '#fff'
    },
    error: {
      ...colors.error,
      contrastText: '#fff'
    },
    warning: {
      ...colors.warning,
      contrastText: '#fff'
    },
    info: {
      ...colors.info,
      contrastText: '#fff'
    },
    success: {
      ...colors.success,
      contrastText: '#fff'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)'
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: '#fff',
    mode: 'light'
  },
  shadows: lightModeShadows,
  typography
}

const DarkMode = {
  palette: {
    ...colors,
    primary: {
      ...colors.primary,
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    secondary: {
      ...colors.secondary,
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    error: {
      ...colors.error,
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    warning: {
      ...colors.warning,
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    info: {
      ...colors.info,
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    success: {
      ...colors.success,
      contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)'
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: '#121212',
    mode: 'dark'
  },
  shadows: darkModeShadows,
  typography
}

export const theme = {
  light: LightMode,
  dark: DarkMode
}
