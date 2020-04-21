import React from 'react';
import availableProduce from './SeasonalProduce';
import PropTypes from "prop-types";

function Product(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
    </React.Fragment>
  );
}
  
// Product.propTypes = {
//   name: PropTypes.string
// };

export default Product;