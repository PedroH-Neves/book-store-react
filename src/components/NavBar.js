import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <header className="nav-header">
    <nav className="navbar">
      <div>
        <div>
          <h1>Bookstore</h1>
          <span className="nav-link"><NavLink to="/">Books</NavLink></span>
          <span className="nav-link"><NavLink to="/categories">Categories</NavLink></span>
        </div>
      </div>
    </nav>
  </header>
);

export default NavBar;
