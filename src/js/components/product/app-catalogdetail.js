import React from 'react';
import AppStore from '../../stores/app-store.js';
import AddToCart from '../catalog/app-addtocart.js';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import { Link } from 'react-router';

function getCatalogItem( props ) {
    let item = AppStore.getCatalog().filter( item => item.id === props.params.item )[0];
    return {item};
}

const CatalogDetail = ( props ) => {
    return (
        <div>
            <h2>{ props.item.title }</h2>
            <img src="http://placehold.it/150x150" alt=""/>
            <p>{ props.item.description }</p>
            <p>${ props.item.cost } <span className="text-success">
              { props.item.inCart && '(' + props.item.qty + ' in cart)' }
            </span>
            </p>
            <div className="btn-group btn-group-sm">
                <AddToCart item={ props.item }/>
                <Link to='/' className="btn btn-default">Continue Shopping</Link>
            </div>
        </div>
    );
};

export default StoreWatchMixin( CatalogDetail, getCatalogItem );
