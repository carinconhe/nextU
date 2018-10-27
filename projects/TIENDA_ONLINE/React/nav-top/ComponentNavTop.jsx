import React from 'react';
import './ComponentNavTop.css';

class ComponentNavTop extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div id="navtop" >
        <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
          <div class="container">
            <a href="#" className="title-store">La Bodega</a>
            <ul className="right">
              <li><a href="['catalogo']"><span className="glyphicon glyphicon-th"></span></a></li>
              <li>
                <a href="['carrito']"><span className="glyphicon glyphicon-shopping-cart"></span></a>
                <label className="totalProd" ></label>
              </li>
              <li><a href="['']"><span className="glyphicon glyphicon-inbox"></span></a></li>
              <li><a href="['']"><span className="glyphicon glyphicon-log-out"></span></a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default ComponentNavTop;
