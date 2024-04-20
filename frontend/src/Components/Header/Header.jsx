import React from "react";
import "bootstrap/dist/css/bootstrap.css";
export default function Header() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid custom-bg">
          <a className="navbar-brand custom-bg">Note App</a>
        </div>
      </nav>
    </div>
  );
}
