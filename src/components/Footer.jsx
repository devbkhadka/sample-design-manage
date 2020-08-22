import React from 'react'
import { makeStyles, Typography, Input, TextField } from '@material-ui/core'
import { Box } from '@material-ui/core'
import clsx from 'clsx'
import { RoundedButton } from './buttons'


function Footer({ className }) {
    const classes = useStyles()
    return (
        <Box className={clsx(classes.footerBackground, className)}>
            <Box className={clsx(classes.root)}>
                <img className="footer-logo" src="/images/logo-white.svg" alt="manage logo"/>
                <Box className="subscribe">
                    <input placeholder="Updates in your inbox..."></input>
                    <RoundedButton color="primary">Go</RoundedButton>
                </Box>
                <Box className="menu1">
                    <Typography variant="body2">Home</Typography>
                    <Typography variant="body2">Pricing</Typography>
                    <Typography variant="body2">Products</Typography>
                    <Typography variant="body2">About Us</Typography>
                </Box>
                <Box className="menu2">
                    <Typography variant="body2">Carriers</Typography>
                    <Typography variant="body2">Community</Typography>
                    <Typography variant="body2">Privacy Policy</Typography>
                </Box>
                <Box className="social-icons">
                    <img src="/images/icon-facebook.svg" alt="facebook"/>
                    <img src="/images/icon-instagram.svg" alt="instagram"/>
                    <img src="/images/icon-pinterest.svg" alt="pinterest"/>
                    <img src="/images/icon-twitter.svg" alt="twitter"/>
                    <img src="/images/icon-youtube.svg" alt="youtube"/>
                </Box>
                <Typography className="copyright" variant="caption">Copyright 2020. All Right Reserved</Typography>
            </Box>
        </Box>
    )
}

const useStyles = makeStyles(theme=>({
    footerBackground: {
        display: 'flex',
        justifyContent: 'center',
        background: theme.palette.background.dark,
        padding: '4rem 2rem',
        marginTop: '-3.5rem',
    },
    root: {
        color: 'white',
        width: '100%',
        maxWidth: 'var(--max-width)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        gridTemplateAreas: `
            "footer-logo menu1 menu2 subscribe"
            "social-icons menu1 menu2 copyright"
        `,
        '& .footer-logo': {
            gridArea: 'footer-logo'
        },
        '& .menu1': {
            gridArea: 'menu1'
        },
        '& .menu2': {
            gridArea: 'menu2'
        },
        '& .menu1>*, .menu2>*': {
            marginBottom: '0.9rem',
            marginLeft: '1rem',
        },
        '& .subscribe': {
            gridArea: 'subscribe',
            height: 'fit-content',
            display: 'flex',
            alignItems: 'center',
            '&>*': {
                margin: '2px'
            },
            '& button': {
                padding: '0.7rem',
                marginLeft: '1rem',
            },
            '& input': {
                fontSize: "0.87rem",
                padding:'0.8rem 1.5rem',
                borderRadius: '2rem',
                outline: 'none',
                border: 'none',
                margin: '2px',
            }
        },
        '& .social-icons': {
            gridArea: 'social-icons',
            alignSelf: 'end',
            '&>*': {
                margin: '0.4rem'
            }
        },
        '& .copyright': {
            gridArea: 'copyright',
            alignSelf: 'end',
            justifySelf: 'end',
            marginBottom: '1rem',
            opacity: 0.7
        },
        [theme.breakpoints.down('xs')]: {
            justifyItems: 'center',
            gridGap: '1rem',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: 'auto',
            gridTemplateAreas: `
                "subscribe subscribe"
                "menu1 menu2"
                "social-icons social-icons"
                "footer-logo footer-logo"
                "copyright copyright"
            `,
            '& .copyright': {
                justifySelf: 'unset',
            }
        }
    }
}))

export default Footer
