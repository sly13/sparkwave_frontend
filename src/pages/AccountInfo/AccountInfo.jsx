import React, { useEffect, useState } from 'react'
import BalanceOnTopRight from '../../components/BalanceOnTopRight/BalanceOnTopRight'
import ColorButton from '../../components/UI/ColorButton/ColorButton'
import classes from './AccountInfo.module.css'

import photo from '../../img/Rectangle 29.png'
import { getArtist } from '../../utils/api/api'
import { useNavigate, useParams } from 'react-router-dom'

export default function AccountInfo() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [artist, setArtist] = useState();

  useEffect(() => {
    const getArtistInfo = async () => {
      const artist = await getArtist({ id })
      setArtist(artist);
    }
    getArtistInfo();
  }, []);

  return (
    <div className={'body'}>
      <div className={'container'}>
        <div className={classes.headerRow}>
          <p className={classes.subtitle}>
            Create your own NFT
          </p>
          <BalanceOnTopRight topText='Muteless333.eth' bottomText='$1,034.02 (0.98 ETH)' />
        </div>

        {artist &&
          <>
            <h1 className={classes.title}>
              {artist.username}
            </h1>
            <div className={classes.row}>
              <div className={classes.column}>
                <div className={classes.block}>
                  <p className={classes.label}>
                    Soundcloud
                  </p>
                  <p className={classes.text}>
                    {artist.soundcloud}
                  </p>
                </div>
                <div className={classes.block}>
                  <p className={classes.label}>
                    Choosen Artist Name
                  </p>
                  <p className={classes.text}>
                    {artist.username}
                  </p>
                </div>
                <div className={classes.block}>
                  <p className={classes.label}>
                    E-mail
                  </p>
                  <p className={classes.text}>
                    {artist.email}
                  </p>
                </div>
                <div className={classes.block}>
                  <p className={classes.label}>
                    twitter
                  </p>
                  <p className={classes.text}>
                    {artist.twitter}
                  </p>
                </div>
                <div className={classes.block}>
                  <p className={classes.label}>
                    Drop address
                  </p>
                  <p className={classes.text}>
                    {artist.address}
                  </p>
                </div>
                <div className={classes.block}>
                  <p className={classes.label}>
                    Sound XYZ
                  </p>
                  <p className={classes.text}>
                    {artist.soundxyz}
                  </p>
                </div>
                {window.localStorage.getItem('accessToken') &&
                  <ColorButton onClick={() => navigate(`/artist/${artist.id}`)} color={'#0047FF'} textColor={'#fff'} style={{ width: '100%', marginTop: '146px' }}>Edit Info</ColorButton>
                }

              </div>
              <div className={classes.column}>
                <p className={classes.label}>
                  Profile photo
                </p>
                <img className={classes.img} src={photo} alt="" />
              </div>
            </div>
          </>}

      </div>
    </div>
  )
}
