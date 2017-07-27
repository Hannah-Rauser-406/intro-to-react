import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';




import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App from "./WebApp/App";
import ChatApp from "./Chatter/ChatApp";
import NavigationBar from './components/NavigationBar';
import DrinkApp from './DrinkApp/DrinkApp';
import Playground from './Playground/app';

//our router should navigate to:
// -Home
// -Chat App
// -Numbers map
// -Web App
const Home = () => {
return (
  <div>
    <h3> Hello from Home </h3>
  </div>
  )
}

ReactDOM.render((
  <Router>
    <div>

        <NavigationBar />
        <Route path="/web-app" component={App}/>
        <Route path="/chat-app" component={ChatApp} />
        <Route path="/drink-app" component={DrinkApp}/>
        <Route path="/playground-app" component={App}/>
        <Route exact path="/" component={Playground}/>

    </div>
  </Router>
), document.getElementById('root'));
