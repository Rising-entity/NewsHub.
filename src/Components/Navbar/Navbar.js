import React from 'react';
import { Link } from 'react-router-dom';
import img from '../Images/Colorful Live News Free Logo.png';
import '../Navbar/Navbar.css';

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={img} alt="imagelogo" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto"> {/* Add ms-auto class here */}
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">
                                    General
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports">
                                    Sports
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ent">
                                    Entertainment
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/buis">
                                    Business
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/politics">
                                    Politics
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science">
                                    Science and Technology
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
