import React from "react";
import "./Header.css";
import mycover from "../../assets/mycover.png";
function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src={mycover} alt="" />
    </div>
  );
}

export default Header;
