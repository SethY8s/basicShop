import React, { useState, useEffect } from 'react';
import cartCSS from './Cart.module.css';
import { Button } from 'react-bootstrap';
import CartItem from './CartItem';

import { connect } from 'react-redux'


function Cart({ cart }) {

const[totalItems, setTotalItems] = useState(0)
const[totalPrice, setTotalPrice] = useState(0)

useEffect(() => {
  let price = 0;
  let items = 0;

  cart.forEach((item) => {
    items += item.qty
    price += item.qty * item.price
  })
    
  setTotalItems(items)
  setTotalPrice(price)

}, [cart, totalItems, setTotalItems, totalPrice, setTotalPrice])

  return (
    <>
    <div className={cartCSS.cartcontainer}>
      {/* itmes box */}
      <section  className='d-inline-flex'>
      <div className={cartCSS.columnStyle}>
      {cart.map((item) => (
          <CartItem key={item.id} itemData={item}/>
        ))}
        </div>
        </section>
        
      {/* end of items box */}
      {/* Checkout box */}
      <div className={cartCSS.checkoutContainer}>
          <h4>
            {' '}
            <b>Cart Summary</b>
          </h4>

          <span>
            Total: ({totalItems})items{' '}
            <span className="m-3">
              <b>${totalPrice}</b>
            </span>
          </span>
          <Button>Proceed to Checkout</Button>
        </div>
      {/* end of checkout box */}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
