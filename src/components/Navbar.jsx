import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { cartContext } from "../ContextApi";
import Cart from "./Cart/Cart";
import './Navbar.css'

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleNavLink = () => {
    setIsActive(isActive, "nav_list");
  };

  const {cart} = useContext(cartContext);

  return (
    <div>
      <nav className="nav_items">
        <div className="left">
          <img
            src={isActive ? "/images/icon_close.png" : "/images/icon-menu.png"}
            alt="menu-icon"
            className="menu"
            onClick={() => {
              setIsActive(!isActive);
            }}
          />
          <h1 className="logo_name">sneakers</h1>
          <ul className={isActive ? "active" : "nav_list"}>
            <li onClick={handleNavLink}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li onClick={handleNavLink}>
              <NavLink to="men">Men</NavLink>
            </li>
            <li onClick={handleNavLink}>
              <NavLink to="women">Women</NavLink>
            </li>
            <li onClick={handleNavLink}>
            <NavLink to="about">About</NavLink>
            </li>
            <li onClick={handleNavLink}>
            <NavLink to="contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="right">
          <Link to="/cart">
            <img
              className="cart-logo"
              src="/images/icon-cart.png"
              alt="cart-icon"
            />
            {cart.length}
          </Link>
          <img
            className="avatar-logo"
            src="/images/image-avatar.png"
            alt="avatar-img"
          />
        </div>
      </nav>
    </div>
  );
};
