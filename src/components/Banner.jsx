import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { Box } from '@material-ui/core'
import clsx from 'clsx'
import { RoundedButton } from './buttons'


function Banner({ className }) {
    const classes = useStyles()
    return (
        <Box className={clsx(classes.root, className, 'text-block-margin')}>
            <Typography variant="h3">
                Bring everyone together to build better products.
            </Typography>
            <Typography variant="body1">
                Manage makes it simple for software teams to plan day-to-day 
                tasks while keeping the larger team goals in view.
            </Typography>
            <RoundedButton id="get-started" color="primary">Get Started</RoundedButton>
        </Box>
    )
}

const useStyles = makeStyles(theme=>({
    root: {
        padding: '1.3rem 0',
        '& #get-started': {
            marginTop: "2.7rem"
        }
    }
}))

export default Banner
