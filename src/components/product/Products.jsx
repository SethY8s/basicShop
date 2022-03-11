import React from 'react';
import Product from './Product';

import { connect } from 'react-redux';

function Products({ products }) {
  return (
    <div className="d-flex justify-content-around mt-5">
      {products.map((prod) => {
        return <Product key={prod.id} productData={prod}/>;
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
