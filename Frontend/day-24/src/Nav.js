import {Link} from "react-router-dom"

function Nav() {

    const navStyle = {
        color: 'white'
    }

    return (
      <nav>
        <ul className="nav-links">
          <Link style={navStyle} to="/build/">
            <li>Home</li>
          </Link>
          <Link style={navStyle} to="/build/about/">
            <li>About</li>
          </Link>
          <Link style={navStyle} to="/build/profile/">
            <li>Profile</li>
          </Link>
          <Link style={navStyle} to="/build/dashboard/">
            <li>Dashboard</li>
          </Link>
        </ul>
      </nav>
    );
}

export default Nav;
