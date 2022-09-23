import React from 'react'
import '../Styles/ProductItem.css'

function ProductItem(props) {
  return (
    <div className='PI__container'>
      <img src={props.img} alt=""></img>
      <div className='PI__info'>
        <h2>{props.title}</h2>
        <p>{props.price}</p>
      </div>
    </div>
  )
}

export default ProductItem