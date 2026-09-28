import logo from "../../assets/logo.jpg";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img src={logo} alt="Foodie Logo" height={40} />
          </a>
          <div className="navbar-nav">
            <a href="" className="nav-link">
              Home
            </a>
            <a href="" className="nav-link">
              About Us
            </a>
            <a href="" className="nav-link">
              Contact Us
            </a>
            <a href="" className="nav-link">
              Cart
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
