import React from 'react'
import MyButton from '../button/MyButton'

export default function ColorButton({children, color, style, textColor}) {
  return (
    <MyButton style={{
        color: textColor ? textColor : '#000',
        border: 'none',
        background: `${color}`,
        ...style
    }}>
        {children}
    </MyButton>
  )
}
