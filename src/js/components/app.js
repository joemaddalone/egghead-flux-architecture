import React from 'react';
import Catalog from './catalog/app-catalog';
import Cart from './cart/app-cart';

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Consume</h1>
        <Catalog />
        <h1>Obey</h1>
        <Cart />
      </div>
    );
  }
}

export default App;
