import { styled, Button } from '@material-ui/core'
import React from 'react'


const getBaseStyle = ({theme})=> {
    return {
        border: 'none',
        textTransform: 'none',
        padding: '8px 16px',
        margin: '0',
        color: theme.palette.text.secondary,
        '&:hover': {
            background: 'none',
            color: theme.palette.text.primary,
        }
    }
}



export const TextButton = styled((props)=><Button {...props} />)(getBaseStyle)


export const RoundedButton = styled((props)=><Button {...props} variant="contained" elevation={3}/>)(({theme})=>({
    borderRadius: 20,
    padding: '0.7rem 1.85rem',
    textTransform: 'none',
    '&:hover': {
        background: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText
    }
}))
