import React from 'react'
import classes from './SearchRow.module.css'

export default function SearchRow({input, placeholder}) {
  return (
    <form action="" className={classes.row}>
        <input type="text" placeholder={placeholder} className={classes.input}/>
        <button type="submit" className={classes.button}></button>
    </form>
  )
}
