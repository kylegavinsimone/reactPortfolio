import React from "react";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">React Profile</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
             
                <li
                  className="nav-item nav-link"
                  onClick={() => props.setCurrent(props.components[0])}
                >
                  about
                </li>
                <li
                  className="nav-item nav-link"
                  onClick={() => props.setCurrent(props.components[1])}
                >
                  contact
                </li>
                <li
                  className="nav-item nav-link"
                  onClick={() => props.setCurrent(props.components[2])}
                >
                  portfolio
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
