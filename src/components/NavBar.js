import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <header className="nav-header">
    <nav className="navbar">
      <div>
        <div className="navlist">
          <h1 className="nav-title">Bookstore CMS</h1>
          <p className="nav-link"><NavLink to="/">BOOKS</NavLink></p>
          <p className="nav-link"><NavLink to="/categories">CATEGORIES</NavLink></p>
        </div>
      </div>
    </nav>
  </header>
);

export default NavBar;
