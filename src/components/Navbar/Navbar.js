import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import Brand from '../../logo.jpg';

const Navbar = () => {
    return (
        <div>

            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <Link className="navbar-brand mx-auto" to="#">
                        <img className='img-fluid' src={Brand} alt="Logo" /> Quiz Time</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/">Topics</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/statistics">Statistics</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link">Blog</Link>
                        </li>
                    </ul>
                    <ul className="d-flex navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Sign in</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/">Sign up</Link>
                           </li>
                    </ul>
                    
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;