import React from 'react'
import ArtistCard from '../ArtistCard/ArtistCard'
import classes from './ArtistsListRow.module.css'

export default function ArtistsListRow({symbol, cardsList}) {
  return (
    <div className={classes.column} style={{marginBottom: 39 + 'px'}}>
        {
          symbol 
          ?
          <span className={classes.span}>{symbol}</span>
          :
          ''
        }
        <div className={classes.row}>
            {cardsList.map(el => {
                return <ArtistCard header={el.header} text={el.text} image={el.image} />
            })}
        </div>
    </div>
  )
}
