import { createMuiTheme } from '@material-ui/core'

const palette = createMuiTheme({
    palette: {
        primary: {
            main: 'hsl(12, 88%, 59%)',
            semiTransparent: 'hsla(12, 88%, 59%, 0.3)'
        },
        text: {
            primary: 'hsl(228, 39%, 23%)'
        },
        background: {
            dark: 'hsl(233, 12%, 13%)',
            veryLightPrimary: 'hsl(13, 100%, 96%)',
            paper: 'hsl(0, 0%, 98%)',
        }
    }
}).palette

const theme = createMuiTheme({
    palette,
    typography: {
        fontFamily: "'Be Vietnam', sans-serif",
        h3: {
            fontWeight: 'bold',
            letterSpacing: '-2px',
            lineHeight: '1.13',
            fontSize: '3.65rem'
        },
        h4: {
            fontWeight: 'bold',
            fontSize: '2.5rem',
            lineHeight: '1.2',
            letterSpacing: -0.7
        },
        h5: {
            fontWeight: 'bold'
        },
        body1: {
            color: palette.text.secondary,
            fontSize: '0.875rem',
            lineHeight: '1.8'
        }
    },

})

export default theme

