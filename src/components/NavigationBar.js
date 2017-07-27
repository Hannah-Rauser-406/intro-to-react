import React from 'react';
import {Link} from 'react-router-dom';


const NavigationBar = () => {
  return(
    <div>
      <div className="btn-group" role="group" aria-label="...">
        <button type="button" className="btn btn-default"><Link to="/"> Home </Link></button>
        <button type="button" className="btn btn-default"><Link to="/web-app"> Web App </Link></button>
        <button type="button" className="btn btn-default"><Link to="/drink-app"> Drink App </Link></button>
        <button type="button" className="btn btn-default"><Link to="/chat-app"> Chat App </Link></button>
        <button type="button" className="btn btn-default"><Link to="/playground-app"> Playground </Link></button>
      </div>
    </div>
  )
}

export default NavigationBar;
