import React from 'react'
import classes from './Line.module.css'

export default function Line({style}) {
  return (
    <div className={classes.line} style={style}></div>
  )
}
