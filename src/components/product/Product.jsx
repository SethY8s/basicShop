import React from 'react'
import { Link } from 'react-router-dom'
import productCSS from './Product.module.css'


export default function Product( {productData} ) {
  return (
      
    
        <div className={productCSS.productContainer}>

        <img className={productCSS.productImg} src={productData.image} alt={productData.title} />

       
        
        <h2 className={productCSS.productText}>{productData.title}</h2>
        <p className='mt-3'>${productData.price}</p>
        
        
        
        <span>
        <Link to='/product/:id'><button className='btn btn-sm btn-primary m-2'>View item</button></Link>
        <button className='btn btn-sm btn-primary m-2'>Add to Cart</button>
        </span>
        </div>
        

    
    
  )
}
