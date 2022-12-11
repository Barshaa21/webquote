import React from 'react';
import { useEffect, useState } from 'react';
import ItemQuotes from './ItemQuotes';
import photo from './img.jpg';

export default function Home() {
    const [items, setItem] = useState([])
    const fetchData = () => {
        return fetch('https://jsonguide.technologychannel.org/quotes.json')
            .then((response) => response.json())
            .then((data) => { setItem(data) })
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (

        <>
            <img src={photo} height='400px' width='1400px' alt="naturephoto" />
            <div className="container" fetchData={fetchData}>{fetchData}</div>
            {items.map((item) => <ItemQuotes author={item.from} text={item.text} />)}
        </>
    )
}

