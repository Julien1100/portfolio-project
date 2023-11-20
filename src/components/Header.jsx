import React from "react";
import Socials from "./Socials";

function Header() {
  return (
    <>
      <div className="header">
        <p className="name">François Truchon</p>
        <div className="socials">
          <Socials />
        </div>
      </div>
    </>
  );
}

export default Header;
