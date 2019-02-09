import React from 'react';
import PropTypes from 'prop-types'; // ShortHand-impt
import { Link } from 'react-router-dom';

// function Header()
const Header = props => {
  const { branding } = props;
  return (
    // <div>
    //   {/* <h1 style={headingStyle}>{branding} </h1> */}
    //   <h1>{branding} </h1>
    // </div>

    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home"> Home</i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus"> Add</i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question"> About</i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My App' // If no property is passed, this will be passed.
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

// const headingStyle = {
//   color: 'red',
//   fontSize: '50px'
// };

export default Header;
