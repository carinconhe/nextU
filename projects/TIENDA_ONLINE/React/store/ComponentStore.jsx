import React from 'react';
import './ComponentStore.css';
import { NavLink } from 'react-router-dom';
import * as request from 'superagent';


class ComponentStore extends React.Component{
  constructor(){
    super();
    this.state={
      title     :'Catálogo de productos',
      visibleDiv: true,
      products  :[],
      sCart     : {total:0,totalVisible:true,products:[]}
    }
  }

  componentWillMount(){
    request
    .get('http://giros.pruebasbarbaras.co/api/getProductsApi')
    .set('Content-Type','application/json')
    .end((err,res)=>{
      if(err || !res.ok){
        console.log('Error '+err);
      }else{
        var data = res.body;
        if(data.error==false){
          this.setState({products:data.products});
        }else{
          alert(data.message);
        }
      }
    });
  }

  addProductShoppingCart(param, e) {
  console.log('Parameter', param);
  console.log('Event', e.target);
}


  render(){
    return(
      <div className="containter-store">
        <div className="top">
          <div className="title">
            <h2>{this.state.title}</h2>
          </div>
          <div className="search">
            <h3>¿Qué esta buscando?</h3>
            <input type="text" name="" value="" placeholder="Buscar producto" />
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            {this.state.products.map((product, index) => (
              <div className="col-xs-3">
                <article  className="product">
                  <div className="content-data">
                    <img src={product.image} alt="" className="listProductImage" />
                    <h4>{product.name}</h4>
                    <span className="price">Precio: ${product.price}</span>
                    <span className="stock">Unidades disponibles: {product.quantity}</span>
                    <div className="buttons">
                      <NavLink to={`/detalle/${product.name}`} className="btn btn-primary">
                        Ver más
                      </NavLink>
                      <button className="btn btn-warning" type="button" name="add" onClick={this.addProductShoppingCart.bind(this,{product})}>Añadir</button>
                      <input className="quantity" type="number" name="quantity_id" key={index} min="0" placeholder="1" step="1" />
                    </div>
                  </div>
                </article>
              </div>
            ))}

          </div>
        </div>
      </div>
    );
  }
}

export default ComponentStore;
