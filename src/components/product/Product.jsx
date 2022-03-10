import React from 'react'
import { Link } from 'react-router-dom'
import productCSS from './Product.module.css'


export default function Product() {
  return (
      
    
        <div className={productCSS.productContainer}>

        <img src="https://wallpaperaccess.com/full/7871566.png" alt="ape" />

       
        
        <h2 className={productCSS.productText}>Ape</h2>
        <p className='mt-3'>$15</p>
        
        
        
        <span>
        <Link to='/product/:id'><button className='btn btn-sm btn-primary m-2'>View item</button></Link>
        <button className='btn btn-sm btn-primary m-2'>Add to Cart</button>
        </span>
        </div>
        

    
    
  )
}
