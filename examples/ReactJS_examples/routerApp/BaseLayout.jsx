import React from 'react';
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Error from './Error.jsx';


class BaseLayout extends React.Component{
  render(){
    return(
    <div className="base">
      <header>
        <p>React Router v4 Browser Example</p>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/me'>Profile</Link></li>
            </ul>
          </nav>
      </header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route component={Error} />
      </Switch>
      <footer>
          React Router v4 Browser Example (c) 2017
      </footer>
    </div>
    );
  }
}
export default BaseLayout;
