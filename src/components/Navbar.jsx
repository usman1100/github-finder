import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/">
                <div className="navbar-brand">Github Finder</div>
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarColor02"
                aria-controls="navbarColor02"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">



                    <li className="nav-item">
                        <Link to="/">
                            <div className="nav-link">Home</div>
                        </Link>
                    </li>


                    <li className="nav-item">
                        <Link to="/about">
                            <div className="nav-link">About</div>
                        </Link>
                    </li>



                    <li className="nav-item">
                        <Link to="/api">
                            <div className="nav-link">API</div>
                        </Link>
                    </li>



                </ul>
            </div>
        </nav>
    );
}
