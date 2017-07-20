import React from 'react';

const NavBar = (props) => {
  return(
    <nav className='nav'>
      <ul className='nav-item-container'>
        {
          props.navLinks.map(function(item, index){
          {/*I am a comment*/}
            return <li key={index} >{item}</li>
          })
        }
      </ul>
    </nav>
  )
}

export default NavBar;
