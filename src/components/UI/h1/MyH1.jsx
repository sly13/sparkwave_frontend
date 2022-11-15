import React from 'react'
import classes from './MyH1.module.css'

export default function MyH1({children}) {
  return (
    <h1 className={classes.text}>{children}</h1>
  )
}
