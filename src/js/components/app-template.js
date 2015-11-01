import React from 'react';
import Header from './header/app-header';

export default ( props ) => {
    return (
        <div className="container">
            <Header />
            { props.children }
        </div>
    );
};


