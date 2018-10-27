import React from 'react';
import './ComponentNavTop.css';

class ComponentNavTop extends React.Component{
  constructor(){
    super();
    this.state ={
      title : "La Bodega"
    }
  }
  render(){
    return(
      <div id="navtop" className={this.props.visibleDivProps?'visibleNav':'hiddenNav'}>
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container">
            <a href="#" className="title-store">{this.state.title}</a>
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
ComponentNavTop.defaultProps = {
  mensaje3 : 'Props por defecto'
}
export default ComponentNavTop;
