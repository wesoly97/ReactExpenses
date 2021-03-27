import React from "react";
import './Navbar.css'
const Navbar = () => {
    return(
        <div className="row">

            <nav>
                <div className="nav-wrapper grey darken-3">
                    <div className="container">
                        <div className="row navRow">
                            <div className="col s1">
                                <a href="/" className="brand-logo">E-EXPENSE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default  Navbar