import React from 'react'
import logo from "../../assets/logo/apps-goodnotes.svg"
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css'
function Header() {
  return (
    <div>
      <div className="HeaderBackground">
        <div className="logoAndText">
          <img
            src={logo}
            className="img-fluid logoImg"
            alt="Logo"
            style={{ maxWidth: "100px", maxHeight: "100px" }}
          />
          <h1 className="logoText">Note App</h1>
          <div className='UsernameLogout'>
            <h4 className="logoText">Username</h4>
            <h4 className="logoText">Logout</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header

