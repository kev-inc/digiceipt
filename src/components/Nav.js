import React from 'react';
import { Link } from 'react-router-dom'

const Nav = (props) => (
    <div className="Nav">
        <nav className="navbar navbar-light bg-light fixed-top">
            <Link to='/' className="navbar-brand">Digiceipt</Link>
            <ul className="nav navbar-nav navbar-right">
                <Link className='btn btn-light' to='/home'><i className="fas fa-home"></i></Link>
            </ul>
        </nav>
        <nav className="navbar navbar-light bg-light">
            <span className="navbar-brand">Digiceipt</span>
        </nav>
    </div>
);

export default Nav