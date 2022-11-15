import React from 'react'
import classes from './DropsCard.module.css'

export default function DropsCard({image, text, color, style}) {
  return (
    <div className={classes.card} style={{background: `linear-gradient(353deg, ${color} -16%, rgba(15,15,15,1) 40%`, ...style}}>
        <img src={image} className={classes.image} alt="" />
        <p className={classes.text}>{text}</p>
    </div>
  )
}
