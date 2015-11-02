import React from 'react';
import CartButton from './app-cart-button';
import AppActions from '../../actions/app-actions'

export default ( props ) => {
    return (
        <tr>
            <td>
                <CartButton
                    index={props.index}
                    txt="x"
                    handler={AppActions.removeItem.bind(null, props.index )} />
            </td>
            <td>{props.item.title}</td>
            <td>{props.item.qty}</td>
            <td>
                <div className="btn-group">
                    <CartButton
                        index={props.index}
                        txt="-"
                        handler={AppActions.decreaseItem.bind(null, props.index )} />
                    <CartButton
                        index={props.index}
                        txt="+"
                        handler={AppActions.increaseItem.bind(null, props.index )} />
                </div>
            </td>
            <td>${props.subtotal}</td>
        </tr>
    );
};