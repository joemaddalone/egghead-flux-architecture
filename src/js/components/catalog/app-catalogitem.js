import React from 'react'
import { Link } from 'react-router';
import AppActions from '../../actions/app-actions'
import CartButton from '../cart/app-cart-button';

export default ( props ) => {
    let itemStyle = {
        borderBottom: '1px solid #ccc',
        paddingBottom: 15
    };
    return (
        <div className="col-sm-3" style={itemStyle}>
            <h4>{ props.item.title }</h4>
            <img src="http://placehold.it/150x150" alt=""/>
            <p>{ props.item.summary }</p>
            <p>${ props.item.cost } <span
                className="text-success">{ props.item.inCart && `(${props.item.qty} in cart)` }</span></p>
            <div className="btn-group">
                <Link to={ `/item/${props.item.id}` } className="btn btn-default btn-sm">Learn More</Link>
                <CartButton txt="Add ToCart" handler={AppActions.addItem.bind(null, props.item )} />
            </div>
        </div>
    );
};
