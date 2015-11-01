import React from 'react';
import AppStore from '../../stores/app-store.js';
import AddToCart from './app-addtocart.js';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import CatalogItem from '../catalog/app-catalogitem';

function getCatalog() {
    return {items: AppStore.getCatalog()}
}

const Catalog = ( props ) => {
    var items = props.items.map( ( item ) => {
        return <CatalogItem key={ item.id } item={ item } />
    } );
    return (
        <div className="row">
            { items }
        </div>
    );
};

export default StoreWatchMixin( Catalog, getCatalog );
