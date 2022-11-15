import React from 'react'
import MyButton from '../button/MyButton'

export default function ImageButton({children, color}) {
  return (
    <MyButton style={{
            background: `url(${children}) center no-repeat`, 
            backgroundColor: `${color}`,
            minWidth: '200px', 
            minHeight: '60px', 
            border: 'none',
            marginRight: '17px',
            marginBottom: '10px',
            marginTop: '20px'

        }} >
    </MyButton>
  )
}
