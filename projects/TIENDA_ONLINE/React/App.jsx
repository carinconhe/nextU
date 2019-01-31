import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import ComponentFormLogin from './form-login/ComponentFormLogin.jsx';
import ComponentStore from './store/ComponentStore.jsx';
import ComponentNavTop from './nav-top/ComponentNavTop.jsx';
import ComponentDetails from './details/ComponentDetails.jsx';
import ComponentSCart from './shopping-cart/ComponentSCart.jsx';
import Error from './Error.jsx';


class App extends React.Component{
  constructor(){
    super();
    this.state={
      visibleDiv : true
    }
  }
  render(){
    return(
        <div id="contentMain">
          <div id="menu">
            <ComponentNavTop visibleDivProps={this.state.visibleDiv}/>
          </div>
          <Switch>
            <Route path="/" exact component={ComponentFormLogin} />
            <Route path="/tienda" component={ComponentStore} />
            <Route path="/carrito" component={ComponentSCart} />
            <Route path="/detalle/:productName" component={ComponentDetails}  />
            <Route component={Error} />
            <Redirect to="/" />
          </Switch>
        </div>
    );
  }

}
export default App;
