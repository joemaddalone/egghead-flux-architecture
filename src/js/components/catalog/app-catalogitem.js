import React from 'react'
import { Link } from 'react-router';
import AddToCart from './app-addtocart';


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
            <div className="btn-group btn-group-xs">
                <Link to={ `/item/${props.item.id}` } className="btn btn-default">Learn More</Link>
                <AddToCart item={ props.item }/>
            </div>
        </div>
    );
};
