import React from 'react'
import ArtistCard from '../ArtistCard/ArtistCard'
import classes from './ArtistsListRow.module.css'

import image_1 from '../../img/Rectangle 46.png'
import { useNavigate } from 'react-router-dom'

export default function ArtistsListRow({ symbol, cardsList }) {
  return (
    <div className={classes.column} style={{ marginBottom: 39 + 'px' }}>
      {
        symbol
          ?
          <span className={classes.span}>{symbol}</span>
          :
          ''
      }
      <div className={classes.row} >
        {cardsList.map(el => {
          return <ArtistCard header={el.username} text={'33%'} image={image_1} id={el.id} />
        })}
      </div>
    </div>
  )
}
