import React, { useEffect, useRef, useState, useMemo } from 'react'
import { makeStyles, useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';
import { Box , Paper, Typography } from '@material-ui/core'
import clsx from 'clsx'
import { RoundedButton } from './buttons'


const testimonials = [
    {
        name: 'Anisha Li',
        comment: `“Manage has supercharged our team’s workflow. The ability to maintain 
        visibility on larger milestones at all times keeps everyone motivated.”`,
        image: '/images/avatar-anisha.png'
    },

    {
        name: 'Ali Bravo',
        comment: `“We have been able to cancel so many other subscriptions since using 
        Manage. There is no more cross-channel confusion and everyone is much 
        more focused.”`,
        image: '/images/avatar-ali.png'
    },

    {
        name: 'Richard Watts',
        comment: `“Manage allows us to provide structure and process. It keeps us organized 
        and focused. I can’t stop recommending them to everyone I talk to!”`,
        image: '/images/avatar-richard.png'
    },

    {
        name: 'Shanai Gough',
        comment: `“Their software allows us to track, manage and collaborate on our projects 
        from anywhere. It keeps the whole team in-sync without being intrusive.”`,
        image: '/images/avatar-shanai.png'
    },
]

function getShiftedTestimonials(position, testimonials){
    const shiftedTestimonials = []
    for(let i=0; i < testimonials.length; i++) {
        shiftedTestimonials.push(testimonials[(position + i) % testimonials.length])
    }
    return shiftedTestimonials
}

function Testimonials({ className }) {
    const classes = useStyles()
    const theme = useTheme()
    const scrollRef = useRef()
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(()=>{
        const id = setInterval(()=>{
            setScrollPosition(scrollPosition => {
                scrollRef.current.classList.remove('scrolling')
                return (scrollPosition + 1) % testimonials.length
            })
        }, 3000)
        return ()=> clearInterval(id)
    }, [])

    useEffect(()=>{
        scrollRef.current.classList.add('scrolling')
    }, [scrollPosition])

    const shiftedTestimonials = useMemo(
        () => getShiftedTestimonials(scrollPosition, testimonials),
        [scrollPosition]
    )
    
    return (
        <Box className={clsx(classes.root, className, 'text-block-margin')}>
            <Typography variant="h4">
                What they've said
            </Typography>
            <Box className="scroll">
                <Box ref={scrollRef}>
                    { shiftedTestimonials.map((testimonial, i)=>(
                        <Paper className="card" key={testimonial.name}>
                            <img src={testimonial.image} alt={testimonial.name} />
                            <Typography variant="body2">{testimonial.name}</Typography>
                            <Typography variant="body1">
                                {testimonial.comment}
                            </Typography>
                        </Paper>
                    ))}
                </Box>
            </Box>
            <RoundedButton color="primary">Get Started</RoundedButton>
        </Box>
    )
}

const useStyles = makeStyles(theme=>({
    root: {
        padding: '0.8rem 0 10rem 0',
        textAlign: 'center',
        width: '100%',
        overflow: 'hidden',
        '& .scroll': {
            width: '100%',
        },
        '& .scroll>*': {
            display: 'flex',
            width: 'max-content'
        },
        '& .scrolling': {
            transition: 'margin-left 0.5s ease-in-out',
            marginLeft: 'calc(-100% / 2)'
        },
        '& .card': {
            maxWidth: 'calc(50vw - 2rem)',
            minWidth: 'calc(50vw - 2rem)',
            margin: '1rem',
            padding: '0.5rem',
            marginTop: '5rem',
            '&>*': {
                margin: '1.75rem'
            },
            '&>img': {
                width: '4.2rem',
                height: 'auto',
                margin: '1rem',
                marginTop: '-2.5rem'
            },
            '&>img + *': {
                fontWeight: 'bold',
                margin: 0
            },
            [theme.breakpoints.down('xs')]: {
                maxWidth: '80vw',
                minWidth: '80vw',
                marginLeft: 0,
                marginRight: 0,
            }
        }
    }
}))

export default Testimonials
