import { createTheme } from '@mui/material'

export const Theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff'
    // contrastText: '#036998'
    },
    secondary: {
      main: '#036998'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'arial',
          fontWeight: 600,
          padding: '5px 10px',
          '&:hover': {
            background: '#036998',
            color: '#FFFFFF'
          }
        }
      }
    }
  }
})
