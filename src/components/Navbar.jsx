import React, {useState} from 'react'
import "./Navbar.css"

export const Navbar = () => {
    const [isActive, setIsactive] = useState(false);

    return (
      <div>
          <nav className="nav_items">
            <div className="left">
              <img src="/images/icon-menu.png" alt="menu-icon" className="menu" onClick={() => {setIsactive(!isActive)}}/>
              <h1 className="logo_name">sneakers</h1>
              <ul className={isActive ? 'active' : 'nav_list'}>
                <li>
                  <a href="#">Collections</a>
                </li>
                <li>
                  <a href="#">Men</a>
                </li>
                <li>
                  <a href="#">Women</a>
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
