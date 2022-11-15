import React from 'react'
import classes from './BalanceOnTopRight.module.css'

export default function BalanceOnTopRight({style, topText, bottomText}) {
  return (
    <div className={classes.rightText} style={style}>
        <span className={classes.rightTextTop}>{ topText ? topText : 'depo.eth' }</span>
        <span className={classes.rightTextBottom}>{ bottomText ? bottomText : '$1,034.02 (0.987 ETH)' }</span>
    </div>
  )
}
