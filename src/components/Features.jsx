import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { Box } from '@material-ui/core'
import clsx from 'clsx'

const features = 
[
    {
        index: "01",
        title: "Track company-wide progress",
        content: `See how your day-to-day tasks fit into the wider vision. Go from 
        tracking progress at the milestone level all the way done to the 
        smallest of details. Never lose sight of the bigger picture again.`
    },
    {
        index: "02",
        title: "Advanced built-in reports",
        content: `Set internal delivery estimates and track progress toward company 
        goals. Our customisable dashboard helps you build out the reports 
        you need to keep key stakeholders informed.`
    },
    {
        index: "03",
        title: "Everything you need in one place",
        content: `Stop jumping from one service to another to communicate, store files, 
        track tasks and share documents. Manage offers an all-in-one team 
        productivity solution.`
    }
]

function Features({ className }) {
    const classes = useStyles()
    return (
        <Box className={clsx(classes.root, className)}>
            {
                features.map(feature=>(
                    <>
                        <Box className="feature" key={feature.index}>
                            <Typography className="index" variant="body1">
                                {feature.index}
                            </Typography>
                            <Typography className="title" variant="body1">
                                {feature.title}
                            </Typography>
                        </Box>
                        <Typography className="content" variant="body1">
                            {feature.content}
                        </Typography>
                    </>
                ))
            }
            
            
        </Box>
    )
}

const useStyles = makeStyles(theme=>({
    root: {
        padding: '4.8rem 1rem 0 1rem',
        '& .index': {
            display: 'inline',
            background: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            padding: '0.6rem 1.5rem',
            borderRadius: '2rem',
            marginRight: '2rem',
            fontWeight: 'bold'
        },
        '& .title': {
            display: 'inline',
            fontWeight: 'bold',
            color: theme.palette.text.primary
        },
        '& .content': {
            margin: '1rem 2rem 3.2rem 6rem',
        },
        [theme.breakpoints.down('xs')]: {
            '& .content': {
                margin: '1rem 2rem 3.2rem 1rem',
            },
            '& .feature': {
                display: 'flex',
                paddingLeft: 0,
                alignItems: 'center',
                backgroundColor: theme.palette.primary.semiTransparent,
                marginRight: '-2rem'
            },
            '& .title': {
                fontSize: '1rem'
            },
            '& .index': {
                marginLeft: '-1rem',
                marginRight: '1rem'
            }
        }
    }
}))

export default Features
