import React from 'react';
import AppStore from  '../../stores/app-store.js';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import { Link } from 'react-router';

const CartSummary = ( props ) => {
    return (
        <div>
            <Link to="/cart" className="btn btn-success">
                { `Cart Items: ${props.qty} / $${props.total}` }
            </Link>
        </div>
    );
};

export default StoreWatchMixin( CartSummary, AppStore.getCartTotals );
