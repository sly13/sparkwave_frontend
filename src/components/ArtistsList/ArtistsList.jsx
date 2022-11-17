import React, { useEffect, useState } from 'react'
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
import { getArtists } from '../../utils/api/api'

export default function ArtistsList({ query }) {
    const [artists, setArtists] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getArtistsList = async () => {
            setLoading(true);
            try {
                const artists = await getArtists({ query });
                const data = {};

                artists.forEach(element => {
                    const firstLetter = element.username.substring(0, 1).toLowerCase();
                    if (!data.hasOwnProperty(firstLetter)) {
                        Object.assign(data, { [firstLetter]: [element] });
                    } else {
                        data[firstLetter].push(element);
                    }
                });

                const ordered = Object.keys(data).sort().reduce(
                    (obj, key) => {
                        obj[key] = data[key];
                        return obj;
                    },
                    {}
                );

                setArtists(ordered);
                setLoading(false);
            } catch (e) {
                console.log('e', e);
            }
        }
        getArtistsList();
    }, [query]);
    console.log('loading', loading);
    console.log('artists.length === 0', Object.keys(artists).length === 0);

    return (
        <div>
            {Object.keys(artists).length === 0 ? <div className={classes.empty}>Artist not found.</div> : Object.keys(artists).map((item) => {
                return <ArtistsListRow symbol={item} cardsList={artists[item]} />;
            })}

        </div>
    )
}
