import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ArtistsList from '../../components/ArtistsList/ArtistsList'
import BalanceOnTopRight from '../../components/BalanceOnTopRight/BalanceOnTopRight'
import SearchRow from '../../components/SearchRow/SearchRow'
import Line from '../../components/UI/line/Line'
import classes from './FindArtists.module.css'


export default function FindArtists() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('search'));


  return (
    <div className={'body'}>
      <div className={'container'}>
        <div className={classes.row} style={{ justifyContent: 'flex-end' }}>
          <BalanceOnTopRight style={{ marginBottom: '71' + 'px' }} />
        </div>
        <Line />
        <div className={classes.row} style={{ justifyContent: 'flex-end', marginBottom: '61' + 'px' }}>
          <SearchRow placeholder='Search Something' setQuery={setQuery} value={searchParams.get('search')}></SearchRow>
        </div>
        <ArtistsList query={query} />
      </div>
    </div>
  )
}
