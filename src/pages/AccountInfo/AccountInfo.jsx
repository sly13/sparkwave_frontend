import React from 'react'
import BalanceOnTopRight from '../../components/BalanceOnTopRight/BalanceOnTopRight'
import ColorButton from '../../components/UI/ColorButton/ColorButton'
import classes from './AccountInfo.module.css'

import photo from '../../img/Rectangle 29.png'

export default function AccountInfo() {
  return (
    <div className={'body'}>
        <div className={'container'}>
            <div className={classes.headerRow}>
                <p className={classes.subtitle}>
                  Create your own NFT
                </p>
                <BalanceOnTopRight topText='Muteless333.eth' bottomText='$1,034.02 (0.98 ETH)' />
            </div>
            <h1 className={classes.title}>
            Muteless
            </h1>
            <div className={classes.row}>
                <div className={classes.column}>
                  <div className={classes.block}>
                    <p className={classes.label}>
                      Soundcloud
                    </p>
                    <p className={classes.text}>
                      https://soundcloud.com/Muteless333
                    </p>
                  </div>
                  <div className={classes.block}>
                    <p className={classes.label}>
                      Choosen Artist Name
                    </p>
                    <p className={classes.text}>
                      Muteless
                    </p>
                  </div>
                  <div className={classes.block}>
                    <p className={classes.label}>
                      E-mail
                    </p>
                    <p className={classes.text}>
                      Muteless.Muteless@gmail.com
                    </p>
                  </div>
                  <div className={classes.block}>
                    <p className={classes.label}>
                      twitter
                    </p>
                    <p className={classes.text}>
                      twitter.com/Muteless333
                    </p>
                  </div>
                  <div className={classes.block}>
                    <p className={classes.label}>
                      Drop address
                    </p>
                    <p className={classes.text}>
                      0x0340343394394
                    </p>
                  </div>
                  <div className={classes.block}>
                    <p className={classes.label}>
                      Sound XYZ
                    </p>
                    <p className={classes.text}>
                      https://sound.xyz/Muteless
                    </p>
                  </div>
                  <ColorButton color={'#0047FF'} textColor={'#fff'} style={{width: '100%', marginTop: '146px'}}>Edit Info</ColorButton>
                </div>
                <div className={classes.column}>
                  <p className={classes.label}>
                    Profile photo
                  </p>
                  <img className={classes.img} src={photo} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
