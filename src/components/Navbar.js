import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <Link to="/" style={{ margin: 12 }}>Home</Link>
            <Link to="/about" style={{ margin: 12 }}>About</Link>
            <Link to="/api">API</Link>
        </div>
    )
}

export default Navbar;


