import React from 'react';
import './ComponentStore.css';

class ComponentStore extends React.Component{
  constructor(){
    super();
    this.state={
      title :'Inicia Sesión'
    }
  }

  componentWillMount(){
    
  }

  render(){
    return(
      <div className="containter-store">
        <div className="top">
          <div className="title">
            <h2>Catálogo de productos</h2>
          </div>
          <div className="search">
            <h3>¿Qué esta buscando?</h3>
            <input type="text" name="" value="" placeholder="Buscar producto">
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-3" *ngFor="let item of products; let i = index;">
              <article className="product">
                <div className="content-data">
                  <img src="{{item.image}}" alt="" className="listProductImage">
                  <h4>{{item.name}}</h4>
                  <span className="price">Precio: ${{item.price}}</span>
                  <span className="stock">Unidades disponibles: {{item.quantity}}</span>
                  <div className="buttons">
                    <a [routerLink]="['producto', item.name]" className="btn btn-primary">
                      Ver más
                    </a>
                    <button className="btn btn-warning" type="button" name="add" (click)="addProductShoppingCart(item,data.value)">Añadir</button>
                    <input className="quantity" type="number" name="quantity_{{item.id}}" id="quantity_{{item.id}}" min="0" value="0" step="1" (change)="setQuantity($event.target.value)" #data>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

      </div>
    );
}

export default ComponentStore;
