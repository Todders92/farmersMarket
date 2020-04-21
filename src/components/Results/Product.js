import React from 'react';
import availableProduce from './SeasonalProduce';
import PropTypes from "prop-types";

function Product(props) {
  return (
    <React.Fragment>
      <div class="mdl-card">
        <p>{props.name}</p>
      </div>
    </React.Fragment>
  );
}
  
// Product.propTypes = {
//   name: PropTypes.string
// };

export default Product;