import React from 'react';
import './ComponentSCart.css';
import { NavLink } from 'react-router-dom';
import * as request from 'superagent';

class ComponentSCart extends React.Component{
  constructor(props){
    super(props);
    this.state ={
    }
  }

  render(){
    return(
      <div className="containter-cart">
        <div className="top">
          <div className="title">
            <h2>Carrito de compras</h2>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6">
              <div className="row" >
                <div className="col-xs-12">
                  <article className="product">
                    <div className="content-data">
                      <img src="{{item.image}}" alt="" className="listProductImage" />
                      <h4>name</h4>
                      <span className="stock">Unidades: </span>
                      <span className="price">subtotal: $</span>

                    </div>
                  </article>
                </div>
              </div>
            </div>

            <div className="col-xs-6">
              <div className="row">
                <div className="col-xs-12 black">
                  <span className="stock">Total: $</span>
                  <div className="buttons">
                    <button type="button" name="button" >Cancelar</button>
                    <button type="button" name="button" >Pagar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ComponentSCart;
