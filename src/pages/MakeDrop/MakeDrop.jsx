import React from 'react'
import BalanceOnTopRight from '../../components/BalanceOnTopRight/BalanceOnTopRight'
import FormInput from '../../components/UI/FormInput/FormInput'
import classes from './MakeDrop.module.css'


import preview from '../../img/Rectangle 25(3).png'
import calendar_icon from '../../img/calendar.svg'
import ChoosButton from '../../components/ChoosButton/ChoosButton'
import DropsCard from '../../components/DropsCard/DropsCard'
import MyButton from '../../components/UI/button/MyButton'
import ColorButton from '../../components/UI/ColorButton/ColorButton'

export default function MakeDrop() {
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
                    Minting NFT
                </h1>
                <div className={classes.row}>
                    <form action="" className={classes.form} >
                        <div className={classes.formBlock}>
                            <label htmlFor="" className={classes.label}>NFT Name</label>
                            <FormInput placeholder="NFT Name" />
                        </div>
                        <div className={classes.formBlock}>
                            <ChoosButton style={{
                                maxWidth: '60%'
                            }}>
                            </ChoosButton>
                        </div>
                        <div className={classes.formBlock}>
                            <p className={classes.formComment}>
                                Listing Parameters
                            </p>
                        </div>
                        <div className={classes.formBlock}>
                            <label htmlFor="" className={classes.label}>Drop date</label>
                            <FormInput defaultValue='06/26/22 12:00 EST' buttonIcon={calendar_icon} placeholder="Drop date" />
                        </div>
                        <div className={classes.formBlock}>
                            <label htmlFor="" className={classes.label} >Examples</label>
                            <FormInput placeholder="Examples" buttonText='Copies' />
                        </div>
                        <div className={classes.formBlock}>
                            <label htmlFor="" className={classes.label} >Price</label>
                            <FormInput placeholder="Price" buttonText='WAVS' />
                        </div>

                        <div className={classes.formBlock}>
                            <ColorButton color={'#0047FF'} textColor={'#fff'} style={{ width: '100%', marginTop: '191px' }}>Submit</ColorButton>
                        </div>

                    </form>
                    <div className={classes.column}>
                        <p className={classes.previewInfo}>
                            Image, Video, Audio, or 3D Model
                        </p>
                        <p className={classes.previewComment}>
                            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB
                        </p>
                        <DropsCard style={{ margin: 0 }} avatar={preview} text={'Archo Sactus'} setFieldValue={() => console.log('')} />
                        {/* <MyButton style={{ width: '100%', marginTop: '35px' }}>Change</MyButton> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
