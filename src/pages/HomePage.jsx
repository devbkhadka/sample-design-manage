import React from 'react'
import { makeStyles } from '@material-ui/core'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Statistics from '../components/Statistics'
import Difference from '../components/Difference'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import GetStarted from '../components/GetStarted'
import Footer from '../components/Footer'


function HomePage(props) {
    const classes = useStyle()
    return (
        <div className={classes.root}>
            <NavBar className="nav-bar" />
            <Banner className="banner" />
            <Statistics className="stats" />
            <Difference className="difference" />
            <Features className="features" />
            <Testimonials className="testimonials" />
            <GetStarted className="get-started" />
            <Footer className="footer"></Footer>
        </div>
    )
}

const useStyle = makeStyles(theme=>({
    root: {
        display: 'grid',
        alignItems: 'top',
        gridRowGap: '3.3rem',
        gridTemplateColumns: 'minmax(calc((100vw - var(--max-width))/2), 2rem) 1fr 1fr minmax(calc((100vw - var(--max-width))/2), 2rem)',
        gridTemplateRows: 'auto',
        gridTemplateAreas: `
            ". nav-bar nav-bar ."
            ". banner stats ."
            ". difference features ."
            "testimonials testimonials testimonials testimonials"
            "get-started get-started get-started get-started"
            "footer footer footer footer"
        `,
        '& .banner': {
            gridArea: 'banner'
        },
        '& .stats': {
            gridArea: 'stats'
        },
        '& .nav-bar': {
            gridArea: 'nav-bar'
        },
        '& .difference': {
            gridArea: 'difference'
        },
        '& .features': {
            gridArea: 'features'
        },
        '& .testimonials': {
            gridArea: 'testimonials',
        },
        '& .get-started': {
            gridArea: 'get-started'
        },
        '& .footer': {
            gridArea: 'footer'
        },
        [theme.breakpoints.down('xs')]: {
            gridGap: '1rem',
            gridTemplateColumns: '0rem 1fr 0rem',
            gridTemplateAreas: `
                ". nav-bar ."
                ". stats ."
                ". banner ."
                ". difference ."
                ". features ."
                "testimonials testimonials testimonials"
                "get-started get-started get-started"
                "footer footer footer"
            `
        }
    }
}))

export default HomePage
