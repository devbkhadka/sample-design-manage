import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { Box } from '@material-ui/core'
import clsx from 'clsx'


function Difference({ className }) {
    const classes = useStyles()
    return (
        <Box className={clsx(classes.root, className, 'text-block-margin')}>
            <Typography variant="h4">
                What’s different about Manage?
            </Typography>
            <Typography variant='body1'>
                Manage provides all the functionality your team needs, without 
                the complexity. Our software is tailor-made for modern digital 
                product teams. 
            </Typography>
        </Box>
    )
}

const useStyles = makeStyles(theme=>({
    root: {
        padding: '2.2rem 0'
    }
}))

export default Difference
