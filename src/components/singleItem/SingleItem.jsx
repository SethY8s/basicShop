import React from 'react';
import itemCSS from './SingleItem.module.css'
import { Button } from 'react-bootstrap'

export default function SingleItem() {
  return (
    <>
    <div className={itemCSS.box}>
      <div className='d-flex flex-column align-items-center'>
      <div className="d-flex">
        <img
        className='mx-2'
          style={{borderRadius: "10px",
        height:"18rem",
      width:"18rem"}}
          src="https://1.bp.blogspot.com/-TRjWedlKiV0/YTuBsN2bdVI/AAAAAAACVzc/SIgAqFkt8yIMUmqqRmbS-dHMEu7F8iN5ACNcBGAsYHQ/s16000/a.jpg"
          alt="ape"
        />
        <div className="d-flex flex-column justify-content-between mx-2">
          <h2>Bored Ape colletion, several apes in one!</h2>
          <p>This bored ape colletion includes, five apes. They are all special
              and are worth 10ETH each. These apes are give you exclusive rights
              to all the benifits of the bored ape colletion.</p>
          <p><b>50Eth</b></p>
          
          </div>
      </div>
      <Button className={itemCSS.addToCart}>Add to Cart</Button>
    </div>
    {/* <Button className={itemCSS.addToCart}>Add to Cart</Button> */}

    </div>
    </>
  );
}
