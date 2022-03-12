import React from 'react';
import cartCSS from './Cart.module.css';
import { Button } from 'react-bootstrap';
import CartItem from './CartItem';

import { connect } from 'react-redux'

function Cart({ cart }) {
  return (
    <>
    <div className={cartCSS.cartcontainer}>
      {/* itmes box */}
      <section  className='d-inline-flex'>
      <div className={cartCSS.columnStyle}>
        <CartItem />
        <CartItem />
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
            Total: (1 item){' '}
            <span className="m-3">
              <b>$15</b>
            </span>
          </span>
          <Button>Proceed to Checkout</Button>
        </div>
      {/* end of checkout box */}
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(Cart)
