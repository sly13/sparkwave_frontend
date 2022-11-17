import React from 'react'
import { useNavigate } from 'react-router-dom';
import classes from './ArtistCard.module.css'

export default function ArtistCard({ image, header, text, id }) {
  let navigate = useNavigate();
  return (
    <div className={classes.row} onClick={() => navigate(`/profile/${id}`)} style={{ cursor: "pointer" }}>
      <div className={classes.column}>
        <h2 className={classes.header}>{header}</h2>
        <p className={classes.text} >{text}</p>
      </div>
      <img src={image} alt="" className={classes.image} />
    </div>
  )
}
