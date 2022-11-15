import React, { useState } from 'react'
import classes from './ChoosButton.module.css'
export default function ChoosButton({style}) {
const [active, setactive] = useState(false)
  return (
    <div className={classes.container} style={style}>
        <button className={active ? [classes.button, classes.active].join(' ') : [classes.button] } onClick={(e)=>{
            e.preventDefault()
            setactive(!active)
        }}>Random Drop</button>        
        <button className={!active ? [classes.button, classes.active].join(' ') : [classes.button] } onClick={(e)=>{
            e.preventDefault()
            setactive(!active)
        }}>Store Drop</button>        
    </div>
  )
}
