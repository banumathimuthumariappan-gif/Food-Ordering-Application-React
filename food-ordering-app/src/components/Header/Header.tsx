import useAuth from "../../hooks/useAuth";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const {isLoggedIn, username, login, logout} = useAuth();

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img src={logo} alt="Foodie Logo" height={40} />
          </a>
          <div className="navbar-nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="about" className="nav-link">
              About Us
            </Link>
            <Link to="contact" className="nav-link">
              Contact Us
            </Link>
            <Link to="cart" className="nav-link">
              Cart
            </Link>
            {username && (
              <a href="" className="nav-link">
                {username}
              </a>
            )}
            <button
              className="btn btn-sm btn-primary"
              onClick={isLoggedIn ? logout : login}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
