import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { Box } from '@material-ui/core'
import clsx from 'clsx'
import { RoundedButton } from './buttons'


function GetStarted({ className }) {
    const classes = useStyles()
    return (
        <Box className={clsx(classes.getStartedBackground, className)}>
            <Box className={classes.root}>
                <Typography variant="h4">
                    Simplify how your team works today.
                </Typography>
                <RoundedButton color="secondary">Get Started</RoundedButton>
            </Box>
        </Box>
    )
}

const useStyles = makeStyles(theme=>({
    getStartedBackground: {
        display: 'flex',
        justifyContent: 'center',
        padding: '3rem 2rem',
        marginTop: '-2rem',
        background: `url("/images/bg-tablet-pattern.svg") top -200px right -200px no-repeat,
            url("/images/bg-tablet-pattern.svg") bottom -150px left 150px no-repeat
        `,
        backgroundColor: theme.palette.primary.main,
        backgroundBlendMode: 'soft-light',
        backgroundSize: 300,
    },
    root: {
        padding: '1rem 0',
        display: 'flex',
        justifyContent: "space-between",
        alignItems: 'center',
        color: 'white',
        width: '100%',
        maxWidth: 'var(--max-width)',
        '& .MuiButton-contained': {
            background: theme.palette.primary.contrastText,
            color: theme.palette.primary.main,
            whiteSpace: 'nowrap',
            height: 'fit-content',
            margin: '1rem 0'
        },
        '& .MuiTypography-h4': {
            maxWidth: 480
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
        }
    }
}))

export default GetStarted
