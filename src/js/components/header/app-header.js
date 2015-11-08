import React from 'react';
import CartSummary from './app-cartsummary';

export default () => {
  return (
      <div className="row" style={{borderBottom: '1px solid #ccc'}}>
          <div className="col-sm-2"><h1>Store</h1></div>
          <div className="col-sm-10 text-right">
              <CartSummary />
          </div>
      </div>
  );
}
