import React from 'react'
import ArtistsListRow from '../ArtistsListRow/ArtistsListRow'
import classes from './ArtistsList.module.css'


import Illumination from '../../img/Rectangle 34.png'
import MiddleMode from '../../img/Rectangle 35.png'
import Afek from '../../img/Rectangle 36.png'
import image_1 from '../../img/Rectangle 46.png'
import image_2 from '../../img/Rectangle 47.png'
import image_3 from '../../img/Rectangle 48.png'
import image_4 from '../../img/Rectangle 67.png'
import image_5 from '../../img/Rectangle 68.png'
import image_6 from '../../img/Rectangle 58.png'
import image_7 from '../../img/Rectangle 59.png'
import image_8 from '../../img/Rectangle 60.png'


export default function ArtistsList() {

    const rowA = [
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
        },
    ]

    const rowB = [
        {
            header: 'Illumination',
            text: '33%',
            image: image_1
        },
        {
            header: 'Middle Mode',
            text: '33%',
            image: image_2
        },
        {
            header: 'Afek',
            text: '33%',
            image: image_3
        },
        {
            header: 'Middle Mode',
            text: '33%',
            image: image_4
        },
        {
            header: 'Afek',
            text: '33%',
            image: image_5
        },
    ]

    const rowC = [
        {
            header: 'Illumination',
            text: '33%',
            image: image_6
        },
        {
            header: 'Middle Mode',
            text: '33%',
            image: image_7
        },
        {
            header: 'Afek',
            text: '33%',
            image: image_8
        },
        
    ]
  return (
    <div>
        <ArtistsListRow symbol='A' cardsList={rowA} />
        <ArtistsListRow symbol='B' cardsList={rowB} />
        <ArtistsListRow symbol='C' cardsList={rowC} />
    </div>
  )
}
