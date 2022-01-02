import { Link } from "gatsby";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-header">
          <div className="logo">
            <Link to="/">MONES</Link>
          </div>
          <div className="navigation">
            <nav>
              <Link to="/about">About</Link>
              <Link to="/work">Work</Link>
              <Link to="/photography">Photography</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
