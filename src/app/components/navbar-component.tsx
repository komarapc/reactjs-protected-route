import { Fragment } from "react";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#009688" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Learn ReactJS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/admin" className="nav-link">
                  Admin
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/user" className="nav-link">
                  User
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/post" className="nav-link">
                  Post
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div className="d-flex">
              <button
                className="btn btn-sm"
                style={{ backgroundColor: "#004D40", color: "#fff" }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default NavbarComponent;
