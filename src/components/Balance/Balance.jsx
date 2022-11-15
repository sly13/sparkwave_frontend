import React from 'react'
import MyButton from '../UI/button/MyButton'
import MyH1 from '../UI/h1/MyH1'
import MyLabel from '../UI/label/MyLabel'
import classes from './Balance.module.css'

export default function Balance({onlyText}) {
  return (
   <div>
     <div className={classes.row} style={{justifyContent: 'space-between'}}>
      <div className={classes.column}>
        <MyLabel>Your music ETH balance</MyLabel>
        <MyH1>5.0 ETH</MyH1>
      </div>
      <div className={classes.column}>
        <MyLabel>Earned</MyLabel>
        <MyH1>0.03 ETH</MyH1>
      </div>
      <div className={classes.column}>
        <MyLabel>Avg APY</MyLabel>
        <MyH1>3%</MyH1>
      </div>
      
    </div>
    {
      onlyText
      ?
      ''
      :
      <div className={classes.row} style={{justifyContent: 'flex-end', marginTop: '72px'}}>
          <p className={classes.number}><span className={classes.balance}>Balance: </span>3.02 ETH (~$23.23)</p>
          <MyButton>WITHDRAW ALL</MyButton>
      </div>
    }
    
   </div>
    
  )
}
