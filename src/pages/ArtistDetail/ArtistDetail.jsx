import React, { useEffect, useState } from 'react'
import BalanceOnTopRight from '../../components/BalanceOnTopRight/BalanceOnTopRight'
import Line from '../../components/UI/line/Line'
import ImageButton from '../../components/UI/ImageButton/ImageButton'

import classes from './ArtistDetail.module.css'


import Avatar from '../../img/Frame 111.png'
import image_1 from '../../img/image 1.png'
import image_2 from '../../img/image 2.png'
import twitch from '../../img/twitch.png'
import Balance from '../../components/Balance/Balance'
import MyButton from '../../components/UI/button/MyButton'
import ColorButton from '../../components/UI/ColorButton/ColorButton'
import MyInput from '../../components/UI/input/MyInput'
import PercentLine from '../../components/PercentLine/PercentLine'


import image_10 from '../../img/Group 44.png'
import image_35 from '../../img/Group 42.png'
import image_60 from '../../img/Group 18(1).png'
import image_90 from '../../img/Group 41.png'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getArtist } from '../../utils/api/api'
import { BACKEND_API_URL, BACKEND_BASE_URL } from '../../utils/contants'

const lineOptions = {
    percents: {
        10: {
            image: image_10,
            needs: 1000
        },
        35: {
            image: image_35,
            needs: 3500
        },
        60: {
            image: image_60,
            needs: 6000
        },
        90: {
            image: image_90,
            needs: 9000
        },
    },
    curPercent: 8
}

export default function ArtistDetail() {
    const { id } = useParams();
    const [artist, setArtist] = useState();
    const [totalWaws, setTotalWaws] = useState();
    const [balance, setBalance] = useState();

    useEffect(() => {
        // Call for Total waws
        setTotalWaws('33.00')
    }, []);

    useEffect(() => {
        // Call for Balance
        setBalance('3.02')
    }, []);

    useEffect(() => {
        const getArtistInfo = async () => {
            const artist = await getArtist({ id })
            setArtist(artist);
        }
        getArtistInfo();
    }, []);

    const handleWithdrawBalance = () => {
        alert('handleWithdraw')
    }

    const handlePutBalance = () => {
        alert('put')
    }

    return (
        <div className={'body'}>
            <div className={'container'}>
                <div className={classes.row} style={{ justifyContent: 'flex-end', marginBottom: '71px' }}>
                    <BalanceOnTopRight />
                </div>
                <Line style={{ marginBottom: '58px' }} />
                {artist &&
                    <div className={classes.row} style={{ marginBottom: '62px' }}>
                        <img src={BACKEND_BASE_URL + artist.avatar} alt="" className={classes.image} />
                        <div className={classes.column}>
                            <h1 className={classes.title}>{artist.username}</h1>
                            <p className={classes.subtitle}>About: </p>
                            <p className={classes.text}>{artist.description}</p>
                            <div className={classes.row} style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
                                <a href={artist.twitter} target={"_blank"} rel="noreferrer"> <ImageButton color='#37B8FF'>{image_1}</ImageButton></a>

                                <a href={artist.soundcloud} target={"_blank"} rel="noreferrer"> <ImageButton color='#fff'>{image_2}</ImageButton></a>

                                <a href={artist.soundcloud} target={"_blank"} rel="noreferrer"> <ImageButton color='#623EAB'>{twitch}</ImageButton></a>

                                {/* <ImageButton color='#fff'>{image_2}</ImageButton>
                                <ImageButton color='#623EAB'>{twitch}</ImageButton> */}
                            </div>
                        </div>
                    </div>
                }

                <Line style={{ marginBottom: '33px' }} />
                <div className={classes.row} style={{ justifyContent: 'space-between', marginBottom: '82px' }}>
                    <div className={classes.column}>
                        <p className={classes.label}>Total WAVs mined</p>
                        <p className={classes.bigText}>{totalWaws} WAVS</p>
                    </div>
                    <div className={classes.column}>
                        <p className={classes.label}>WAVs mining speed</p>
                        <p className={classes.bigText}>0.02 WAVS/MIN</p>
                    </div>
                </div>
                <Line style={{ marginBottom: '39px' }} />
                <PercentLine options={lineOptions} style={{ marginBottom: '' }} />
                <Line style={{ marginBottom: '39px' }} />

                <Balance onlyText />
                <Line style={{ marginTop: '40px', marginBottom: '51px' }} />
                <div className={classes.row}>
                    <div className={classes.column} style={{ justifyContent: 'space-between' }}>
                        <p className={classes.number}><span className={classes.balance}>Balance:</span>{balance} ETH (~$23.23)</p>
                        <MyInput type='text' placeholder='Insert summ' />
                    </div>
                    <div className={classes.column} style={{ marginLeft: '150px' }}>
                        <MyButton style={{ padding: '18px 50px' }} onClick={handleWithdrawBalance}>WITHDRAW</MyButton>
                        <ColorButton
                            onClick={handlePutBalance}
                            color='linear-gradient(90deg, rgba(133,233,241,1) 0%, rgba(175,253,182,1) 32%, rgba(229,236,128,1) 72%, rgba(175,253,182,1) 100%)'
                            style={{ backdropFilter: `blur(3.11181px)`, marginTop: '27px' }}
                        >PUT</ColorButton>
                    </div>
                </div>
            </div>
        </div>
    )
}
