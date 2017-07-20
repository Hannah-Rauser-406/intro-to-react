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
const JumboTron = (props) => {
  return(
    <div>
      <h3> {props.header} </h3>
      <p>  {props.callToAction}</p>
    </div>
  )
}
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
const WebApp = () => {
  return(
    <div className="app-container">
      <NavBar navLinks={["Home", "About", "Contact", "Blog"]}/>
        <div className="jumboTron">
          <JumboTron
          header={"Web App"}
          callToAction={"built with React"}
          />
        </div>
        <div className="section">
          <Section
          img={"https://s-media-cache-ak0.pinimg.com/originals/3f/85/c6/3f85c65d066f3736bcd495084604d940.jpg"}
          sectionHeader={"This is a cat's feet"}
          />
        </div>
    </div>
  )
}

export default WebApp;
