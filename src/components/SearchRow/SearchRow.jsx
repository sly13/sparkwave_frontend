import React from 'react'
import classes from './SearchRow.module.css'

export default function SearchRow({ input, placeholder, setQuery }) {
  return (
    <form action="" className={classes.row}>
      <input type="text" placeholder={placeholder} className={classes.input} onChange={(event) => setQuery(event.target.value)} />
      <button type="submit" className={classes.button}></button>
    </form>
  )
}
