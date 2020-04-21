import React from 'react';
import MarketSchedule from './MarketSchedule';
import PropTypes from "prop-types";

function Location(props) {
  console.log("props: ", props)
  return (
    <React.Fragment>
      <h3>Market: {props.location}</h3>
      <p>Hours: {props.hours}</p>
      <p>Booth: {props.booth}</p>
    </React.Fragment>
  );
}

export default Location;