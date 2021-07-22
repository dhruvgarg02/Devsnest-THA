import {Link} from "react-router-dom"

function Nav() {

    const navStyle = {
        color: 'white'
    }

    return (
      <nav>
        <ul className="nav-links">
          <Link style={navStyle} to='/'>
            <li>Home</li>
          </Link>
          <Link style={navStyle} to='/about'>
            <li>About</li>
          </Link>
          <Link style={navStyle} to='/profile'>
            <li>Profile</li>
          </Link>
          <Link style={navStyle} to='/dashboard'>
            <li>Dashboard</li>
          </Link>
        </ul>
      </nav>
    );
}

export default Nav;
