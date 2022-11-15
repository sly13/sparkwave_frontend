import React from 'react'
import classes from './MyLabel.module.css'

export default function MyLabel({children, style}) {
  return (
    <label style={style} className={classes.text}>
        {children}
    </label>
  )
}
