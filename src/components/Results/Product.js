import React from 'react';
import PropTypes from "prop-types";

function Product(props) {
  return (
    <React.Fragment>
      <div className="product-div">
        <h5>{props.name}</h5>
      </div>
    </React.Fragment>
  );
}
  
Product.propTypes = {
  name: PropTypes.string
};

export default Product;