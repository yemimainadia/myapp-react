import React from 'react';

const Header = () => {
    const HeaderStyle = {
        margin: '25px auto 50px',
        fontFamily: '"Satisfy", cursive',
        fontSize: '50px'
    };
    return (
        <div>
            <h1 style={HeaderStyle}>Cook Book</h1>
        </div>
    );
}

export default Header;
