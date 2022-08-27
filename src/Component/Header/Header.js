import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <header className="header_area">
                <div className="top_menu">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="float-left">
                                    <p>Phone: +01 256 25 235</p>
                                    <p>email: info@eiser.com</p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="float-right">
                                    <ul className="right_side">
                                        <li>
                                            <a href="cart.html">
                                                gift card
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tracking.html">
                                                track order
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact.html">
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main_menu">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light w-100">
                            {/* Brand and toggle get grouped for better mobile display */}
                            <a className="navbar-brand logo_h" href="index.html">
                                <img src="img/logo.png" alt />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>

                            <div className="collapse navbar-collapse offset w-100" id="navbarSupportedContent">
                                <div className="row w-100 mr-0">
                                    <div className="col-lg-7 pr-0">
                                        <ul className="nav navbar-nav center_nav pull-right">
                                            <li className="nav-item active">
                                                <NavLink className="nav-link" to={"/"}>Home</NavLink>
                                            </li>
                                            <li className="nav-item submenu dropdown">
                                                <NavLink to={"/"} className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Shop</NavLink>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to={"/Shope"}>Shop Category</NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to={"/Product"}>Product Details</NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to={"/Checkout"}>Product Checkout</NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to={"/Cart"}>Shopping Cart</NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item submenu dropdown">
                                                <NavLink to={"/"} className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</NavLink>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to={"/Blog"}>Blog</NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to={"/Blogdetails"}>Blog Details</NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item submenu dropdown">
                                                <NavLink to={"/"} className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</NavLink>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to={"/Tracking"}>Tracking</NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to={"/Elements"}>Elements</NavLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to={"/Contact"}>Contact</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-5 pr-0">
                                        <ul className="nav navbar-nav navbar-right right_nav pull-right">
                                            <li className="nav-item">
                                                <a href="#" className="icons">
                                                    <i className="ti-search" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="icons">
                                                    <i className="ti-shopping-cart" />
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="icons">
                                                    <i className="ti-user" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="icons">
                                                    <i className="ti-heart" aria-hidden="true" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

        </div>
    );
}

export default Header;