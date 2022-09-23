import React from 'react'
import '../Styles/Home.css'
import line from '../assets/line.png'
import bannermini from '../assets/banner_mini.jpg'
import Slideshow from '../components/Slideshow'
import storesystem from '../assets/store_system.jpg'
import Banner from '../components/Banner'
function Home() {
  fetch('https://api.escuelajs.co/api/v1/products')
  //categories Clothes Electronic Furniture Shoes Others
          .then(res=>res.json())
          .then(json => console.log(json))
  return ( 
    <div>
        
        <div className='Home__container' >
        <Slideshow />
        <Banner />
          <h1>NEW ARRIVALS</h1>
        <img src={line} alt=''/>
        <img src={bannermini} className='Home_bannermini' alt=''/>
        <h1>STORE SYSTEM</h1>
        <img src={line} alt=''/>
        <img src={storesystem} className='Home_storesystem' alt=''/>
        
    </div>
    </div>
  )
}

export default Home