import {dispatch, register} from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import assign from 'react/lib/Object.assign';
import { EventEmitter } from 'events';

let CHANGE_EVENT = 'change';

let _catalog = [];

for ( var i = 1; i < 9; i++ ) {
    _catalog.push( {
        'id': 'FeelBetter' + i,
        'title': 'Feel Better #' + i,
        'summary': 'consume this!',
        'description': 'This will improve your life.',
        'cost': i
    } );
}

let _cartItems = [];

let _removeItem = ( index ) => {
    _cartItems[index].inCart = false;
    _cartItems.splice( index, 1 );
};

let _increaseItem = ( index ) => {
    _cartItems[index].qty++;
};

let _decreaseItem = ( index ) => {
    if ( _cartItems[index].qty > 1 ) {
        _cartItems[index].qty--;
    }
    else {
        _removeItem( index );
    }
};

let _addItem = ( item ) => {
    if ( !item.inCart ) {
        item['qty'] = 1;
        item['inCart'] = true;
        _cartItems.push( item );
    }
    else {
        _cartItems.forEach( function ( cartItem, i ) {
            if ( cartItem.id === item.id ) {
                _increaseItem( i );
            }
        } );
    }
};

let _cartTotals = () => {
    let qty = 0, total = 0;
    _cartItems.forEach( function ( cartItem ) {
        qty += cartItem.qty;
        total += cartItem.qty * cartItem.cost;
    } );
    return {'qty': qty, 'total': total};
};

let AppStore = assign( EventEmitter.prototype, {
    emitChange() {
        this.emit( CHANGE_EVENT );
    },

    addChangeListener( callback ) {
        this.on( CHANGE_EVENT, callback );
    },

    removeChangeListener( callback ) {
        this.removeListener( CHANGE_EVENT, callback );
    },

    getCart() {
        return _cartItems;
    },

    getCatalog() {
        return _catalog;
    },

    getCartTotals() {
        return _cartTotals()
    },

    dispatcherIndex: register( function ( action ) {
        switch ( action.actionType ) {
            case AppConstants.ADD_ITEM:
                _addItem( action.item );
                break;

            case AppConstants.REMOVE_ITEM:
                _removeItem( action.index );
                break;

            case AppConstants.INCREASE_ITEM:
                _increaseItem( action.index );
                break;

            case AppConstants.DECREASE_ITEM:
                _decreaseItem( action.index );
                break;
        }

        AppStore.emitChange();
    } )

} );

export default AppStore;
