import React from 'react';
import AppActions from '../../actions/app-actions';

class AddToCart extends React.Component {
    constructor( props ) {
        super( props )
    }

    handler() {
        AppActions.addItem( this.props.item );
    }

    render() {
        return (
            <button
                className="btn btn-default"
                onClick={ this.handler.bind( this ) }>
                Add To Cart
            </button>
        );
    }
}

export default AddToCart;
