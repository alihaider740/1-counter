import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h2>Header</h2>
            <p> Name: {props.myName}</p>

        </div>
    );
};

export default Header;


