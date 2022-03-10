import React from 'react';
import cartCSS from './Cart.module.css';
import { Button } from 'react-bootstrap'

export default function Cart() {
  return (
    <>
    <div className="contianer m-5">
      <div className="d-flex">
        <div className='col-8' style={{height: "20rem",
      backgroundColor:'red'}}>
        <img src="https://wallpaperaccess.com/full/7871566.png" alt="ape" />
        
        </div>
        <div className={cartCSS.checkoutContainer}>
          <span><b>Cart Summary</b></span>
          <span>Total: (1 item) <span className='m-3'><b>$15</b></span></span>
          <Button >Procude to Checkout</Button>
        </div>
      </div>
      </div>
    </>
  );
}
