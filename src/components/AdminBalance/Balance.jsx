import React, { useEffect, useState } from 'react'
import MyButton from '../UI/button/MyButton'
import MyH1 from '../UI/h1/MyH1'
import MyLabel from '../UI/label/MyLabel'
import classes from './Balance.module.css'

export default function AdminBalance() {
  const [totalStaked, setTotalStaked] = useState('');
  const [totalEarned, setTotalEarned] = useState();
  const [amountOfStakers, setAmountOfStakers] = useState();
  const [availableToWithdraw, setAvailableToWithdraw] = useState();

  useEffect(() => {
    // Call for Total staked music ETH
    setTotalStaked('25.3');
  }, []);

  useEffect(() => {
    // Call for Total Earned
    setTotalEarned('1.34')
  }, []);

  useEffect(() => {
    // Call for Amount of stakers
    setAmountOfStakers('12')
  }, []);

  useEffect(() => {
    // Call for Available to withdraw
    setAvailableToWithdraw('1.34')
  }, []);

  return (
    <div>
      <div className={classes.row} style={{ justifyContent: 'space-between' }}>
        <div className={classes.column}>
          <MyLabel>Total staked music ETH</MyLabel>
          <MyH1>{totalStaked} ETH</MyH1>
        </div>
        <div className={classes.column}>
          <MyLabel>Total Earned</MyLabel>
          <MyH1>{totalEarned} ETH</MyH1>
        </div>
        <div className={classes.column}>
          <MyLabel>Amount of stakers</MyLabel>
          <MyH1>{amountOfStakers}</MyH1>
        </div>

      </div>

      <div className={classes.row} style={{ justifyContent: 'space-between', paddingTop: '60px' }}>
        <div className={classes.column}>
          <MyLabel>Available to withdraw</MyLabel>
          <MyH1>{availableToWithdraw} ETH</MyH1>
        </div>
      </div>
    </div>

  )
}
