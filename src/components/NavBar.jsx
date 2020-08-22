import React, {useState} from 'react'
import { makeStyles, Toolbar } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { Box } from '@material-ui/core'
import clsx from 'clsx'
import { TextButton, RoundedButton } from '../components/buttons'


function NavBar({ className }) {
    const classes = useStyles()
    const [ isMenuExpanded, setIsMenuExpanded ] = useState(false)
    return (
        <Toolbar className={clsx(classes.root, className)}>
            <img className='logo' src="\images\logo.svg" alt="logo" />
            <Box className={clsx('menu-items', isMenuExpanded? "expanded": "")}>
                <TextButton>Pricing</TextButton>
                <TextButton>Product</TextButton>
                <TextButton>About Us</TextButton>
                <TextButton>Careers</TextButton>
                <TextButton>Community</TextButton>
            </Box>
             {
                !isMenuExpanded ?
                    <Menu className='menu-icon' color="primary" onClick={()=>setIsMenuExpanded(true)}/>
                :
                    <img className='menu-icon' src="/images/icon-close.svg" alt="" onClick={()=>setIsMenuExpanded(false)}/>
             }
            <RoundedButton className="btn-get-started" color='primary'>Get Started</RoundedButton>
        </Toolbar>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        padding: 0,
        minHeight: '10rem',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        gridTemplateRows: 'auto',
        gridTemplateAreas: '"title menu-items menu-icon"',
        '& img': {
            marginTop: '1rem'
        },
        '& .logo': {
            gridArea: 'title'
        },
        '& .menu-items': {
            gridArea: 'menu-items',
            textAlign: 'center',
        },
        '& .menu-icon': {
            gridArea: 'menu-icon',
            display: 'none',
            width: '2rem',
        },
        '& .btn-get-started':{
            gridArea: 'menu-icon',
        },
        [theme.breakpoints.down('xs')]: {
            minHeight: '4rem',
            gridTemplateColumns: '1fr auto',
            gridTemplateRows: 'auto 0',
            gridTemplateAreas: `
                "title menu-icon"
                "menu-items menu-items"
            `,
            '& .btn-get-started': {
                display: 'none'
            },
            '& .menu-icon': {
                display: 'inherit'
            },
            '& .menu-items': {
                display: 'none',
                flexDirection: 'column',
                background: 'white',
                margin: '1rem',
                padding: '2rem',
                '& button': {
                    fontWeight: 'bold',
                    color: theme.palette.text.primary
                }
            },
            '& .expanded': {
                display: 'flex',
                position: 'relative',
                top: '9rem',
            }
        }

    }
}))

export default NavBar
