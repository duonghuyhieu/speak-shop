import React, { Component } from 'react'
import '../Styles/Clothes.css'
import Slideshow from '../components/Slideshow'
import axios from 'axios'
import ProductItem from '../components/ProductItem'

export class Clothes extends Component {
  state = {
    listProduct: []
}
async componentDidMount() {
    let res = await axios.get('https://api.escuelajs.co/api/v1/products');
    this.setState({
        listProduct: res && res.data ? res.data : []
    })
    console.log(res.data)
}
  render() {
    let { listProduct } = this.state;
    return (
      <div className='Clothes__container'>
        {/* <Slideshow/> */}
        <h1> Clothes</h1>
        <div className='Colection__container'>
        {listProduct && listProduct.length > 0 &&
                        listProduct.map((item, index) => {
                            return (
                                <ProductItem key={item.id}
                                title = {item.title}
                                price = {item.price}
                                img = {item.images[1]}
                                 />   
                              
                            )
                        })
                    }
        </div>
      </div>
    )
  }
}

export default Clothes