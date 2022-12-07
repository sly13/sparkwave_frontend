import React, { useEffect, useState } from 'react'
import classes from "./MainContent.module.css"
import '../../styles/general.css'
import SearchRow from '../../components/SearchRow/SearchRow'
import MyH1 from '../../components/UI/h1/MyH1'
import MyLabel from '../../components/UI/label/MyLabel'
import Line from '../../components/UI/line/Line'
import Balance from '../../components/Balance/Balance'
import ArtistCard from '../../components/ArtistCard/ArtistCard'
import BadgesCard from '../../components/BadgesCard/BadgesCard'
import DropsCard from '../../components/DropsCard/DropsCard'
import BalanceOnTopRight from '../../components/BalanceOnTopRight/BalanceOnTopRight'




import Illumination from '../../img/Rectangle 34.png'
import MiddleMode from '../../img/Rectangle 35.png'
import Afek from '../../img/Rectangle 36.png'

import Tropi from '../../img/Group 19.png'
import Delien from '../../img/Group 18.png'
import Archo from '../../img/Group 17.png'
import Dudi from '../../img/Group 16.png'

import IlluminationDrops from '../../img/Rectangle 25.png'
import MiddleModeDrops from '../../img/Rectangle 25(1).png'
import AfekDrops from '../../img/Rectangle 25(2).png'

export default function MainContent() {
  const [, setQuery] = useState('');
  const [supportedArtists, setSupportedArtists] = useState('');

  useEffect(() => {
    // Call for get Supported artists list
    setSupportedArtists([
      {
        header: 'Illumination',
        text: '33%',
        image: Illumination
      },
      {
        header: 'Middle Mode',
        text: '33%',
        image: MiddleMode
      },
      {
        header: 'Afek',
        text: '33%',
        image: Afek
      }
    ]);
  }, []);

  return (
    <div className={'body'}>
      <div className={'container'}>
        <div className={classes.row}>
          <SearchRow placeholder="Search something" setQuery={setQuery}></SearchRow>
          <BalanceOnTopRight></BalanceOnTopRight>
        </div>
        <Line></Line>
        <Balance></Balance>
        <MyLabel style={{ marginBottom: 11 + 'px' }}>Supported artist’s</MyLabel>
        <Line></Line>
        <div className={classes.row} style={{ marginBottom: 31 + 'px', justifyContent: 'flex-start' }}>
          {supportedArtists && supportedArtists.map((item, index) => {
            return <ArtistCard header={item.header} text={item.text} image={item.image} ></ArtistCard>
          })}
        </div>
        <MyLabel style={{ marginBottom: 11 + 'px' }}>Your badges</MyLabel>
        <Line></Line>
        <div className={classes.row} style={{ justifyContent: 'flex-start', flexWrap: 'wrap' }}>
          <BadgesCard image={Tropi}></BadgesCard>
          <BadgesCard image={Delien}></BadgesCard>
          <BadgesCard image={Archo}></BadgesCard>
          <BadgesCard image={Dudi}></BadgesCard>
        </div>
        <MyLabel style={{ marginBottom: 11 + 'px', marginTop: 30 + 'px' }}>Your drops</MyLabel>
        <Line></Line>
        <div className={classes.row} style={{ justifyContent: 'flex-start', margin: '0 -24px 0 0' }}>
          <DropsCard avatar={IlluminationDrops} text="Illumination Jastice" color="rgba(253,102,54,1)"></DropsCard>
          <DropsCard avatar={MiddleModeDrops} text="Middle Mode EXIT" color="rgba(253,102,54,1)"></DropsCard>
          <DropsCard avatar={AfekDrops} text="Afek Solarship" color='rgba(63, 241, 253, 1)'></DropsCard>
        </div>
      </div>
    </div>
  )
}
