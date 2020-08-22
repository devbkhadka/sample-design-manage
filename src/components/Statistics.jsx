import React from 'react'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'


function Statistics({ className }) {
    const classes = useStyles()
    return (
        <img src="/images/illustration-intro.svg" alt="statistics"  className={clsx(classes.root, className)}>
            
        </img>
    )
}

const useStyles = makeStyles(theme=>({
    root: {
        width: '100%'
    }
}))

export default Statistics
