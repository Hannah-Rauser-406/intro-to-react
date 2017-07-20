
import React from 'react';

const JumboTron = (props) => {
  return(
    <div>
      <h3> {props.header} </h3>
      <p>  {props.callToAction}</p>
    </div>
  )
}
export default JumboTron;
