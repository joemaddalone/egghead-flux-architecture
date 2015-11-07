import React from 'react';
import CartSummary from './app-cartsummary';

export default () => {
    return (
        <div className="row">
            <div className="col-sm-6"><h1>Store</h1></div>
            <div className="col-sm-2 col-sm-push-3">
                <br />
                <CartSummary />
            </div>
        </div>
    );
};
