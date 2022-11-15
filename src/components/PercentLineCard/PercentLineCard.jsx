import React, { useState } from 'react'
import classes from './PercentLineCard.module.css'

export default function PercentLineCard({children, needs, percent}) {
    const [cardIsHover, setcardIsHover] = useState(false)
  return (
    <div 
        className={cardIsHover ? classes.cardHowered : classes.card} 
        style={{left: percent + '%'}}
        onMouseEnter={()=>setcardIsHover(true)}
        onMouseLeave={()=>setcardIsHover(false)}
    >
        {
            cardIsHover
            ?
            <div className={classes.hoverMessage} >You need <span>{needs}</span> WAVS to earn this NFT badge</div>
            :
            null
        }
        <span className={classes.downLine}></span>
        <img className={classes.image} src={children} alt="" />
    </div>
  )
}
