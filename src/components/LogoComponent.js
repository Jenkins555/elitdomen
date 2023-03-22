import React from 'react';
import logo from '../img/logo1.png';
import '../css/LogoComponent.css';

const LogoComponent = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
};

export default LogoComponent;