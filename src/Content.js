import React from 'react';
import { useEffect, useState } from 'react';
import ItemQuotes from './components/ItemQuotes';
import nature from './components/nature.jpg';


export default function Content() {
  const [items, setItem] = useState([])
  const fetchdata = () => {
      return fetch('https://jsonguide.technologychannel.org/quotes.json')
          .then((response) => response.json())
          .then((data) => { 
            let number=Math.floor(Math.random() * data.length)
            setItem(data[number]);
            // <p> this is data</p>
            // console.log(data);
          })
          // .catch((error)=>{
          //     console.log('error')
          // })
          
  }

  useEffect(() => {
      fetchdata()
  }, [])

  return (
    <div style={{color:'white',backgroundImage:"url(/nature.jpg)", height:600}} >
      
      <h1>Quote of the day</h1>
     
      <div className='container' style={{color:'white',paddingTop: '70px',}} >
        
          <ItemQuotes author={items.from} text={items.text} />
         


      </div>
    </div>
  )
}
