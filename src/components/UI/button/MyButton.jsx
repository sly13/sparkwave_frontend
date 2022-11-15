import React from 'react'
import classes from './MyButton.module.css'

export default function MyButton({ children, style, onClick }) {
  return (
    <button className={classes.MyButton} style={style} onClick={onClick}>
      {children}
    </button>
  )
}
