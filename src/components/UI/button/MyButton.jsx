import React from 'react'
import classes from './MyButton.module.css'

export default function MyButton({ children, style, onClick, ...props }) {
  return (
    <button className={classes.MyButton} style={style} {...props} onClick={onClick}>
      {children}
    </button>
  )
}
