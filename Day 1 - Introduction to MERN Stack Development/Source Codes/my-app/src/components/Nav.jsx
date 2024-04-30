import React from "react";

function Nav() {
  return (
    <div>
      <nav>
        <ul className="nav">
          <li>Logo</li>
          <div className="menu">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </div>
          <button>Sign Up</button>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
