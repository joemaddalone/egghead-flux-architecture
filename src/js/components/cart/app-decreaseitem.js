import React from 'react'
import AppActions from '../../actions/app-actions'

class DecreaseItem extends React.Component {
    constructor() {
        super();
    }

    handler() {
        AppActions.decreaseItem( this.props.index );
    }

    render() {
        return <button onClick={ this.handler.bind( this ) }>-</button>;
    }
}

export default DecreaseItem;
