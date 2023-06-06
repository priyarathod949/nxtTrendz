// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="logo"
      />
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-Link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="nav-Link">
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" className="nav-Link">
            Cart
          </Link>
        </li>
      </ul>
      <button type="button" className="button">
        Logout
      </button>
      <button type="button" className="logout-icon-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="logout-icon"
        />
      </button>
    </div>
  </nav>
)

export default Header
