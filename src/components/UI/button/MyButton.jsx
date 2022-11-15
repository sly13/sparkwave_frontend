import React from 'react'
import classes from './MyButton.module.css'

export default function MyButton({children, style}) {
  return (
    <button className={classes.MyButton} style={style}>
        {children}
    </button>
  )
}
