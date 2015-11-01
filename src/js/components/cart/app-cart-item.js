import React from 'react';
import RemoveFromCart from './app-removefromcart.js';
import Increase from './app-decreaseitem';
import Decrease from './app-increaseitem';

export default ( props ) => {
    return (
        <tr>
            <td><RemoveFromCart index={props.index}/></td>
            <td>{props.item.title}</td>
            <td>{props.item.qty}</td>
            <td>
                <Increase index={props.index}/>
                <Decrease index={props.index}/>
            </td>
            <td>${props.subtotal}</td>
        </tr>
    );
};