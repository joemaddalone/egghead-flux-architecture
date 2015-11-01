import React from 'react'
import AppActions from '../../actions/app-actions'

class IncreaseItem extends React.Component {
    constructor() {
        super();
    }

    handler() {
        AppActions.increaseItem( this.props.index );
    }

    render() {
        return <button onClick={ this.handler.bind( this ) }>+</button>;
    }
}

export default IncreaseItem;
