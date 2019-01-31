import React from 'react';
import './ComponentDetails.css';
import { NavLink } from 'react-router-dom';
import * as request from 'superagent';

class ComponentDetails extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      productName : null,
      products :[]
    }
  }


  componentWillMount(){
    console.log('props',this.props.match.params.productName);
    const prodName = this.props.match.params.productName;
    request
    .post('http://giros.pruebasbarbaras.co/api/getProductsApi')
    .send({'term':prodName})
    .set('Content-Type','application/json')
    .end((err,res)=>{
      if(err || !res.ok){
        console.log('Error '+err);
      }else{
        var data = res.body;
        if(data.error==false){
          this.setState({products:data.products,productName:prodName});
          console.log(this.state.productName);
        }else{
          alert(data.message);
        }
      }
    });
  }

  handleBack() {
    this.props.history.push('/tienda');
  }


  render(){
    return(
      <div className="containter-details" >
        {this.state.products.map((product, index) => (
          <div className="top">
            <div className="title">
              <h2>{product.name}</h2>
            </div>
            <hr/>
            <div className="row product">
              <div className="col-md-6 image">
                <img src={`../${product.image}`} alt={product.name} />
              </div>
              <div className="col-md-6 descrip">
                <span>Precio:  ${product.price}</span>
                <span>Unidades disponibles: {product.quantity}</span>
              </div>
            </div>
            <button onClick={this.handleBack.bind(this)} class=" btn btn-outline-secondary">Atras</button>
          </div>
        ))}
      </div>
    );
  }
}
export default ComponentDetails;
