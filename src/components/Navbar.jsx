import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"

export const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    return (
      <div>
          <nav className="nav_items">
            <div className="left">
              <img src="/images/icon-menu.png" alt="menu-icon" className="menu" onClick={() => {setIsActive(!isActive)}}/>
              <h1 className="logo_name"><Link to='/'>sneakers</Link></h1>
              <ul className={isActive ? 'active' : 'nav_list'}>
                <li>
                  <Link to='/collection'>Collections</Link>
                </li>
                <li>
                  <Link to='/men'>Men</Link>
                </li>
                <li>
                  <Link to='/women'>Women</Link>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="right">
              <img
                className="cart-logo"
                src="/images/icon-cart.png"
                alt="cart-icon"
              />
              <img
                className="avatar-logo"
                src="/images/image-avatar.png"
                alt="avatar-img"
              />
            </div>
          </nav>
        </div>
    );
}
