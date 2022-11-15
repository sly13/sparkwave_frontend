import React from 'react'
import classes from './FormInput.module.css'

export default function FormInput({ buttonText, buttonIcon, placeholder, defaultValue, ...props }) {
  return (
    <div className={classes.container}>
      <input className={classes.input} type="text" placeholder={placeholder} value={defaultValue} {...props} />
      {
        buttonText
          ?
          <div className={classes.button
          } > {buttonText}</div>
          :
          null
      }
      {
        buttonIcon
          ?
          <img className={classes.icon} src={buttonIcon} alt="" />
          :
          null
      }
    </div >
  )
}
