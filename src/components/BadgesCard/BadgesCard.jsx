import React from 'react'
import classes from './BadgesCard.module.css'

export default function BadgesCard({image}) {
  return (
    <div className={classes.card}>
        <img src={image} alt="" />
    </div>
  )
}
