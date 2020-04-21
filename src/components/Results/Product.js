import React from 'react';
import PropTypes from "prop-types";

function Product(props) {
  return (
    <React.Fragment>

        <h5>{props.name}</h5>

    </React.Fragment>
  );
}
  
Product.propTypes = {
  name: PropTypes.string
};

export default Product;