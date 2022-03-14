import React from 'react';
import itemCSS from './SingleItem.module.css';
import { Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { addToCart } from '../../redux/shopping/shopping-actions'

function SingleItem( {currentItem, addToCart }) {
  return (
    <>
      <div className={itemCSS.box}>
        <div className="d-flex flex-column align-items-center">
          <div className="d-flex">
            <img
              className="mx-2"
              style={{ borderRadius: '10px', height: '18rem', width: '18rem' }}
              src={currentItem.image}
              alt="ape"
            />
            <div className="d-flex flex-column justify-content-between mx-2">
              <h2>{currentItem.title}</h2>
              <p>
                {currentItem.description}
              </p>
              <p>
                <b>${currentItem.price}</b>
              </p>
            </div>
          </div>
          <Button onClick={()=> addToCart(currentItem.id)} className={itemCSS.addToCart}>Add to Cart</Button>
        </div>
        {/* <Button className={itemCSS.addToCart}>Add to Cart</Button> */}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};

const dispatchToProps = dispatch => {
  return {
    addToCart: (id) => dispatch(addToCart(id))
  }
}

export default connect(mapStateToProps, dispatchToProps)(SingleItem);
