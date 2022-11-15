import React from 'react'
import classes from './ArtistCard.module.css'

export default function ArtistCard({image, header, text}) {
  return (
    <div className={classes.row}>
        <div className={classes.column}>
            <h2 className={classes.header}>{header}</h2>
            <p className={classes.text} >{text}</p>
        </div>
        <img src={image} alt=""  className={classes.image} />        
    </div>
  )
}
