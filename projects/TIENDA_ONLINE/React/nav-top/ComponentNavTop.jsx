import React from 'react';
import './ComponentNavTop.css';
import { NavLink } from 'react-router-dom';

class ComponentNavTop extends React.Component{
  constructor(){
    super();
    this.state ={
      title : "La Bodega",
      visibleDiv : true
    }
  }
  render(){
    return(
      <div id="navtop" className={this.props.visibleDivProps?'visibleNav':'hiddenNav'}>
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container">
            <a href="#" className="title-store">{this.state.title}</a>
            <ul className="right">
              <li><NavLink to='/tienda'><span className="glyphicon glyphicon-th"></span></NavLink></li>
              <li><NavLink to='/carrito'><span className="glyphicon glyphicon-shopping-cart"></span></NavLink>
                <label className="totalProd" ></label>
              </li>
              <li><NavLink to='/'><span className="glyphicon glyphicon-inbox"></span></NavLink></li>
              <li><NavLink to='/'><span className="glyphicon glyphicon-log-out"></span></NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
ComponentNavTop.defaultProps = {
  mensaje3 : 'Props por defecto'
}
export default ComponentNavTop;
