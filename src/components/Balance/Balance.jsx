import React, { useEffect, useState } from 'react'
import MyButton from '../UI/button/MyButton'
import MyH1 from '../UI/h1/MyH1'
import MyLabel from '../UI/label/MyLabel'
import classes from './Balance.module.css'

export default function Balance({ onlyText }) {
  const [balance, setBalance] = useState('');
  const [earnedAmount, setEarnedAmount] = useState();
  const [incomeBalance, setIncomeBalance] = useState();

  useEffect(() => {
    // Call for Your music ETH balance
    setBalance('0.5');
  }, []);

  useEffect(() => {
    // Call for Earned balance
    setEarnedAmount('0.03')
  }, []);

  useEffect(() => {
    // Call for Income balance
    setIncomeBalance('3.02')
  }, []);

  const handleWithdrawAll = () => {
    // Call for Withdraw All
    alert('Withdraw All')
  }

  return (
    <div>
      <div className={classes.row} style={{ justifyContent: 'space-between' }}>
        <div className={classes.column}>
          <MyLabel>Your music ETH balance</MyLabel>
          <MyH1>{balance} ETH</MyH1>
        </div>
        <div className={classes.column}>
          <MyLabel>Earned</MyLabel>
          <MyH1>{earnedAmount} ETH</MyH1>
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
          <div className={classes.row} style={{ justifyContent: 'flex-end', marginTop: '72px' }}>
            <p className={classes.number}><span className={classes.balance}>Balance: </span>{incomeBalance} ETH (~$23.23)</p>
            <MyButton onClick={handleWithdrawAll}>WITHDRAW ALL</MyButton>
          </div>
      }

    </div>

  )
}
