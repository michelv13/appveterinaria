import React from 'react';
import propTypes from 'prop-types';

const Header = ({titulo}) => ( 
    <header>
        <h1 className="text-center">{titulo}</h1>
    </header>
);

Header.propTypes = {
    titulo : propTypes.string.isRequired
}


export default Header;
