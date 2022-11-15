import React from 'react'
import classes from './MyInput.module.css'

export default function MyInput({type, placeholder}) {
  return (
    <div className={classes.row}>
        <input type={type} placeholder={placeholder} className={classes.input} />
        <button className={classes.button}>max</button>
    </div>
  )
}
