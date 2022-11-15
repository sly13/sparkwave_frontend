import React from 'react'
import classes from './BurgerButton.module.css'

export default function BurgerButton({clickHandler, pressed}) {
  return (
    <div className={pressed ? [classes.button, classes.active].join(' ') : [classes.button]} onClick={clickHandler} >
        <span></span>
    </div>
  )
}
