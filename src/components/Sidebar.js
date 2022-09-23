import React from 'react'
import '../Styles/Sidebar.css'
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='Sidebar__container'>
      <div className='Sidebar__content'>
        <Link to="/" className='Content__name'><h1 className='Sidebar__shopname'> Speak <br/> Shop </h1></Link>
      <div className='Sidebar__extra'>
      <i class="fa-regular fa-circle-user"></i>
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-solid fa-bag-shopping"></i>
      </div>
      <ul className='Sidebar__navlink'>
          <Link to="/clothes" className='Nav__links' >Clothes</Link>
        <Link to="/electronic" className='Nav__links'>Electronic</Link>
        <Link to="/furniture" className='Nav__links'>Furniture</Link>
        <Link to="/shoes" className='Nav__links'>Shoes</Link>
        <Link to="/others" className='Nav__links'>Others</Link>
      </ul>
      </div>
      
      <div className='Sidebar__footer'>
        <p className='Sidebar__hotline'><i class="fa-solid fa-phone"></i> 1900 686 999</p>
        <div className='Sidebar__connect'>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-tiktok"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar