import React from 'react'
import PercentLineCard from '../PercentLineCard/PercentLineCard'
import classes from './PercentLine.module.css'


export default function PercentLine({options}) {

  return (
    <div className={classes.row}>
        <div className={classes.container}>
            <div className={classes.block}>
                {
                    Object.keys(options.percents).map(el => {
                        return <PercentLineCard 
                            needs={options.percents[el].needs} 
                            percent={el}
                        >
                            {options.percents[el].image}
                        </PercentLineCard>
                    })
                }
                <div className={classes.line}>
                    
                    <span style={{
                        width: `${100-options.curPercent}%`
                    }}></span>
                </div>
            </div>
        </div>
    </div>
  )
}
