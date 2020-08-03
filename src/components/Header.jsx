import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';
import logo from '../assets/images/logo.svg';

const Header = props => {
  const { score } = props;
  return (
    <header>
      <img src={logo} alt="Songbird logo" />
      <h3>
        Score:
        {` ${score}`}
      </h3>
    </header>
  );
};

Header.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Header;
