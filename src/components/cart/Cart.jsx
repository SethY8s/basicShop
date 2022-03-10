import React from 'react';
import cartCSS from './Cart.module.css';
import { Button } from 'react-bootstrap';

export default function Cart() {
  return (
    <>
    <div className='d-flex justify-content-around mt-5'>
      {/* itmes box */}
      
        <div className={cartCSS.box}>
        <img
          className={cartCSS.cartimg}
          src="https://1.bp.blogspot.com/-TRjWedlKiV0/YTuBsN2bdVI/AAAAAAACVzc/SIgAqFkt8yIMUmqqRmbS-dHMEu7F8iN5ACNcBGAsYHQ/s16000/a.jpg"
          alt="ape"
        />
          <div className="d-flex flex-column justify-content-around">
            <h4>
              <b>Bored Ape colletion, several apes in one!</b>
            </h4>
            <p>
              This bored ape colletion includes, five apes. They are all special
              and are worth 10ETH each. These apes are give you exclusive rights
              to all the benifits of the bored ape colletion.
            </p>
            <p>
              <b>50ETH</b>
            </p>
          </div>
          <div className="d-flex flex-column justify-content-around">
            <div>
            <label for="quantity">Quantity</label>
            <input style={{width: '70px'}} className="me-4" name="quantity" id="quantity" type="number" placeholder="1" />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-trash3-fill"
              viewBox="0 0 16 16"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
            </svg>
          
        </div>
      </div>
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
