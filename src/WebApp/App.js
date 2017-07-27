import React from 'react';

import NavBar from './NavBar';
import Section from './Section';
import JumboTron from './JumboTron';




const App = () => {
  return(
    <div className="app-container">
      <NavBar navLinks={["Home", "About", "Contact", "Blog"]}/>
        <div className="jumboTron jumbotron">
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

export default App;
