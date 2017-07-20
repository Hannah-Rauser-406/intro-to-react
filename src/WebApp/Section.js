import React from 'react';

const Section = (props) => {
  return(
    <div className="section header-with-img">
      <div className="img">
        <img className="cat-img" alt='presentation' src={props.img} />
        <p> {props.sectionHeader}</p>
      </div>
    </div>
  )
}

export default Section;
